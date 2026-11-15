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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794753604/IMG_9183_dauixk.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794753608/IMG_9186_cuk0zg.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794753607/IMG_9184_vw695p.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794754150/IMG_9189_mclcld.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794754146/IMG_9187_yrzamq.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794754153/IMG_9190_htpfdn.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794754925/IMG_9192_gvmm9h.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794754923/IMG_9191_xngtg1.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794754932/IMG_9194_qqsh7g.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794755691/IMG_9195_hcngjn.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794755694/IMG_9197_wdnoco.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756059/IMG_9198_jcu0gs.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756062/IMG_9199_hjwmz3.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756466/IMG_9200_o6xtwz.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756471/IMG_9203_gzbuql.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756469/IMG_9202_rv2sce.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756684/IMG_9206_lv3rb0.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756690/IMG_9207_ij2p88.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757003/IMG_9209_zl2xa8.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756998/IMG_9211_nkf8d4.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794756996/IMG_9210_nizsn6.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757432/IMG_9213_krxosd.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757438/IMG_9215_zig07d.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757434/IMG_9214_ypwpaj.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757606/IMG_9216_awhhgg.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757614/IMG_9218_ajtqmm.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757609/IMG_9217_k2h8z2.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757756/IMG_9219_l9xkoq.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757764/IMG_9221_ufm21m.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794757760/IMG_9220_mhtcf2.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758203/IMG_9223_evuk7n.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758212/IMG_9225_bgpx4t.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758205/IMG_9224_ke33ey.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758405/IMG_9226_lpfiry.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758414/IMG_9229_zjbyev.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758408/IMG_9228_v95nlz.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758654/IMG_9230_v45ckc.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758663/IMG_9232_qhlh4n.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758658/IMG_9231_whebaa.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758883/IMG_9237_zdl66t.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758894/IMG_9239_kuretq.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794758889/IMG_9238_vqamvm.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759219/IMG_9234_do4isl.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759225/IMG_9236_hrterl.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759224/IMG_9235_yetjzu.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759453/IMG_9242_ldsoc7.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759463/IMG_9245_q6kgtz.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759460/IMG_9244_of54wn.jpg', 'Sign']
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
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759674/IMG_9248_txe9of.jpg', 'Front'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759683/IMG_9250_wttuee.jpg', 'Back'],
      ['https://res.cloudinary.com/dzneyqbo9/image/upload/v1794759678/IMG_9249_pyo9vo.jpg', 'Sign']
    ]
  },
  // , 'AU-2026-002': { ...copy the block above and change the details... }
  // To verify go here https://biizi-art.netlify.app/verify.html
};

/* ===== Do not edit below this line ===== */
const baseUrl = () => (SITE_URL.indexOf('YOUR-SITE') > -1 ? location.origin : SITE_URL).replace(/\/$/, '');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtDate = s => { if (!s) return ''; const d = new Date(s + 'T00:00:00'); return isNaN(d) ? s : d.toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'}); };