// NAV RESPONSIVE

const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#nav-ul');

hamburger.addEventListener('click', () =>{
  navUL.classList.toggle('open');
});


//LOGO 

let logo = document.querySelector('#logo');


// COLOR FUNCTIONS 

//DARK

logo.addEventListener('click', () => {
  document.body.style.background = "black";
  document.body.style.color = "whitesmoke";
  document.body.style.transition = ".5s ease-in";
})

logo.addEventListener('dblclick', () => {
  document.body.style.background = "";
  document.body.style.color = "";
  document.body.style.transition = ".5s ease-in";
})
