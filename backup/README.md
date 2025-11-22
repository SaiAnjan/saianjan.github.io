# Website Backup - Organized for Next.js Migration

This backup contains all assets from your GitHub Pages website, organized in a structure that's ready for migration to Next.js, Vercel, and Supabase.

## 📁 Directory Structure

```
backup/
├── html/              # All HTML files (can be converted to Next.js pages/components)
├── css/               # All CSS files (can be moved to styles/ or converted to CSS modules)
├── scripts/           # JavaScript files (feather.min.js, siema.js, etc.)
├── project_two/       # Special project with audio, CSS, and JS
├── public/            # Static assets (Next.js public/ directory)
│   ├── images/        # All images organized by project
│   ├── fonts/         # Custom fonts (Ramabhadra-Regular.ttf)
│   ├── videos/        # Video files
│   ├── audio/         # Audio files from project_two
│   └── documents/     # PDFs (resume.pdf)
└── CNAME              # Domain configuration file
```

## 📋 Contents Overview

### HTML Files (`html/`)
- `index.html` - Main homepage
- `gpay.html` - Gpay + Wallet project
- `mindhouse.html` - Mindhouse live class filtering project
- `p2.html` - Teaching Strategies project
- `notem.html` - Note - M project
- `p3.html` - Tulasi project
- `msinternship_new.html` - Summer Internship project
- `pepper.html` - Pepper project
- `evaahan.html` - e - Vaahan project
- `anjani_font.html` - Anjani Font project
- `range-slider.html` - Dual Thumb Range Slider interaction
- `range-input.html` - Range input component
- `Map.html` - Map component
- `new.html` - Additional page

### CSS Files (`css/`)
- `index.css` - Main stylesheet
- `anjani_font.css` - Anjani font styles
- `p3.css` - Project 3 styles
- `new.css` - Additional styles

### Images (`public/images/`)
Organized by project:
- `anjani/` - Anjani font project images
- `ChargeIT/` - ChargeIT project images
- `evaahan/` - e-Vaahan project images (includes video.mp4)
- `interactions/` - Interaction technique images
- `mindhouse/` - Mindhouse project images
- `modern/` - Modern project images
- `msinternship/` - Microsoft internship images
- `note-m/` - Note-M project images
- `P2/` - Project 2 images
- `P3/` - Project 3 images
- `pepper/` - Pepper project images
- Plus individual image files (gpay.png, mindhouse.png, etc.)

### Fonts (`public/fonts/`)
- `Ramabhadra-Regular.ttf` - Custom font file

### Videos (`public/videos/`)
- `trail.mov` - Trail video (MOV format)
- `trail.mp4` - Trail video (MP4 format)

### Audio (`public/audio/`)
- Audio files from project_two (numbered 1.mp3 through 12.mp3)
- `selected.mp3` - Selected audio file
- `sel/` - Selected audio variations

### Documents (`public/documents/`)
- `resume.pdf` - Resume document

### Scripts (`scripts/`)
- `feather.min.js` - Feather icons library
- `siema.js` - Siema carousel library
- `siema.min.js` - Siema carousel library (minified)

### Project Two (`project_two/`)
Special project with its own structure:
- `audio/` - Audio files
- `css/` - Project-specific CSS
- `js/` - Project-specific JavaScript
- `index.html` - Project page

## 🚀 Next.js Migration Guide

### 1. Static Assets
All files in `backup/public/` should be copied to your Next.js `public/` directory:
```bash
cp -r backup/public/* your-nextjs-project/public/
```

### 2. HTML to Next.js Pages
- Convert HTML files in `backup/html/` to Next.js pages in `app/` or `pages/`
- Extract reusable components
- Convert inline styles to CSS modules or Tailwind classes

### 3. CSS Files
- Move CSS files to `styles/` or `app/globals.css`
- Consider converting to CSS modules or Tailwind CSS
- Update import paths

### 4. JavaScript Libraries
- Install via npm: `npm install feather-icons siema`
- Or copy to `public/scripts/` if needed as-is

### 5. Fonts
- Add fonts to `public/fonts/`
- Configure in `next.config.js` or use `next/font` for optimization

### 6. Images
- All images are in `public/images/`
- Consider optimizing images with `next/image`
- Update image paths in components

## 📝 Notes

- The `CNAME` file is for GitHub Pages custom domain configuration
- External dependencies (Tachyons CSS, Google Fonts) should be handled via npm or CDN
- Some HTML files reference external resources that may need to be updated
- Consider using Next.js Image component for better performance
- Audio/video files can be optimized or moved to a CDN (Supabase Storage)

## 🔗 External Dependencies

Your current site uses:
- Tachyons CSS (via CDN)
- Google Fonts (Inter, Rubik)
- Feather Icons
- Siema carousel

These should be added to your Next.js project via npm or kept as CDN links.

## ✅ Checklist for Migration

- [ ] Copy all static assets to Next.js `public/` directory
- [ ] Convert HTML pages to Next.js pages/components
- [ ] Migrate CSS to Next.js styling solution
- [ ] Update all image paths
- [ ] Update font references
- [ ] Install/configure JavaScript dependencies
- [ ] Set up Supabase for any dynamic content
- [ ] Configure Vercel deployment
- [ ] Test all pages and interactions
- [ ] Update domain configuration (CNAME)

---

**Backup created:** November 22, 2024
**Total files:** 140 files
**Total size:** ~43 MB

A complete file inventory is available in `FILE_INVENTORY.txt`

