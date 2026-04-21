const fs = require('fs');
const path = require('path');

const dir = __dirname;

const PAGE_TITLES = {
  'index.html':              'artFix Greenwich — Life As Art',
  'about.html':              'About — artFix Greenwich',
  'services.html':           'Services — artFix Greenwich',
  'our-spaces.html':         'Our Spaces — artFix Greenwich',
  'community-projects.html': 'Community Projects — artFix Greenwich',
  'venue-hire.html':         'Venue Hire — artFix Greenwich',
  'jobs.html':               'Jobs & Opportunities — artFix Greenwich',
  'contact.html':            'Contact — artFix Greenwich',
};

const files = [
  'index.html',
  'about.html',
  'services.html',
  'our-spaces.html',
  'community-projects.html',
  'venue-hire.html',
  'jobs.html',
  'contact.html',
];

const NAV_HTML = `<nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
  <div class="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="index.html" class="font-montserrat font-extrabold text-xl tracking-tight text-black uppercase">artFix</a>
    <ul class="hidden md:flex items-center gap-6 text-xs font-semibold tracking-widest uppercase text-black">
      <li><a href="index.html" class="hover:underline underline-offset-4">Home</a></li>
      <li><a href="about.html" class="hover:underline underline-offset-4">About</a></li>
      <li><a href="services.html" class="hover:underline underline-offset-4">Services</a></li>
      <li><a href="our-spaces.html" class="hover:underline underline-offset-4">Our Spaces</a></li>
      <li><a href="community-projects.html" class="hover:underline underline-offset-4">Community Projects</a></li>
      <li><a href="venue-hire.html" class="hover:underline underline-offset-4">Venue Hire</a></li>
      <li><a href="jobs.html" class="hover:underline underline-offset-4">Jobs &amp; Opportunities</a></li>
      <li><a href="contact.html" class="hover:underline underline-offset-4">Contact</a></li>
    </ul>
    <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
      <span class="block w-6 h-0.5 bg-black"></span>
      <span class="block w-6 h-0.5 bg-black"></span>
      <span class="block w-6 h-0.5 bg-black"></span>
    </button>
  </div>
  <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-black">
    <ul class="flex flex-col px-6 py-4 gap-4 text-xs font-semibold tracking-widest uppercase text-black">
      <li><a href="index.html" class="hover:underline underline-offset-4">Home</a></li>
      <li><a href="about.html" class="hover:underline underline-offset-4">About</a></li>
      <li><a href="services.html" class="hover:underline underline-offset-4">Services</a></li>
      <li><a href="our-spaces.html" class="hover:underline underline-offset-4">Our Spaces</a></li>
      <li><a href="community-projects.html" class="hover:underline underline-offset-4">Community Projects</a></li>
      <li><a href="venue-hire.html" class="hover:underline underline-offset-4">Venue Hire</a></li>
      <li><a href="jobs.html" class="hover:underline underline-offset-4">Jobs &amp; Opportunities</a></li>
      <li><a href="contact.html" class="hover:underline underline-offset-4">Contact</a></li>
    </ul>
  </div>
</nav>`;

const FONT_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">`;

const FOOTER_HTML = `<footer class="bg-black text-white w-full px-8 py-16">
  <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    <div class="flex flex-col gap-4">
      <span class="font-montserrat font-extrabold text-xl uppercase tracking-tight">artFix</span>
      <p class="text-xs uppercase tracking-widest text-white/60">Life As Art</p>
      <p class="text-sm text-white/80 leading-relaxed">7 Durnford Street<br>Greenwich, SE10 9BF</p>
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-xs uppercase tracking-widest text-white/60 mb-2">Navigate</p>
      <a href="index.html" class="text-sm text-white/80 hover:text-white transition-colors">Home</a>
      <a href="about.html" class="text-sm text-white/80 hover:text-white transition-colors">About</a>
      <a href="services.html" class="text-sm text-white/80 hover:text-white transition-colors">Services</a>
      <a href="our-spaces.html" class="text-sm text-white/80 hover:text-white transition-colors">Our Spaces</a>
      <a href="community-projects.html" class="text-sm text-white/80 hover:text-white transition-colors">Community Projects</a>
      <a href="venue-hire.html" class="text-sm text-white/80 hover:text-white transition-colors">Venue Hire</a>
      <a href="jobs.html" class="text-sm text-white/80 hover:text-white transition-colors">Jobs &amp; Opportunities</a>
      <a href="contact.html" class="text-sm text-white/80 hover:text-white transition-colors">Contact</a>
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-xs uppercase tracking-widest text-white/60 mb-2">Contact</p>
      <a href="tel:02082933096" class="text-sm text-white/80 hover:text-white transition-colors">Greenwich: 02082933096</a>
      <a href="tel:02045474919" class="text-sm text-white/80 hover:text-white transition-colors">Kidbrooke: 02045474919</a>
      <a href="mailto:info@artfix.org.uk" class="text-sm text-white/80 hover:text-white transition-colors">info@artfix.org.uk</a>
      <div class="flex gap-4 mt-4">
        <a href="https://www.facebook.com/artfixLondon" target="_blank" class="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Facebook</a>
        <a href="https://www.instagram.com/artfixlondon" target="_blank" class="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Instagram</a>
      </div>
    </div>
  </div>
  <div class="max-w-screen-xl mx-auto mt-12 pt-6 border-t border-white/20">
    <p class="text-xs uppercase tracking-widest text-white/40">© 2025 artFix. All rights reserved.</p>
  </div>
</footer>`;

const TAILWIND_CONFIG = `<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
      },
    },
  };
</script>`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${file}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Strip nested pt-16 wrappers idempotently
  while (html.includes('<div class="pt-16">')) {
    html = html.replace(/<div class="pt-16">([\s\S]*?)<\/div>/g, '$1');
  }

  // Ensure pt-24 on <main> tags
  html = html.replace(/<main(?![^>]*pt-24)([^>]*)>/g, (match, attrs) => {
    return `<main${attrs} class="${(attrs.match(/class="([^"]*)"/) || ['',''])[1]} pt-24">`.replace('  pt-24', ' pt-24');
  });

  // Inject Google Fonts if not present
  if (!html.includes('fonts.googleapis.com/css2?family=Montserrat')) {
    html = html.replace('</head>', `${FONT_LINK}\n</head>`);
  }

  // Inject Tailwind config if not present
  if (!html.includes('fontFamily') && html.includes('tailwind.config')) {
    html = html.replace(/tailwind\.config\s*=\s*\{[\s\S]*?\};/, TAILWIND_CONFIG.replace('<script>', '').replace('</script>', '').trim());
  } else if (!html.includes('tailwind.config')) {
    html = html.replace('</head>', `${TAILWIND_CONFIG}\n</head>`);
  }

  // Standardise <title>
  if (PAGE_TITLES[file]) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${PAGE_TITLES[file]}</title>`);
  }

  // Replace existing <nav> with standardised nav
  html = html.replace(/<nav[\s\S]*?<\/nav>/, NAV_HTML);

  // Replace entire <footer>…</footer> with canonical footer
  html = html.replace(/<footer[\s\S]*?<\/footer>/, FOOTER_HTML);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`OK: ${file}`);
});

console.log('\nNormalisation complete.');
