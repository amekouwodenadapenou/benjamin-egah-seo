$file = "C:\Users\therese\Desktop\Siteweb\Ben 2\index.html"
$content = Get-Content $file -Raw -Encoding UTF8
$content = $content -replace ' data-i18n-placeholder="[^"]*"', ''
$content = $content -replace ' data-i18n="[^"]*"', ''
[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done - all data-i18n attributes removed"
