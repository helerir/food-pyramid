let target;
let page = 0;
let arr = [
  [
    'Leib',
    '1 portsjon on (u 50 kcal):',
    '1 viil (30-50g) rukkileiba',
    '1 täisterakukkel',
    '2 viilu sepikut, täisterasaia või näkileiba',
    '1–2 viilu peenleiba või saia' 
  ],
  [
    'Kartul',
    '1 portsjon on (u 50 kcal)',
    '100g keedetud kartulit',
    '80g kartulipüreed',
    '40g prae- või friikartuleid'
  ],
  [
    'Muud teraviljatooted',
    '1 portsjon on (u 50 kcal):',
    '1 dl putru (kaera-, odra-, hirsi-, tatra-, riisi-, manna- jms putru)',
    '1 dl keedetud makaronitooteid (pastatooteid) või riisi',
    '3 sl hommikuhelbeid või müslit.'
  ]
];


let genhtml = function() {
  html = '';
  html += `<div>${arr[page][0]}</div><div>${arr[page][1]}</div><div><ul>`;
  for (let i = 2; i < arr[page].length; i++) {
    html += `<li>${arr[page][i]}</li>`;
  }
  html += '</ul></div>'; 
  html += '<button type="button" class="btn btn-primary" onclick="genhtml()">Edasi</button> </div>';
  target = document.getElementById('textbox');
  target.innerHTML = html;
  page ++;
};

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
let red = new Image();
let gre = new Image();
let blu = new Image();
let ora = new Image();
let yel = new Image();
let gr2 = new Image();
let bl2 = new Image();
let re2 = new Image();
let mag = new Image();
let gry = new Image();
let re3 = new Image();
let sred = new Image();
let sblu = new Image();
let smag = new Image();

red.src = "img/red.png"
gre.src = "img/gre.png"
blu.src = "img/blu.png"
ora.src = "img/ora.png"
yel.src = "img/yel.png"
gr2.src = "img/gr2.png"
bl2.src = "img/bl2.png"
re2.src = "img/re2.png"
mag.src = "img/mag.png"
gry.src = "img/gry.png"
re3.src = "img/re3.png"
sred.src = "img/sred.png"
sblu.src = "img/sblu.png"
smag.src = "img/smag.png"

function drawInitalPyramid() {
  ctx.beginPath();
  ctx.moveTo(0,200);
  ctx.lineTo(200,200);
  ctx.lineTo(100,26);
  ctx.fillStyle = "grey";
  ctx.fill();
}

function placeImage(img, x, y) {
  ctx.drawImage(tile, 30, 30);  
}

//placeImage(tile, 10, 10);

// tile.addEventListener('load', function() {
//   ctx.drawImage(tile, 10, 10);
// }, false);

function drawLevel() {

  // TASE I
  // Leib
  ctx.drawImage(blu, 0, 900);
  ctx.drawImage(blu, 60, 900);
  ctx.drawImage(blu, 120, 900);
  ctx.drawImage(blu, 180, 900);

  // Kartul
  ctx.drawImage(gre, 240, 900);
  ctx.drawImage(gre, 300, 900);
  
  // Teravili
  ctx.drawImage(yel, 360, 900);
  ctx.drawImage(yel, 420, 900);

  // TASE 2
  // Juurviljad
  ctx.drawImage(red, 30, 790);
  ctx.drawImage(red, 90, 790);
  ctx.drawImage(red, 150, 790);
  ctx.drawImage(red, 210, 790);
  ctx.drawImage(red, 270, 790);

  // Puuviljad
  ctx.drawImage(ora, 330, 790);
  ctx.drawImage(ora, 390, 790);
  
  // TASE 3
  // Liha
  ctx.drawImage(gr2, 30, 680);
  ctx.drawImage(gr2, 90, 680);

  // Kala
  ctx.drawImage(bl2, 150, 680);
  ctx.drawImage(bl2, 210, 680);

  // Piim
  ctx.drawImage(re2, 270, 680);
  ctx.drawImage(re2, 330, 680);

  // Muna
  ctx.drawImage(mag, 390, 680);

  // TASE 4
  // Toidurasvad, pähklid
  ctx.drawImage(gry, 150, 570);
  ctx.drawImage(gry, 210, 570);
  ctx.drawImage(gry, 270, 570);

  // TASE 5
  // SNÄKID
  ctx.drawImage(re3, 180, 460);
  ctx.drawImage(re3, 240, 460);

}

function drawLevel2 () {
  ctx.drawImage(sblu, 0, 900);
  ctx.drawImage(sblu, 7, 900);
  ctx.drawImage(sblu, 14, 900);
  ctx.drawImage(sblu, 21, 900);
  ctx.drawImage(sblu, 28, 900);
  ctx.drawImage(sblu, 35, 900);
  ctx.drawImage(sblu, 42, 900);
  ctx.drawImage(sblu, 49, 900);
  ctx.drawImage(sblu, 56, 900);
  
  ctx.drawImage(sred, 63, 900);
  ctx.drawImage(sred, 70, 900);
  ctx.drawImage(sred, 77, 900);
  ctx.drawImage(sred, 84, 900);
  ctx.drawImage(sred, 91, 900);
  ctx.drawImage(sred, 98, 900);
  ctx.drawImage(sred, 105, 900);
  ctx.drawImage(sred, 112, 900);
  ctx.drawImage(sred, 112, 900);

  ctx.drawImage(smag, 25, 798);
  ctx.drawImage(smag, 32, 798);
  ctx.drawImage(smag, 39, 798);
  ctx.drawImage(smag, 46, 798);
  ctx.drawImage(smag, 53, 798);
  ctx.drawImage(smag, 60, 798);
  ctx.drawImage(smag, 67, 798);







}





