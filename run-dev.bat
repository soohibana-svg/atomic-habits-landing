@echo off
cd /d "%~dp0"
echo Starting dev server...
start /B npm.cmd run dev > dev.log 2>&1
echo Started with PID check...
timeout /t 6 >nul
echo === dev.log ===
type dev.log
echo === port check ===
netstat -ano | findstr :3000
echo === done ===
