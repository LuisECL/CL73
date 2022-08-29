const navHamburguer = document.querySelector(".nav-hamburguer");
const btnHamburguer = document.querySelector(".btn-hamburguer");
const navHambClose = document.querySelector(".nav-hamb-close");
const carrosselItems = document.querySelectorAll(".carrossel-item");
const carrosselData = {
  item01: {
    bg: "01.colheita-2000w.jpg"
  },
  item02: {
    bg: "02.processamento-2000w.jpg"
  },
  item03: {
    bg: "03.industria-2000w.jpg"
  },
  item04: {
    bg: "04.transporte-2000w.jpg"
  },
  item05: {
    bg: "05.produto-2000w.jpg"
  }
};

const screenWidth = window.screen.width;
if(screenWidth <= 400){
  for(let i=1; i<=carrosselItems.length; i++){
    let rota = carrosselData["item0"+i].bg;
    let newRota = rota.replace("-2000w.jpg", "-400w.png");
    carrosselData["item0"+i].bg = newRota;
    aplicaBg(i, newRota);
  }
} else if (screenWidth <= 850){
  for(let i=1; i<=carrosselItems.length; i++){
    let rota = carrosselData["item0"+i].bg;
    let newRota = rota.replace("-2000w.jpg", "-800w.png");
    carrosselData["item0"+i].bg = newRota;
    aplicaBg(i, newRota);
  }
} else {
  for(let i=1; i<=carrosselItems.length; i++){
    let rota = carrosselData["item0"+i].bg;
    aplicaBg(i, rota);
  }
}

// --------------FUNÇÕES------------------
function escondeNavHamb() {
  navHamburguer.style.animation = "nav-hamburguer-out .5s 1";
  setTimeout(() => {
    navHamburguer.style.display = "none";
  }, 500);
}

function mostraNavHamb() {
  navHamburguer.style.display = "block";
  navHamburguer.style.animation = "nav-hamburguer-in .5s 1";
}

function aplicaBg(i, rota){
  carrosselItems[(i-1)].style.backgroundImage = `url(img/carrossel/${rota})`;
}

// function alternaCarrossel(item) {
//   carrosselItem.style.backgroundImage = `url(img/carrossel/${item.bg})`;
//   carrItemTextArray[0].innerHTML = item.titulo;
//   carrItemTextArray[1].innerHTML = item.subtitulo;
// }

// alternaCarrossel(carrosselData.item01);
// let count = 2;
// const esperaParaAlternar = setInterval(() => {
//   if(count > 5){
//     count = 1
//   }
//   console.log(`Agora vai o item0${count}`);
//   let itemAtual = `item0${count}`
//   alternaCarrossel(carrosselData[itemAtual])
//   ++count
// }, 5000);
// clearInterval(esperaParaAlternar);

// --------------EVENTOS------------------
btnHamburguer.addEventListener("click", () => {
  mostraNavHamb();
});

navHambClose.addEventListener("click", () => {
  escondeNavHamb();
});
