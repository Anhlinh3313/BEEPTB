using Core.Entity.Abstract;
using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_UpdatePermission : IEntityProcView
    {
        public const string Procname = "Proc_UpdatePermission";
        [Key]
        public int IsEnabled { get; set; }

        public Proc_UpdatePermission()
        {

        }

        public static IEntityProc GetEntityProc(int moduleId, List<RolePage> rolePages)
        {
            DataTable rolePages_Table = new DataTable();
            rolePages_Table.Columns.Add("IsEnabled", typeof(bool));
            rolePages_Table.Columns.Add("RoleId", typeof(int));
            rolePages_Table.Columns.Add("PageId", typeof(int));
            rolePages_Table.Columns.Add("IsAccess", typeof(bool));
            rolePages_Table.Columns.Add("IsAdd", typeof(bool));
            rolePages_Table.Columns.Add("IsEdit", typeof(bool));
            rolePages_Table.Columns.Add("IsDelete", typeof(bool));

            foreach (var x in rolePages.ToArray())
            {
                DataRow rolePage_Row = rolePages_Table.NewRow();
                rolePage_Row["IsEnabled"] = x.IsEnabled;
                rolePage_Row["RoleId"] = x.RoleId;
                rolePage_Row["PageId"] = x.PageId;
                rolePage_Row["IsAccess"] = x.IsAccess;
                rolePage_Row["IsAdd"] = x.IsAdd;
                rolePage_Row["IsEdit"] = x.IsEdit;
                rolePage_Row["IsDelete"] = x.IsDelete;
                rolePages_Table.Rows.Add(rolePage_Row);
            }

            SqlParameter ModuleId = new SqlParameter("@moduleId", moduleId);

            SqlParameter ListRolePages = new SqlParameter("@listRolePages", rolePages_Table);
            ListRolePages.TypeName = "ListRolePages_Table";
            if (rolePages_Table.Rows.Count == 0)
            {
                ListRolePages.Value = DBNull.Value;
            }

            return new EntityProc(
                $"{Procname} @moduleId,@listRolePages",
                 new SqlParameter[]
                 {
                     ModuleId,
                     ListRolePages
                 }
                );
        }
    }
}
