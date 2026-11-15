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
    title: 'Bloom I',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '28 x 31.5',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'I loved to sing, and it had to be at the top of my voice. My mother would chase me out, calling me Tina Turner, and I would head into the bush with the chair she had given me. This is where my inspiration began. It was a beautiful childhood, and part of me would love to go back.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794737110/IMG_9183_t1mouy.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794737115/IMG_9186_j9nrhe.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794737113/IMG_9184_cbdret.heic', 'Sign']
    ]
  },


  'AU-2026-002': {
    title: 'Bloom II',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '28 x 31.5',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'Inspired by the Garden of Eden. A little girl who loved to sing found a safe place in the garden, where she could simply be herself.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794737789/IMG_9189_jhliqz.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794737789/IMG_9187_qsrzvi.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794738015/IMG_9190_br7kd6.heic', 'Sign']
    ]
  },



  'AU-2026-003': {
    title: 'Bloom III',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '28 x 31',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'I joined the choir as a child, before I really knew God. That choir became the start of my journey with Him, a journey that is still unfolding.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794738389/IMG_9192_z5pryp.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794738385/IMG_9191_lfoldj.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794738392/IMG_9194_ot8xrt.heic', 'Sign']
    ]
  },



  'AU-2026-004': {
    title: 'Friends I',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '24 x 36.5',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'In school you meet new friends, and it feels like an amazing journey. What we don’t realise is that each person is headed to a different destination, and sometimes we compare ourselves with others when every journey is its own. That is why each friend wears a different colour on their head. Life speaks in colours, and I used them to tell their journeys apart.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794738647/IMG_9195_blukkk.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794738659/IMG_9197_zhd7er.heic', 'Sign']
    ]
  },



  'AU-2026-005': {
    title: 'Friends II',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '24 x 35',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'There was a time when a friendship felt like it would never fade. Then those friends become shadows. No calls, no messages, no word at all, and life suddenly becomes lonely.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794739096/IMG_9198_yyijsg.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794739098/IMG_9199_dvr4qi.heic', 'Sign']
    ]
  },



  'AU-2026-006': {
    title: 'Ime I',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '29 x 42.5',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'Inspired by how life turned out, from a beautiful childhood to seeing no one. Look closely and you will see a person ready and prepared to step out, but delays turned the story the other way around.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794739442/IMG_9200_ytr8d0.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794739447/IMG_9203_czbpne.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794739444/IMG_9202_ijhvmw.heic', 'Sign']
    ]
  },



  'AU-2026-007': {
    title: 'Ime II',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '29.5 x 41',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'A girl who became tired and simply gave up. She looks at everything around her but stares at nothing.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794739721/IMG_9206_x2u5mj.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794739725/IMG_9207_p48mv3.heic', 'Sign']
    ]
  },



  'AU-2026-008': {
    title: 'Ime III',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '34.5 x 28',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'I decided to wait, and to praise God while I wait, no matter the circumstances. Ime means patience, and it is my brother’s name. God opened my eyes to see that it was more than a name. It was a season of waiting.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740323/IMG_9209_rwahjf.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740331/IMG_9211_rfoepf.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740340/IMG_9210_ofqbtr.heic', 'Sign']
    ]
  },



  'AU-2026-009': {
    title: 'Peace I',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '20 x 39.5',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'Inspired by life’s long wait, and the decision that complete surrender to God is the best option.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740630/IMG_9213_mmodq8.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740641/IMG_9215_ovrqh1.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740638/IMG_9214_avf3jq.heic', 'Sign']
    ]
  },



  'AU-2026-010': {
    title: 'Peace II',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '20 x 40',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'After a long wait, calm becomes a choice. This piece watches the world quietly, resting in God through it all.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740816/IMG_9216_v97vbf.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740821/IMG_9218_wmddll.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794740823/IMG_9217_szjp3e.heic', 'Sign']
    ]
  },



  'AU-2026-011': {
    title: 'Peace III',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '19.5 x 39.5',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'A smile that speaks peace without a word. It comes from a heart that has waited long and surrendered fully to God.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794741181/IMG_9219_xv2ipw.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794741180/IMG_9221_bvnt5f.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794741179/IMG_9220_iziemr.heic', 'Sign']
    ]
  },



  'AU-2026-012': {
    title: 'A Happy Journey I',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '24.5 x 36.5',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'The beginning of a life journey: a single man and a single woman meet, and two paths become one.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794741514/IMG_9223_qjgvrw.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794741512/IMG_9225_doujxg.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794741511/IMG_9224_iwcyef.heic', 'Sign']
    ]
  },



  'AU-2026-013': {
    title: 'A Happy Journey II',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '24.5 x 36.5',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'The happy ending, made real. Where the first piece shows two people meeting, this one shows what grew from it, including their child.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742043/IMG_9226_g41hdc.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742088/IMG_9229_zifu0o.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742091/IMG_9228_mdaucd.heic', 'Sign']
    ]
  },



  'AU-2026-14': {
    title: 'The Collector',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '27.5 x 41',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'A tribute to the art lover: the silent observation, the careful mindset, and the tilt of the head as they try to understand what the painter was thinking.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742406/IMG_9230_wo3aof.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742411/IMG_9232_e1zl1b.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742412/IMG_9231_lwiufk.heic', 'Sign']
    ]
  },



  'AU-2026-15': {
    title: 'Let There Be Light I',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '40 cm',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'Inspired by the theme of the Oasis International Conference 2026. The title comes from the first words God spoke over creation, a reminder that where He speaks, light follows.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742702/IMG_9237_quyf4h.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742708/IMG_9239_kay4pg.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794742705/IMG_9238_zqypvw.heic', 'Sign']
    ]
  },



  'AU-2026-16': {
    title: 'Let There Be Light II',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '21 x 35',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'A companion to the first piece, also inspired by the theme of the Oasis International Conference 2026. Together they carry one message: let there be light.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743043/IMG_9234_qrglre.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743048/IMG_9236_hoeaxi.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743067/IMG_9235_xrxiz9.heic', 'Sign']
    ]
  },



  'AU-2026-17': {
    title: 'Nature',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '26.5 x 60',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'A tribute to God’s creation, painted in gratitude for the world He made.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743315/IMG_9242_t0d24q.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743323/IMG_9245_seibn8.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743319/IMG_9244_nfy5de.heic', 'Sign']
    ]
  },



  'AU-2026-18': {
    title: 'Beauty of Colours',
    year: '2026',
    medium: 'Acrylic on canvas',
    size: '32 x 60',             // e.g '200x400
    edition: 'Original, one of a kind',
    sold: '',                       // e.g. '2026-11-15'
    summary: 'Every colour on my palette, brought together in a single work. It is the theme of this exhibition in its purest form: life is never one shade.',
    images: [
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743693/IMG_9248_tb2lbw.heic', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743698/IMG_9250_bfo7m2.heic', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794743695/IMG_9249_qqpvkc.heic', 'Sign']
    ]
  },
  // , 'AU-2026-002': { ...copy the block above and change the details... }
  // To verify go here https://biizi-art.netlify.app/verify.html
};

/* ===== Do not edit below this line ===== */
const baseUrl = () => (SITE_URL.indexOf('YOUR-SITE') > -1 ? location.origin : SITE_URL).replace(/\/$/, '');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtDate = s => { if (!s) return ''; const d = new Date(s + 'T00:00:00'); return isNaN(d) ? s : d.toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'}); };