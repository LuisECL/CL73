// DOM: NAVBAR ------------------------------
const navHamburguer = document.querySelector(".nav-hamburguer");
const btnHamburguer = document.querySelector(".btn-hamburguer");
const navHambClose = document.querySelector(".nav-hamb-close");
const hambBtns =document.querySelectorAll(".hamb-btn");
const navBtns = document.querySelectorAll(".nav-btn");
const secaoSobreNos = document.getElementById("sobre-nos");
const secaoComentarios = document.getElementById("comentarios");
const secaoPortfolio = document.getElementById("portfolio");
const secaoLocalizacao = document.getElementById("localizacao");
const secoes = [secaoSobreNos, secaoComentarios, secaoPortfolio, secaoLocalizacao]
// DOM: MODAL CONTATO ------------------------------
const contatoModal = document.querySelector(".contato-modal");
const modalContatoInfo = document.querySelector(".modal-contato-info");
const fechaModalContato = document.querySelector(".close-modal-contato");
const submit = document.querySelector(".modal-container form button");
// DOM: CARROSSEL ------------------------------
const carrosselItems = document.querySelectorAll(".carrossel-item");
const carrosselContatoBtns = document.querySelectorAll(".btn-contato");
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
// DOM: SOBRE NÓS -----------------------------
const sobreNosTexto = document.querySelector(".sobre-nos-container p");
const sobreNosBtn = document.querySelector(".ler-mais");
// DOM: TABELA ------------------------------
const tabelaBtns = document.querySelectorAll(".btn-tabela");
const tabelaTextos = document.querySelectorAll(".tabela-info")
const tabelaUl = document.querySelector(".tabela-ul");
// DOM: PORTFÓLIO ------------------------------
const portfolioImgs = document.querySelectorAll(".portfolio-img-container");
const portfolioZooms = document.querySelectorAll(".img-zoom");
const portfolioModal = document.querySelector(".portfolio-modal")
const imagemModal = document.getElementById("imagem-modal");
const fechaModal = document.querySelector(".close-modal")
const modalPrev = document.getElementById("modal-prev");
const modalProx = document.getElementById("modal-prox");

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
  }, 400);
}

function mostraNavHamb() {
  navHamburguer.style.display = "block";
  navHamburguer.style.animation = "nav-hamburguer-in .5s 1";
}

function submitContato() {
  modalContatoInfo.innerHTML =
  `<h3>Obrigado!</h3>
  <p style="margin-bottom: 1rem">
    Nossa equipe entrará em contato com você em breve.
  </p>
</div>`
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

function showImgZoom(i){
  portfolioZooms[i].classList.add("img-zoom-ativo");
  portfolioZooms[i].style.animation = "showZoomBg .3s 1"
};

function hideImgZoom(i){
  portfolioZooms[i].classList.remove("img-zoom-ativo")
};

function mostraImgPortfolio(i){
  if(i === 0){
    modalPrev.style.display = "none"
  } else if (i === 3){
    modalProx.style.display = "none"
  } else {
    modalPrev.style.display = "block"
    modalProx.style.display = "block"
  }
  let imagemClicada = `0${i + 1}-1000w.jpg`
  imagemModal.src = `img/portfolio/portfolio${imagemClicada}`
  portfolioModal.style.display = "flex";
};

function avancaImgModal(){
  let imagemSeguinte = Number(imagemModal.src.slice(-11, -10));
  mostraImgPortfolio(imagemSeguinte);
}

function voltaImgModal(){
  let imagemSeguinte = Number(imagemModal.src.slice(-11, -10));
  let imagemAnterior = imagemSeguinte - 2;
  mostraImgPortfolio(imagemAnterior);
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

carrosselContatoBtns.forEach(btn => {
  console.log(btn);
  btn.addEventListener("mouseover", ()=> {
    console.log("Passou por aqui");
  })
})

fechaModalContato.addEventListener("click", () => {
  console.log("Fechando o modal de contato");
  contatoModal.style.display = "none";
})

submit.addEventListener("click", (e)=> {
  e.preventDefault();
  submitContato();
})

sobreNosBtn.addEventListener("click", ()=> {
  toggleSobreNos();
})

for (let i = 0; i < tabelaBtns.length; i++){
  tabelaBtns[i].addEventListener("click", ()=> {
    selecionaTabela(i);
  })
}

for (let i = 0; i < portfolioImgs.length; i++){
  portfolioImgs[i].addEventListener("mouseover", ()=> {
    showImgZoom(i);
  });

  portfolioImgs[i].addEventListener("mouseout", ()=> {
    hideImgZoom(i);
  });

  portfolioImgs[i].addEventListener("click", ()=> {
    mostraImgPortfolio(i);
  });
}

fechaModal.addEventListener("click", ()=> {
  portfolioModal.style.display = "none";
});

modalPrev.addEventListener("click", ()=> {
  voltaImgModal();
});

modalProx.addEventListener("click", ()=> {
  avancaImgModal();
})

navBtns.forEach(btn => {
  btn.addEventListener("click", ()=> {
    escondeNavHamb();
  })
});

for (let i = 0; i < navBtns.length; i++){
  navBtns[i].addEventListener("click", (e)=> {
    e.preventDefault();
    secoes[i].scrollIntoView({
      behavior: "smooth"
    })
  })
};

hambBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    secoes[index].scrollIntoView({
      behavior: "smooth"
    })
  })
});