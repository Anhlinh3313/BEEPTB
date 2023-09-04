using System;
using Core.Business.ViewModels.Mappings;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Http;
using Core.Infrastructure.Extensions;
using System.Net;
using Core.Business.Services.Models;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using Core.Data;
using Core.Entity.Entities;
using Microsoft.AspNetCore.Identity;
using Core.Infrastructure.Http;
using FluentValidation.AspNetCore;
using Newtonsoft.Json;
using Core.Infrastructure;
using Core.Business.Services;

namespace Core.Api
{
    public partial class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = Configuration.GetConnectionString("DefaultConnection");
            //Store global connection string
            Connection.Create(connectionString);
            Console.WriteLine("DefaultConnection: " + connectionString);

            // Add framework services.
            services.Configure<FormOptions>(options => options.BufferBody = true);
            services.AddDbContext<ApplicationContext>(options =>
                options.UseSqlServer(connectionString));

			// Add framework services.
			services.AddOptions();

            // Automapper Configuration
            AutoMapperConfiguration.Configure();

            // Enable Cors
            //services.AddCors();

            services.AddCors(options => options.AddPolicy("CorsPolicy", builder =>
            {
                builder.AllowAnyMethod().AllowAnyHeader()
                       .AllowAnyOrigin()
                       .AllowCredentials();
            }));

            // Add MVC services to the services container.
            services.AddMvc()
                .AddJsonOptions(opts =>
                {
                    // Force Camel Case to JSON
                    opts.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    opts.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                });

            // Configure with Microsoft.Extensions.Options.ConfigurationExtensions
            // Binding the whole configuration should be rare, subsections are more typical.
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            services.Configure<SendMail>(Configuration.GetSection("SendMail"));

            //Add service Http context
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // Extend services
            JwtConfigService(services);
            MappingScopeService(services);
            services.AddSignalR(o => {
                o.EnableDetailedErrors = true;
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "BEEP SYSTEMS API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();
            //Configure app
            app.UseStaticHttpContext();

            // Add MVC to the request pipeline.
            //app.UseCors(builder =>
            //    builder.AllowAnyOrigin()
            //    .AllowAnyHeader()
            //    .AllowAnyMethod());

            app.UseCors("CorsPolicy");

            app.UseExceptionHandler(
              builder =>
              {
                  builder.Run(
                    async context =>
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            context.Response.AddApplicationError(error.Error.Message);
                            await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                        }
                    });
              });

			// Use Authentication
			app.UseAuthentication();

            // Extend config
            JwtConfig(app, loggerFactory);
            MiddlewareConfig(app, loggerFactory);

            app.UseSignalR(routes =>
            {
                routes.MapHub<SignalRHubService>("/api/SignalR");
            });

            // Use MVC
            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "BEEP SYSTEMS API V1");
            });
        }
    }
}
