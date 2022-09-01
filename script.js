const navHamburguer = document.querySelector(".nav-hamburguer");
const btnHamburguer = document.querySelector(".btn-hamburguer");
const navHambClose = document.querySelector(".nav-hamb-close");
const carrosselItems = document.querySelectorAll(".carrossel-item");
const carrosselBtns = document.querySelectorAll(".carrossel-btn button");
const carrosselData = {
  item01: {
    bg: "01.colheita-2000w.jpg",
  },
  item02: {
    bg: "02.processamento-2000w.jpg",
  },
  item03: {
    bg: "03.industria-2000w.jpg",
  },
  item04: {
    bg: "04.transporte-2000w.jpg",
  },
  item05: {
    bg: "05.produto-2000w.jpg",
  },
};

function aplicaBg(i, rota) {
  carrosselItems[i - 1].style.backgroundImage = `url(img/carrossel/${rota})`;
}
const screenWidth = window.screen.width;
if (screenWidth <= 400) {
  for (let i = 1; i <= carrosselItems.length; i++) {
    let rota = carrosselData["item0" + i].bg;
    let newRota = rota.replace("-2000w.jpg", "-400w.png");
    carrosselData["item0" + i].bg = newRota;
    aplicaBg(i, newRota);
  }
} else if (screenWidth <= 850) {
  for (let i = 1; i <= carrosselItems.length; i++) {
    let rota = carrosselData["item0" + i].bg;
    let newRota = rota.replace("-2000w.jpg", "-800w.png");
    carrosselData["item0" + i].bg = newRota;
    aplicaBg(i, newRota);
  }
} else {
  for (let i = 1; i <= carrosselItems.length; i++) {
    let rota = carrosselData["item0" + i].bg;
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

function fadeInCarrossel(item) {
  // if (item === 5) {
  //   fadeOutCarrossel();
  // } else if (item === 0) {
  //   carrosselBtns[0].classList.toggle("btn-ativo");
  //   setTimeout(() => {
  //     fadeInCarrossel(item + 1);
  //     carrosselBtns[0].classList.toggle("btn-ativo");
  //   }, 5000);
  // } else {
  //   carrosselBtns[item].classList.toggle("btn-ativo");
  //   carrosselItems[item].style.display = "flex";
  //   carrosselItems[item].style.animation = "carrossel-fade-in 2s 1";
  //   setTimeout(() => {
  //     carrosselBtns[item].classList.toggle("btn-ativo");
  //     fadeInCarrossel(item + 1);
  //   }, 5000);
  // }
}

function fadeOutCarrossel() {
  // carrosselItems[3].style.display = "none";
  // carrosselItems[2].style.display = "none";
  // carrosselItems[1].style.display = "none";
  // carrosselItems[4].style.animation = "carrossel-fade-out 2s 1";
  // setTimeout(() => {
  //   carrosselItems[4].style.display = "none";
  // }, 1500);
  // fadeInCarrossel(0);
}

// fadeInCarrossel(0);

// --------------EVENTOS------------------
btnHamburguer.addEventListener("click", () => {
  mostraNavHamb();
});

navHambClose.addEventListener("click", () => {
  escondeNavHamb();
});