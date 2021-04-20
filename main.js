// NAV RESPONSIVE

const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#nav-ul');

hamburger.addEventListener('click', () =>{
  navUL.classList.toggle('open');
});


//LOGO -> Dark Mode

let logo = document.querySelector('#logo');

logo.addEventListener('dblclick', () => {
  document.body.style.background = "black";
  document.body.style.color = "whitesmoke";
  document.body.style.transition = ".5s ease-in";
})