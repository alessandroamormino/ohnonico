const loaderBlack = document.querySelector('#bm-black');
const loaderYellow = document.querySelector('#bm-yellow');
const loader = document.querySelector('#bm');


// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('bm'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: './scripts/LOGO.json'
// })

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm-black'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './scripts/LOGO_NERO.json'
})

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './scripts/LOGO_NERO.json'
})

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm-yellow'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './scripts/LOGO_GIALLO.json'
})