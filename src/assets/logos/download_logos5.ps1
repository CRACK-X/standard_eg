$dir = "c:\Users\HP\NEW client demo\app\src\assets\logos"
$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120" }

function GetCommonsURL($title) {
    $enc = [Uri]::EscapeDataString($title)
    $api = "https://commons.wikimedia.org/w/api.php?action=query&titles=$enc&prop=imageinfo&iiprop=url&format=json"
    try {
        $resp = Invoke-RestMethod -Uri $api -Headers $headers -TimeoutSec 15
        $page = $resp.query.pages.PSObject.Properties.Value | Select-Object -First 1
        return $page.imageinfo[0].url
    } catch { return $null }
}

function GetArWikiURL($title) {
    $enc = [Uri]::EscapeDataString($title)
    $api = "https://ar.wikipedia.org/w/api.php?action=query&titles=$enc&prop=imageinfo&iiprop=url&format=json"
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
        Start-Sleep -Milliseconds 800
        Invoke-WebRequest -Uri $url -OutFile $path -Headers $headers -TimeoutSec 30
        $sz = [math]::Round((Get-Item $path).Length/1KB,1)
        Write-Host "OK: $name ($sz KB)"
    } catch {
        Write-Host "FAIL: $name - $_"
    }
}

# GB Auto - try different variations
Write-Host "--- GB Auto ---"
$candidates = @(
    "File:GB Automobiles.svg",
    "File:Ghabbour Auto.svg",
    "File:GB Auto.svg",
    "File:GB Auto Egypt.png",
    "File:Ghabbour.png"
)
foreach ($c in $candidates) {
    $u = GetCommonsURL $c
    if ($u) { Write-Host "Found: $c => $u"; Download "gbghabbour.png" $u; break }
    else { Write-Host "Not found: $c" }
}

# Benha University - try Arabic Wikipedia
Write-Host ""
Write-Host "--- Benha University ---"
$benhaFiles = @(
    "File:شعار_جامعة_بنها.png",
    "File:Benha_University_logo.png",
    "File:Banha_University.png"
)
foreach ($c in $benhaFiles) {
    $u = GetArWikiURL $c
    if (-not $u) { $u = GetCommonsURL $c }
    if ($u) { Write-Host "Found: $c => $u"; Download "benha-university.png" $u; break }
    else { Write-Host "Not found: $c" }
}

# MSA University - try variations
Write-Host ""
Write-Host "--- MSA University ---"
$msaFiles = @(
    "File:MSA_University.png",
    "File:October_University_logo.png",
    "File:MSA_logo.png",
    "File:MSA_university_Egypt.svg"
)
foreach ($c in $msaFiles) {
    $u = GetCommonsURL $c
    if ($u) { Write-Host "Found: $c => $u"; Download "msa-university.png" $u; break }
    else { Write-Host "Not found: $c" }
}

# El Nahda University
Write-Host ""
Write-Host "--- El Nahda University ---"
$nahdaFiles = @(
    "File:NUB_logo.png",
    "File:El-Nahda_University.png",
    "File:Nahda_university_Egypt.png"
)
foreach ($c in $nahdaFiles) {
    $u = GetCommonsURL $c
    if ($u) { Write-Host "Found: $c => $u"; Download "nahda-university.png" $u; break }
    else { Write-Host "Not found: $c" }
}

# Try school official website logos
Write-Host ""
Write-Host "--- Trying official school websites ---"

# Silicon Valley School Egypt
try {
    $r = Invoke-WebRequest -Uri "https://svs-school.com" -Headers $headers -TimeoutSec 15 -UseBasicParsing
    if ($r.Content -match 'src="([^"]*logo[^"]*)"') { Write-Host "SVS logo hint: $($matches[1])" }
} catch { Write-Host "SVS website failed" }

Write-Host ""
Write-Host "=== Final logos ==="
Get-ChildItem $dir -File | Where-Object { $_.Extension -ne ".ps1" } | Select-Object Name, @{N='KB';E={[math]::Round($_.Length/1KB,1)}} | Format-Table -AutoSize
