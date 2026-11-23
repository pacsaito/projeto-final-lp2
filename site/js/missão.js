const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");

const div1 = document.getElementById("primeira-missao");
const div2 = document.getElementById("segunda-missao");
const div3 = document.getElementById("terceira-missao");
const div4 = document.getElementById("quarta-missao");
const div5 = document.getElementById("quinta-missao");
const div6 = document.getElementById("sexta-missao");
const div7 = document.getElementById("setima-missao");
const div8 = document.getElementById("oitava-missao");
const div9 = document.getElementById("nona-missao");
const div10 = document.getElementById("decima-missao");


const divs = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10];

function apagarMissoes() {
  divs.forEach(function(div) {
    div.style.display = 'none';
  });
}

// 2. Eventos de clique em cada card
card1.onclick = function() {
  apagarMissoes();
  div1.style.display = 'flex';
}

card2.onclick = function() {
  apagarMissoes();
  div2.style.display = 'flex';
}

card3.onclick = function() {
  apagarMissoes();
  div3.style.display = 'flex';
}

card4.onclick = function() {
  apagarMissoes();
  div4.style.display = 'flex';
}     

card5.onclick = function() {
  apagarMissoes();
  div5.style.display = 'flex';
}

card6.onclick = function() {
  apagarMissoes();
  div6.style.display = 'flex';
}

card7.onclick = function() {
  apagarMissoes();
  div7.style.display = 'flex';
}

card8.onclick = function() {
  apagarMissoes();
  div8.style.display = 'flex';
}

card9.onclick = function() {
  apagarMissoes();
  div9.style.display = 'flex';
}

card10.onclick = function() {
  apagarMissoes();
  div10.style.display = 'flex';
}
