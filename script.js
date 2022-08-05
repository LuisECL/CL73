const navHamburguer = document.querySelector('.nav-hamburguer');
const btnHamburguer = document.querySelector('.btn-hamburguer');
const navHambClose = document.querySelector('.nav-hamb-close');

// --------------FUNÇÕES------------------
function escondeNavHamb() {
  navHamburguer.style.animation = "nav-hamburguer-out .5s 1";
  setTimeout(()=>{
    navHamburguer.style.display = "none";
  }, 500);
}

function mostraNavHamb() {
  navHamburguer.style.display = "block";
  navHamburguer.style.animation = "nav-hamburguer-in .5s 1";
}


// --------------EVENTOS------------------
btnHamburguer.addEventListener('click', ()=> {
  mostraNavHamb()
})

navHambClose.addEventListener('click', ()=> {
  escondeNavHamb()
})