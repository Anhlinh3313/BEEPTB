@REM (robocopy ..\Publish\runtimes C:\BEEP_PUBLISH\apisystems.beep.dev.rnt.vn\runtimes /e) ^& IF %ERRORLEVEL% LSS 8 SET ERRORLEVEL = 0
copy ..\Publish\*.dll C:\BEEP_PUBLISH\apisystems.beep.dev.rnt.vn\
copy ..\Publish\*.pdb C:\BEEP_PUBLISH\apisystems.beep.dev.rnt.vn\
copy ..\Publish\Core.Api.exe C:\BEEP_PUBLISH\apisystems.beep.dev.rnt.vn\Core.Api.exe
copy ..\Publish\Core.Api.deps.json C:\BEEP_PUBLISH\apisystems.beep.dev.rnt.vn\Core.Api.deps.json
copy ..\Publish\Core.Api.runtimeconfig.json C:\BEEP_PUBLISH\apisystems.beep.dev.rnt.vn\Core.Api.runtimeconfig.json