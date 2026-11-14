/* ===== EDIT THIS PART ONLY ===== */

// Your live website address, with no slash at the end (custom domain if you have one)
const SITE_URL = 'https://biizi-art.netlify.app';

const ARTIST = {
  name: 'Annette Udoh',
  email: 'udohannette@gmail.com',
  
};

// One entry per SOLD piece. The text in quotes at the start of each entry is the certificate number.
// images: [photo link, label]. Put the front first, then the back (showing the number) and a signature close-up.
// Leave year, size or sold as '' to hide that line. Never put the buyer's name or the price here: this file is public.
const ARTWORKS = {
  'AU-2026-001': {
    title: 'The Collector',
    year: '',
    medium: 'Oil on canvas',
    size: '',
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'Men of wealth have a lifestyle. They know the real value of art, they observe quietly and purchase them unnoticed.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1793216787/WhatsApp_Image_2026-10-19_at_10.40.30_pm_xgomlb.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1793216919/Screenshot_2026-10-28_at_8.48.05_pm_aumurm.png', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1793216918/Screenshot_2026-10-28_at_8.47.50_pm_w2nc8m.png', 'Sign']
    ]
  }
  // , 'AU-2026-002': { ...copy the block above and change the details... }
  // To verify go here https://biizi-art.netlify.app/verify.html
};

/* ===== Do not edit below this line ===== */
const baseUrl = () => (SITE_URL.indexOf('YOUR-SITE') > -1 ? location.origin : SITE_URL).replace(/\/$/, '');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtDate = s => { if (!s) return ''; const d = new Date(s + 'T00:00:00'); return isNaN(d) ? s : d.toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'}); };