$dir = "c:\Users\HP\NEW client demo\app\src\assets\logos"
$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120" }

$logos = @(
    @{ name = "amazon.svg";           url = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    @{ name = "vodafone.svg";         url = "https://upload.wikimedia.org/wikipedia/commons/a/af/Vodafone_Logo.svg" },
    @{ name = "teleperformance.png";  url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Teleperformance_logo.svg/400px-Teleperformance_logo.svg.png" },
    @{ name = "pg.svg";               url = "https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg" },
    @{ name = "elaraby.png";          url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Elaraby-group-logo.png/400px-Elaraby-group-logo.png" },
    @{ name = "elsewedy.png";         url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Elsewedy_Electric.svg/400px-Elsewedy_Electric.svg.png" },
    @{ name = "jotun.svg";            url = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Jotun_logo.svg" },
    @{ name = "cocacola.svg";         url = "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
    @{ name = "gbghabbour.png";       url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/GB_Auto_S.A.E._logo.svg/400px-GB_Auto_S.A.E._logo.svg.png" },
    @{ name = "benha-university.png"; url = "https://upload.wikimedia.org/wikipedia/ar/thumb/b/b3/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A8%D9%86%D9%87%D8%A7.png/220px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A8%D9%86%D9%87%D8%A7.png" },
    @{ name = "msa-university.png";   url = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/MSA_University.png/200px-MSA_University.png" },
    @{ name = "fue-university.png";   url = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/FUE_Logo.png/200px-FUE_Logo.png" },
    @{ name = "nahda-university.png"; url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nahda_University.png/200px-Nahda_University.png" }
)

foreach ($logo in $logos) {
    $path = Join-Path $dir $logo.name
    try {
        Invoke-WebRequest -Uri $logo.url -OutFile $path -Headers $headers -TimeoutSec 30
        $size = (Get-Item $path).Length
        Write-Host "OK: $($logo.name) ($size bytes)"
    } catch {
        Write-Host "FAIL: $($logo.name) - $_"
    }
}

Write-Host ""
Write-Host "=== Done ==="
Write-Host "Files in logos dir:"
Get-ChildItem $dir -File | Select-Object Name, Length | Format-Table -AutoSize
