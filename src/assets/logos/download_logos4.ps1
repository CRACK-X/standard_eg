$dir = "c:\Users\HP\NEW client demo\app\src\assets\logos"
$headers = @{ "User-Agent" = "StandardCateringLogoDownloader/1.0 (contact@standard.eg)" }

function GetURL($title) {
    $enc = [Uri]::EscapeDataString($title)
    $api = "https://commons.wikimedia.org/w/api.php?action=query&titles=$enc&prop=imageinfo&iiprop=url&format=json"
    try {
        $resp = Invoke-RestMethod -Uri $api -Headers $headers -TimeoutSec 15
        $page = $resp.query.pages.PSObject.Properties.Value | Select-Object -First 1
        return $page.imageinfo[0].url
    } catch { return $null }
}

function Download($name, $url) {
    $path = Join-Path $dir $name
    if (Test-Path $path) { Write-Host "SKIP: $name"; return }
    try {
        Start-Sleep -Milliseconds 700
        Invoke-WebRequest -Uri $url -OutFile $path -Headers $headers -TimeoutSec 30
        $sz = [math]::Round((Get-Item $path).Length/1KB,1)
        Write-Host "OK: $name ($sz KB)"
    } catch {
        Write-Host "FAIL: $name"
    }
}

# Direct confirmed URLs from previous search
Download "vodafone.svg"    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Vodafone_logo_2017.svg"

# Elsewedy - confirmed File:Elsewedy Electric.svg
$elsewedy = GetURL "File:Elsewedy Electric.svg"
Write-Host "Elsewedy URL: $elsewedy"
if ($elsewedy) { Download "elsewedy.svg" $elsewedy }

# FUE - File:Fue.png
$fue = GetURL "File:Fue.png"
Write-Host "FUE URL: $fue"
if ($fue) { Download "fue-university.png" $fue }

# Vodafone 2017 logo
$voda = GetURL "File:Vodafone Logo.svg"
Write-Host "Vodafone Logo.svg URL: $voda"

Write-Host ""
Write-Host "=== Logos downloaded so far ==="
Get-ChildItem $dir -File | Where-Object { $_.Extension -ne ".ps1" } | Select-Object Name, @{N='KB';E={[math]::Round($_.Length/1KB,1)}} | Format-Table -AutoSize
