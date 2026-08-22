$dir = "c:\Users\HP\NEW client demo\app\src\assets\logos"
$headers = @{ "User-Agent" = "StandardCateringLogoDownloader/1.0 (contact@standard.eg)" }

function Search-WikiFile($query, $wiki = "commons") {
    $base = if ($wiki -eq "commons") { "https://commons.wikimedia.org" } else { "https://ar.wikipedia.org" }
    $enc = [Uri]::EscapeDataString($query)
    $api = "$base/w/api.php?action=query&list=search&srsearch=File:$enc&srnamespace=6&srlimit=5&format=json"
    try {
        $resp = Invoke-RestMethod -Uri $api -Headers $headers -TimeoutSec 15
        return $resp.query.search | Select-Object -First 5
    } catch { return $null }
}

function GetURL-FromTitle($title, $wiki = "commons") {
    $base = if ($wiki -eq "commons") { "https://commons.wikimedia.org" } else { "https://ar.wikipedia.org" }
    $enc = [Uri]::EscapeDataString($title)
    $api = "$base/w/api.php?action=query&titles=$enc&prop=imageinfo&iiprop=url&format=json"
    try {
        $resp = Invoke-RestMethod -Uri $api -Headers $headers -TimeoutSec 15
        $page = $resp.query.pages.PSObject.Properties.Value | Select-Object -First 1
        return $page.imageinfo[0].url
    } catch { return $null }
}

function Download($name, $url) {
    $path = Join-Path $dir $name
    if (Test-Path $path) { Write-Host "SKIP (exists): $name"; return }
    try {
        Start-Sleep -Milliseconds 600
        Invoke-WebRequest -Uri $url -OutFile $path -Headers $headers -TimeoutSec 30
        $sz = [math]::Round((Get-Item $path).Length/1KB,1)
        Write-Host "  OK: $name ($sz KB)"
    } catch {
        Write-Host "  FAIL: $name - $_"
    }
}

# === Search for missing files ===

Write-Host "--- Searching Vodafone ---"
$r = Search-WikiFile "Vodafone logo svg"
$r | ForEach-Object { Write-Host "  $($_.title)" }

Write-Host "--- Searching Elsewedy ---"
$r = Search-WikiFile "Elsewedy Electric"
$r | ForEach-Object { Write-Host "  $($_.title)" }

Write-Host "--- Searching GB Auto ---"
$r = Search-WikiFile "GB Auto Egypt"
$r | ForEach-Object { Write-Host "  $($_.title)" }

Write-Host "--- Searching Benha University ---"
$r = Search-WikiFile "Benha University"
$r | ForEach-Object { Write-Host "  $($_.title)" }

Write-Host "--- Searching MSA University ---"
$r = Search-WikiFile "MSA University Egypt"
$r | ForEach-Object { Write-Host "  $($_.title)" }

Write-Host "--- Searching Future University Egypt ---"
$r = Search-WikiFile "Future University Egypt"
$r | ForEach-Object { Write-Host "  $($_.title)" }

Write-Host "--- Searching Nahda University ---"
$r = Search-WikiFile "Nahda University Egypt"
$r | ForEach-Object { Write-Host "  $($_.title)" }

Write-Host ""
Write-Host "--- Trying direct Vodafone URL ---"
$vUrl = GetURL-FromTitle "File:Vodafone_logo_2017.svg"
Write-Host "  $vUrl"
$vUrl2 = GetURL-FromTitle "File:Vodafone_Logo.svg"
Write-Host "  $vUrl2"
$vUrl3 = GetURL-FromTitle "File:Vodafonlogo.svg"
Write-Host "  $vUrl3"
