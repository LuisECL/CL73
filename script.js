const navHamburguer = document.querySelector('.nav-hamburguer');
const btnHamburguer = document.querySelector('.btn-hamburguer');
const navHambClose = document.querySelector('.nav-hamb-close');

// --------------FUNÇÕES------------------
function escondeNavHamb() {
  console.log(navHamburguer);
  navHamburguer.style.display = "none"
}

function mostraNavHamb() {
  navHamburguer.style.display = "block"
}


// --------------EVENTOS------------------
btnHamburguer.addEventListener('click', ()=> {
  mostraNavHamb()
})

navHambClose.addEventListener('click', ()=> {
  escondeNavHamb()
})