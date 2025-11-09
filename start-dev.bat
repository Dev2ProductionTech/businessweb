@echo off
echo Starting Dev2Production.Tech Development Environment
echo.

REM Start backend server in new window
echo [1/2] Starting Backend Email Server...
start cmd /k "cd server && npm run dev"

REM Wait 2 seconds for backend to initialize
timeout /t 2 /nobreak > nul

REM Start frontend in current window
echo [2/2] Starting Frontend Development Server...
npm run dev

pause
