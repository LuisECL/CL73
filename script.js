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
const sobreNosTexto = document.querySelector(".sobre-nos-container p");
const sobreNosBtn = document.querySelector(".ler-mais");
const tabelaBtns = document.querySelectorAll(".btn-tabela");
const tabelaTextos = document.querySelectorAll(".tabela-info")
const tabelaUl = document.querySelector(".tabela-ul");

// --------------FUNÇÕES------------------
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

let carrItemAtual = 0;
let carrItemProx = 1;

function limpaBtnsCarrossel(target) {
  for (let i = 0; i < carrosselBtns.length; i++) {
    if (i == target) {
      continue;
    }
    carrosselBtns[i].classList.remove("btn-ativo");
  }
}

function limpaBgsCarrosselIn(excecao) {
  for (let i = 0; i < carrosselItems.length; i++) {
    if (i == excecao) {
      continue;
    } else {
      setTimeout(() => {
        carrosselItems[i].style.display = "none";
      }, 2000);
    }
  }
}

function limpaBgsCarrosselOut(excecao) {
  for (let i = 0; i < carrosselItems.length; i++) {
    if (i == excecao) {
      continue;
    } else {
      carrosselItems[i].style.display = "none";
    }
  }
}

function fadeInCarrossel(target) {
  // console.log(`Item atual: ${carrItemAtual}\n Item seguinte: ${carrItemProx}`);
  limpaBtnsCarrossel(target);
  carrosselBtns[target].classList.add("btn-ativo");
  carrosselItems[target].style.display = "flex";
  carrosselItems[target].style.animation = "carrossel-fade-in 2s 1";
  limpaBgsCarrosselIn(target);
  carrItemAtual = target;

  if (target >= 4) {
    carrItemProx = 0;
    setTimeout(()=> {
      fadeOutCarrossel(carrItemProx);
      setTimeout(() => {
        carrItemProx = 1;
        fadeInCarrossel(carrItemProx);
      }, 3000);
    }, 5000)
  } else {
    carrItemProx = carrItemAtual + 1;
    setTimeout(()=> {
      fadeInCarrossel(carrItemProx);
    }, 5000)
  }
}

function fadeOutCarrossel(target) {
  // console.log(`Item atual: ${carrItemAtual}\n Item seguinte: ${carrItemProx}`);
  limpaBtnsCarrossel(target);
  carrosselBtns[target].classList.add("btn-ativo");
  limpaBgsCarrosselOut(carrItemAtual);
  carrosselItems[target].style.display = "flex";
  carrosselItems[carrItemAtual].style.animation = "carrossel-fade-out 2s 1";
  setTimeout(() => {
    carrosselItems[carrItemAtual].style.display = "none";
    carrItemAtual = target;
    carrItemProx = carrItemAtual + 1;
  }, 1800);
}

setTimeout(() => {
  fadeInCarrossel(1);
}, 5000);

function toggleSobreNos(){
  sobreNosTexto.classList.toggle("sobre-nos-texto-ativo");

  let textBtn = sobreNosBtn.innerText;
  if (textBtn == "Ler mais"){
    sobreNosBtn.innerText = "Ler menos";
  } else {
    sobreNosBtn.innerText = "Ler mais";
  }
}

function selecionaTabela(i) {
  tabelaBtns.forEach(element => {
    element.classList.remove("btn-tabela-ativo")
  });
  tabelaTextos.forEach(element => {
    element.classList.remove("tabela-info-ativa")
  });
  tabelaBtns[i].classList.add("btn-tabela-ativo");
  tabelaTextos[i].classList.add("tabela-info-ativa");
  if(i === 1){
    tabelaUl.classList.add("tabela-ul-ativa");
  } else {
    tabelaUl.classList.remove("tabela-ul-ativa");
  }
}

// --------------EVENTOS------------------
btnHamburguer.addEventListener("click", () => {
  mostraNavHamb();
});

navHambClose.addEventListener("click", () => {
  escondeNavHamb();
});

// ------------- Botões do Carrossel -----------------
// for (let i = 0; i < carrosselBtns.length; i++) {
//   carrosselBtns[i].addEventListener("click", () => {
//     carrItemProx = i;
//     if (carrItemProx > carrItemAtual) {
//       console.log(`Avança ao item ${carrItemProx}`);
//       fadeInCarrossel(carrItemProx);
//     } else if (carrItemProx < carrItemAtual) {
//       console.log(`Volta ao item ${carrItemProx}`);
//       fadeOutCarrossel(carrItemProx);
//     } else {
//       return;
//     }
//   });
// }

sobreNosBtn.addEventListener("click", ()=> {
  toggleSobreNos();
})

for (let i = 0; i < tabelaBtns.length; i++){
  tabelaBtns[i].addEventListener("click", ()=> {
    selecionaTabela(i);
  })
}