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

// let html1 = '<div>I ASTE (leib ja muud teraviljatooted; kartul; puder, makaronid e pasta, riis, helbed).' + 
// '</div> <div>Kui mitu portsjonit päevas sööd kalatooteid</div> <div class="form-check"> <input class="form-check-input"' +
// 'type="radio" id="exampleRadios1" value="option1"> <label class="form-check-label" for="exampleRadios1"> ühe portsoni ' +
// '</label> </div> <div> <button type="button" class="btn btn-primary" onclick="genhtml()">Edasi</button> </div>'

// let html2 = '<div>I ASTE (leib ja muud teraviljatooted; kartul; puder, makaronid e pasta, riis, helbed).' + 
// '</div> <div>Kui mitu portsjonit päevas sööd kalatooteid</div> <div class="form-check"> <input class="form-check-input"' +
// 'type="radio" id="exampleRadios1" value="option1"> <label class="form-check-label" for="exampleRadios1"> ühe portsoni ' +
// '</label> </div> <div> <button type="button" class="btn btn-primary" onclick="vajuta2()">Edasi</button> </div>'

// let html = function() {
//   for (let i = 0; i < arr.length; i++) {
//     let level = `<div>${arr[i][0]}</div>`;
//     for (let j = 0; j < arr[i].length; j++) {
      
//     }
//   }
// };

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

// '<div>${arr[page][0]}</div>'
// '<div>${arr[page][1]}</div>'
// '<div>'
//   '<ul>'
//     '<li>${arr[page][i]}</li>'
//   '</ul>'
// '</div>'
// '<button type="button" class="btn btn-primary" onclick="vajuta2()">Edasi</button></div>'

// function vajuta() {
//   target = document.getElementById('textbox');
//   target.innerHTML = html1;
// }

// function vajuta2() {
//   target = document.getElementById('textbox');
//   target.innerHTML = html2;
//   console.log('vajuta2');
// }

//vajuta();