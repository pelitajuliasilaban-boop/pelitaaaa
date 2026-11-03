@echo off
title Push SIPAD Taput ke GitHub
echo ========================================================
echo   Mempersiapkan Sinkronisasi dan Push ke GitHub
echo   Repository: https://github.com/pelitajuliasilaban-boop/pelitaaaa.git
echo ========================================================
echo.

set PATH=C:\laragon\bin\git\cmd;%PATH%

echo Memeriksa status Git...
git status
echo.

echo Melakukan push ke origin main...
echo (Jika jendela peramban muncul, silakan klik 'Authorize' untuk GitHub)
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   BERHASIL! Proyek berhasil di-push ke GitHub!
    echo ========================================================
) else (
    echo [INFO] Terjadi kendala autentikasi. Silakan periksa kredensial / Personal Access Token Anda.
)
echo.
pause

