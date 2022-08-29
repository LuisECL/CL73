const navHamburguer = document.querySelector(".nav-hamburguer");
const btnHamburguer = document.querySelector(".btn-hamburguer");
const navHambClose = document.querySelector(".nav-hamb-close");
const carrosselItem = document.querySelector(".carrossel-item");
const carrItemTextArray = document.querySelector(
  ".carr-item-text-container"
).children;
const carrosselData = {
  item01: {
    bg: "01.colheita-2000w.jpg",
    titulo: "Colheita",
    subtitulo: "Do campo à sua casa",
  },
  item02: {
    bg: "02.processamento-2000w.jpg",
    titulo: "Separação",
    subtitulo: "Os melhores grãos para o melhor café",
  },
  item03: {
    bg: "03.industria-2000w.jpg",
    titulo: "Fermentação",
    subtitulo: "Tecnología em favor da qualidade",
  },
  item04: {
    bg: "04.transporte-2000w.jpg",
    titulo: "Transporte",
    subtitulo: "Atingindo todos os cantos do Brasil",
  },
  item05: {
    bg: "05.produto-2000w.jpg",
    titulo: "Apresentação",
    subtitulo: "Puro ou com leite, você que escolhe",
  },
};

const screenWidth = window.screen.width;

if(screenWidth <= 400){
  for (let key in carrosselData){
    let route = carrosselData[key].bg;
    let newRoute = route.replace("-2000w.jpg", "-400w.png");
    carrosselData[key].bg = newRoute;
  }
} else if (screenWidth <= 850){
  for (let key in carrosselData){
    let route = carrosselData[key].bg;
    let newRoute = route.replace("-2000w.jpg", "-800w.png");
    carrosselData[key].bg = newRoute;
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
