# ============================================================
# organize_assets.ps1
# Organizes /public assets into page/section subfolders and
# updates all .tsx / .ts / .jsx / .js source references.
# ============================================================

$root   = "c:\Users\91974\Downloads\PrideEventz-echo-forge\PrideEventz-echo-forge"
$public = "$root\public"

# -------- 1. Define the mapping: destination subfolder -> source file(s) --------
# Format: "subfolder/filename" -> original filename in /public
# If an asset is used in multiple pages, it appears under multiple entries.

$assetMap = @{

  # ── HOME ──────────────────────────────────────────────────────────────────────
  "home/hero/hero-video.mp4"                              = "13003409_1920_1080_30fps.mp4"
  "home/hero/fmcg-product-launch-event.jpg"               = "fmcg-product-launch-event.jpg"
  "home/hero/tech-brand-activation-event.jpg"             = "tech-brand-activation-event.jpg"
  "home/hero/hero-motocorp-annual-conference-stage-setup.jpg" = "hero-motocorp-annual-conference-stage-setup.jpg"
  "home/hero/santa-party-decoration-event.jpg"            = "santa-party-decoration-event.jpg"
  "home/hero/company-anniversary-gala-elegant-setup.jpg"  = "company-anniversary-gala-elegant-setup.jpg"
  "home/hero/exhibition-trade-show-atomfrost.jpg"         = "exhibition-trade-show-atomfrost.jpg"
  "home/hero/premium-party-atmosphere.jpg"                = "premium-party-atmosphere.jpg"

  "home/mission/mall-exhibition-hall-event-space.jpg"     = "mall-exhibition-hall-event-space.jpg"

  "home/team/santa-party-decoration-event.jpg"            = "santa-party-decoration-event.jpg"
  "home/team/exhibition-trade-show-atomfrost.jpg"         = "exhibition-trade-show-atomfrost.jpg"

  "home/cta/elegant-event-celebration.jpg"                = "elegant-event-celebration.jpg"

  # ── ABOUT ─────────────────────────────────────────────────────────────────────
  "about/hero/luxury-event-venue-with-elegant-decorations.jpg" = "luxury-event-venue-with-elegant-decorations.jpg"

  "about/introduction/luxury-event-party-celebration.jpg" = "luxury-event-party-celebration.jpg"
  "about/introduction/corporate-event-exhibition.jpg"     = "corporate-event-exhibition.jpg"
  "about/introduction/elegant-event-venue-decoration.jpg" = "elegant-event-venue-decoration.jpg"

  "about/team/professional-headshot.png"                  = "professional-headshot.png"
  "about/team/corporate-event-exhibition.jpg"             = "corporate-event-exhibition.jpg"
  "about/team/elegant-event-venue-decoration.jpg"         = "elegant-event-venue-decoration.jpg"
  "about/team/luxury-event-party-celebration.jpg"         = "luxury-event-party-celebration.jpg"

  "about/timeline/2010-founding-event.jpg"                = "2010-founding-event.jpg"
  "about/timeline/corporate-event-2013.jpg"               = "corporate-event-2013.jpg"
  "about/timeline/celebration-100-events.jpg"             = "celebration-100-events.jpg"
  "about/timeline/virtual-event-2020.jpg"                 = "virtual-event-2020.jpg"
  "about/timeline/celebration-200-projects.jpg"           = "celebration-200-projects.jpg"

  "about/tailored/balloon-decoration-setup-black-gold.jpg" = "balloon-decoration-setup-black-gold.jpg"

  "about/services-carousel/event-venue-background.jpg"   = "event-venue-background.jpg"

  # ── CORPORATE ─────────────────────────────────────────────────────────────────
  "corporate/hero/corporate-event-presentation-stage-audience-pink-l.jpg" = "corporate-event-presentation-stage-audience-pink-l.jpg"

  "corporate/feature/corporate-event-hall-professional-lighting.jpg" = "corporate-event-hall-professional-lighting.jpg"
  "corporate/feature/hero-motocorp-corporate-event-stage-pink-branding-.jpg" = "hero-motocorp-corporate-event-stage-pink-branding-.jpg"

  "corporate/events/hero-motocorp-corporate-event-stage-pink-branding-.jpg" = "hero-motocorp-corporate-event-stage-pink-branding-.jpg"
  "corporate/events/corporate-conference-stage-setup-professional-ligh.jpg" = "corporate-conference-stage-setup-professional-ligh.jpg"
  "corporate/events/corporate-event-audience-seating-round-tables.jpg" = "corporate-event-audience-seating-round-tables.jpg"

  "corporate/shows/corporate-show-multi-screen-setup-audience-present.jpg" = "corporate-show-multi-screen-setup-audience-present.jpg"
  "corporate/shows/corporate-show-stage-lighting-professional-setup.jpg" = "corporate-show-stage-lighting-professional-setup.jpg"
  "corporate/shows/corporate-show-audience-engagement-presentation.jpg" = "corporate-show-audience-engagement-presentation.jpg"

  "corporate/statistics/corporate-event-statistics-background.jpg"    = "corporate-event-statistics-background.jpg"

  "corporate/case-studies/hero-motocorp-annual-conference-stage-setup.jpg" = "hero-motocorp-annual-conference-stage-setup.jpg"
  "corporate/case-studies/tech-product-launch-event-stage-lighting.jpg" = "tech-product-launch-event-stage-lighting.jpg"
  "corporate/case-studies/company-anniversary-gala-elegant-setup.jpg"  = "company-anniversary-gala-elegant-setup.jpg"

  "corporate/related/exhibition-trade-show-event.jpg"     = "exhibition-trade-show-event.jpg"
  "corporate/related/product-launch-event.png"            = "product-launch-event.png"
  "corporate/related/award-ceremony.png"                  = "award-ceremony.png"
  "corporate/related/team-building-outdoor-challenge.png" = "team-building-outdoor-challenge.png"

  # ── EXHIBITIONS ───────────────────────────────────────────────────────────────
  "exhibitions/hero/exhibition-event-crowd-stage-lighting.jpg" = "exhibition-event-crowd-stage-lighting.jpg"

  "exhibitions/feature/exhibition-visitors-gallery.jpg"   = "exhibition-visitors-gallery.jpg"
  "exhibitions/feature/museum-gallery-visitors-viewing-exhibits.jpg" = "museum-gallery-visitors-viewing-exhibits.jpg"

  "exhibitions/gallery/tech-exhibition-booth.jpg"         = "tech-exhibition-booth.jpg"
  "exhibitions/gallery/art-exhibition-gallery.jpg"        = "art-exhibition-gallery.jpg"
  "exhibitions/gallery/product-showcase-exhibition.jpg"   = "product-showcase-exhibition.jpg"
  "exhibitions/gallery/trade-show-booth.jpg"              = "trade-show-booth.jpg"
  "exhibitions/gallery/corporate-exhibition.jpg"          = "corporate-exhibition.jpg"
  "exhibitions/gallery/museum-exhibition.jpg"             = "museum-exhibition.jpg"

  "exhibitions/tech/tech-trade-show-expo-video-screens-displays.jpg" = "tech-trade-show-expo-video-screens-displays.jpg"

  "exhibitions/educational/modern-tech-exhibition-booth-blue-branding.jpg" = "modern-tech-exhibition-booth-blue-branding.jpg"

  "exhibitions/statistics/busy-exhibition-hall.jpg"       = "busy-exhibition-hall.jpg"

  "exhibitions/case-studies/tech-company-annual-expo.jpg" = "tech-company-annual-expo.jpg"
  "exhibitions/case-studies/art-museum-exhibition.jpg"    = "art-museum-exhibition.jpg"
  "exhibitions/case-studies/product-launch-showcase.jpg"  = "product-launch-showcase.jpg"

  "exhibitions/related/trade-show-booth.jpg"              = "trade-show-booth.jpg"

  # ── PROMOTIONS ────────────────────────────────────────────────────────────────
  "promotions/hero/concert-event-stage-with-crowd-pink-lighting.jpg" = "concert-event-stage-with-crowd-pink-lighting.jpg"

  "promotions/feature/promotional-event-product-launch.jpg" = "promotional-event-product-launch.jpg"
  "promotions/feature/tech-product-launch-event-with-blue-lighting-ipxa-.jpg" = "tech-product-launch-event-with-blue-lighting-ipxa-.jpg"

  "promotions/product-launches/mall-retail-activation-red-branded-booth-checkered.jpg" = "mall-retail-activation-red-branded-booth-checkered.jpg"

  "promotions/brand-promotions/mall-activation-aerial-view-shopping-mall-crowd-co.jpg" = "mall-activation-aerial-view-shopping-mall-crowd-co.jpg"

  "promotions/gallery/product-launch-event.png"           = "product-launch-event.png"
  "promotions/gallery/mall-activation.jpg"                = "mall-activation.jpg"
  "promotions/gallery/street-marketing-campaign.jpg"      = "street-marketing-campaign.jpg"
  "promotions/gallery/brand-promotion-event.jpg"          = "brand-promotion-event.jpg"
  "promotions/gallery/roadshow-event.jpg"                 = "roadshow-event.jpg"
  "promotions/gallery/sampling-campaign.jpg"              = "sampling-campaign.jpg"

  "promotions/statistics/promotional-event-crowd.jpg"     = "promotional-event-crowd.jpg"

  "promotions/case-studies/fmcg-product-launch-event.jpg" = "fmcg-product-launch-event.jpg"
  "promotions/case-studies/tech-brand-activation-event.jpg" = "tech-brand-activation-event.jpg"
  "promotions/case-studies/retail-mall-promotion-event.jpg" = "retail-mall-promotion-event.jpg"

  "promotions/testimonials/professional-headshot.png"     = "professional-headshot.png"

  "promotions/related/corporate-event.png"                = "corporate-event.png"
  "promotions/related/exhibition-event.jpg"               = "exhibition-event.jpg"

  # ── CLIENTS ───────────────────────────────────────────────────────────────────
  "clients/hero/concert-stage-lighting-event.jpg"         = "concert-stage-lighting-event.jpg"

  # ── PORTFOLIO ─────────────────────────────────────────────────────────────────
  "portfolio/hero/luxury-event-party-concert-pink-purple-lighting-cr.jpg" = "luxury-event-party-concert-pink-purple-lighting-cr.jpg"

  "portfolio/grid/corporate-event-with-crowd-stage-lighting.jpg" = "corporate-event-with-crowd-stage-lighting.jpg"
  "portfolio/grid/under-the-sea-themed-balloon-decoration-with-chara.jpg" = "under-the-sea-themed-balloon-decoration-with-chara.jpg"
  "portfolio/grid/corporate-presentation-pidilite-brands-showcase.jpg" = "corporate-presentation-pidilite-brands-showcase.jpg"
  "portfolio/grid/traditional-kerala-dancers-in-costumes-inauguratio.jpg" = "traditional-kerala-dancers-in-costumes-inauguratio.jpg"
  "portfolio/grid/sunfeast-arrowroot-stage-branding-corporate-event.jpg" = "sunfeast-arrowroot-stage-branding-corporate-event.jpg"
  "portfolio/grid/mall-event-with-massive-crowd-aerial-view.jpg"   = "mall-event-with-massive-crowd-aerial-view.jpg"
  "portfolio/grid/decorative-entrance-purple-pink-lighting-butterfly.jpg" = "decorative-entrance-purple-pink-lighting-butterfly.jpg"
  "portfolio/grid/idea-telecom-corporate-event-stage-branding.jpg"  = "idea-telecom-corporate-event-stage-branding.jpg"
  "portfolio/grid/elegant-wedding-stage-decoration.jpg"             = "elegant-wedding-stage-decoration.jpg"
  "portfolio/grid/trade-show-booth-setup-exhibition.jpg"            = "trade-show-booth-setup-exhibition.jpg"
  "portfolio/grid/conference-room-setup-corporate-event.jpg"        = "conference-room-setup-corporate-event.jpg"
  "portfolio/grid/live-performance-with-professional-lighting.jpg"  = "live-performance-with-professional-lighting.jpg"

  "portfolio/statistics/collage-event-photos-celebration.jpg"       = "collage-event-photos-celebration.jpg"

  "portfolio/testimonials/professional-man-headshot.png"  = "professional-man-headshot.png"
  "portfolio/testimonials/professional-woman-headshot.png" = "professional-woman-headshot.png"

  # ── SERVICES (shared layout) ──────────────────────────────────────────────────
  "services/layout/elegant-wedding-stage-decoration.jpg"  = "elegant-wedding-stage-decoration.jpg"
  "services/layout/mall-event-with-massive-crowd-aerial-view.jpg" = "mall-event-with-massive-crowd-aerial-view.jpg"

  # ── SHARED / PLACEHOLDERS ─────────────────────────────────────────────────────
  "shared/placeholder-logo.png"     = "placeholder-logo.png"
  "shared/placeholder-logo.svg"     = "placeholder-logo.svg"
  "shared/placeholder-user.jpg"     = "placeholder-user.jpg"
  "shared/placeholder.jpg"          = "placeholder.jpg"
  "shared/placeholder.svg"          = "placeholder.svg"
}

# -------- 2. Copy files to their new locations --------
Write-Host "`n=== Copying assets to organised subfolders ===" -ForegroundColor Cyan
$copied   = 0
$missing  = 0

foreach ($entry in $assetMap.GetEnumerator()) {
  $dest   = Join-Path $public $entry.Key
  $src    = Join-Path $public $entry.Value

  if (-not (Test-Path $src)) {
    Write-Warning "  MISSING source: $($entry.Value)"
    $missing++
    continue
  }

  $destDir = Split-Path $dest -Parent
  if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
  }

  Copy-Item -Path $src -Destination $dest -Force
  $copied++
}

Write-Host "  Copied : $copied files" -ForegroundColor Green
if ($missing -gt 0) { Write-Host "  Missing: $missing source files" -ForegroundColor Yellow }

# -------- 3. Build old-path -> new-path replacement table --------
# Because one original file can map to multiple destinations, we need
# per-component replacements.  We do a straightforward find-and-replace
# on each source file, swapping the flat /filename.ext with the first
# (canonical) organised path for each component folder.

# Map: component folder keyword -> subfolder prefix used for its assets
$componentFolderMap = @{
  "components\home"         = "home"
  "components\about"        = "about"
  "components\corporate"    = "corporate"
  "components\exhibitions"  = "exhibitions"
  "components\promotions"   = "promotions"
  "components\clients"      = "clients"
  "components\portfolio"    = "portfolio"
  "components\services"     = "services"
}

# Build flat-filename -> organised path lookup per page-group
# (picks the first matching destination subfolder for the page group)
function Get-PageAssetMap($pagePrefix) {
  $map = @{}
  foreach ($entry in $assetMap.GetEnumerator()) {
    if ($entry.Key.StartsWith($pagePrefix + "/")) {
      $filename = Split-Path $entry.Value -Leaf
      if (-not $map.ContainsKey($filename)) {
        $map[$filename] = "/" + $entry.Key.Replace("\", "/")
      }
    }
  }
  return $map
}

Write-Host "`n=== Updating source file references ===" -ForegroundColor Cyan
$filesUpdated = 0

$srcFiles = Get-ChildItem -Path $root -Recurse -Include "*.tsx","*.ts","*.jsx","*.js" |
  Where-Object { $_.FullName -notmatch "\\node_modules\\" -and $_.FullName -notmatch "\\.next\\" }

foreach ($file in $srcFiles) {
  # Determine which page group this file belongs to
  $pagePrefix = $null
  foreach ($kv in $componentFolderMap.GetEnumerator()) {
    if ($file.FullName -like "*\$($kv.Key)\*") {
      $pagePrefix = $kv.Value
      break
    }
  }
  if (-not $pagePrefix) { continue }

  $pageAssetMap = Get-PageAssetMap $pagePrefix
  if ($pageAssetMap.Count -eq 0) { continue }

  $content     = Get-Content $file.FullName -Raw
  $newContent  = $content

  foreach ($kv in $pageAssetMap.GetEnumerator()) {
    $oldRef = "/$($kv.Key)"   # e.g. /hero-motocorp-annual-conference-stage-setup.jpg
    $newRef = $kv.Value       # e.g. /corporate/case-studies/hero-motocorp-annual-conference-stage-setup.jpg
    if ($newContent -like "*$oldRef*") {
      $newContent = $newContent.Replace($oldRef, $newRef)
    }
  }

  if ($newContent -ne $content) {
    Set-Content -Path $file.FullName -Value $newContent -NoNewline
    Write-Host "  Updated: $($file.FullName -replace [regex]::Escape($root), '')" -ForegroundColor Green
    $filesUpdated++
  }
}

Write-Host "`n=== Done ===" -ForegroundColor Cyan
Write-Host "  Asset files copied : $copied"
Write-Host "  Source files updated: $filesUpdated"
Write-Host ""
Write-Host "Original flat files in /public are KEPT intact." -ForegroundColor DarkGray
Write-Host "You can delete them manually once you have verified the build." -ForegroundColor DarkGray
