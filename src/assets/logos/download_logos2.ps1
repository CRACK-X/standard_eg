$dir = "c:\Users\HP\NEW client demo\app\src\assets\logos"
$headers = @{ "User-Agent" = "StandardCateringLogoDownloader/1.0 (contact@standard.com)" }

function Download($name, $url) {
    $path = Join-Path $dir $name
    if (Test-Path $path) { Write-Host "SKIP (exists): $name"; return }
    try {
        Start-Sleep -Milliseconds 1200
        Invoke-WebRequest -Uri $url -OutFile $path -Headers $headers -TimeoutSec 30
        $size = (Get-Item $path).Length
        Write-Host "OK: $name ($size bytes)"
    } catch {
        Write-Host "FAIL: $name - $_"
    }
}

# --- Well-known public domain logos ---
Download "amazon.svg"       "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
Download "pg.svg"           "https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg"
Download "cocacola.svg"     "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"

# Vodafone - correct SVG URL
Download "vodafone.svg"     "https://upload.wikimedia.org/wikipedia/commons/2/2f/Vodafone_Europe_logo.svg"

# Jotun - with delay to avoid 429
Download "jotun.png"        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jotun_logo.svg/320px-Jotun_logo.svg.png"

# Elaraby - full resolution png (not thumbnail)
Download "elaraby.png"      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Elaraby-group-logo.png"

# Elsewedy Electric SVG
Download "elsewedy.svg"     "https://upload.wikimedia.org/wikipedia/commons/9/9f/Elsewedy_Electric.svg"

# Teleperformance SVG
Download "teleperformance.svg" "https://upload.wikimedia.org/wikipedia/commons/c/cd/Teleperformance_logo.svg"

# GB Auto
Download "gbghabbour.svg"   "https://upload.wikimedia.org/wikipedia/commons/5/5e/GB_Auto_S.A.E._logo.svg"

# Jotun SVG
Download "jotun.svg"        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Jotun_logo.svg"

# --- Egyptian universities - try full-res PNG ---
Download "benha-university.png" "https://upload.wikimedia.org/wikipedia/ar/b/b3/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A8%D9%86%D9%87%D8%A7.png"

# MSA University - try commons
Download "msa-university.png"   "https://upload.wikimedia.org/wikipedia/commons/4/40/MSA_University.png"

# FUE
Download "fue-university.png"   "https://upload.wikimedia.org/wikipedia/commons/0/00/FUE_Logo.png"

# El Nahda University
Download "nahda-university.png" "https://upload.wikimedia.org/wikipedia/commons/e/e5/Nahda_University.png"

Write-Host ""
Write-Host "=== Final state ==="
Get-ChildItem $dir -File | Where-Object { $_.Name -ne "download_logos.ps1" -and $_.Name -ne "download_logos2.ps1" } | Select-Object Name, @{N='KB';E={[int]($_.Length/1KB)}} | Format-Table -AutoSize
