$dir = "c:\Users\HP\NEW client demo\app\src\assets\logos"
$headers = @{ "User-Agent" = "StandardCateringLogoDownloader/1.0 (standardcateringegypt@gmail.com)" }

function GetWikimediaURL($filename, $wiki = "commons") {
    $base = if ($wiki -eq "commons") { "https://commons.wikimedia.org" } else { "https://ar.wikipedia.org" }
    $api = "$base/w/api.php?action=query&titles=File:$([Uri]::EscapeDataString($filename))&prop=imageinfo&iiprop=url&format=json"
    try {
        $resp = Invoke-RestMethod -Uri $api -Headers $headers -TimeoutSec 15
        $pages = $resp.query.pages
        $page = $pages.PSObject.Properties.Value | Select-Object -First 1
        return $page.imageinfo[0].url
    } catch {
        Write-Host "  API error for $filename : $_"
        return $null
    }
}

function Download($name, $filename, $wiki = "commons") {
    $path = Join-Path $dir $name
    if (Test-Path $path) { Write-Host "SKIP (exists): $name"; return }
    Write-Host "Resolving: $filename ..."
    $url = GetWikimediaURL $filename $wiki
    if (-not $url) { Write-Host "  No URL found for $filename"; return }
    Write-Host "  URL: $url"
    try {
        Start-Sleep -Milliseconds 800
        Invoke-WebRequest -Uri $url -OutFile $path -Headers $headers -TimeoutSec 30
        $size = (Get-Item $path).Length
        Write-Host "  OK: $name ($size bytes)"
    } catch {
        Write-Host "  FAIL download: $name - $_"
    }
}

# --- GLOBAL BRANDS ---
Download "amazon.svg"          "Amazon_logo.svg"
Download "vodafone.svg"        "Vodafone_2017_logo.svg"
Download "pg.svg"              "Procter_&_Gamble_logo.svg"
Download "cocacola.svg"        "Coca-Cola_logo.svg"
Download "teleperformance.svg" "Teleperformance_logo.svg"

# Jotun
Download "jotun.svg"           "Jotun_logo.svg"

# Elaraby
Download "elaraby.png"         "Elaraby_Group.png"

# Elsewedy
Download "elsewedy.svg"        "ElSewedy_Electric.svg"

# GB Auto / Ghabbour
Download "gbghabbour.svg"      "GB_Auto_(Egypt).svg"

# --- EGYPTIAN UNIVERSITIES ---
# Benha University (Arabic Wikipedia)
Download "benha-university.png" "شعار_جامعة_بنها.png" "ar"

# MSA University
Download "msa-university.png"  "MSA_University_logo.png"

# Future University Egypt
Download "fue-university.png"  "Future_University_Egypt.png"

# El Nahda University
Download "nahda-university.png" "Nahda_University_logo.png"

Write-Host ""
Write-Host "=== Final state ==="
Get-ChildItem $dir -File | Where-Object { $_.Extension -ne ".ps1" } | Select-Object Name, @{N='KB';E={[math]::Round($_.Length/1KB,1)}} | Format-Table -AutoSize
