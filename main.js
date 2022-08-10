const leftBarMobile = document.querySelector('.left-nav');
const modal = document.querySelector('.modal');
const hamburguer = document.querySelector('.hamburguer');

leftBarMobile.addEventListener('click', (e) => {
  modal.classList.remove('open');
  leftBarMobile.classList.remove('open');
});

modal.addEventListener('click', (e) => {
  modal.classList.remove('open');
  leftBarMobile.classList.remove('open');
});

hamburguer.addEventListener('click', (e) => {
  console.log('asdf');
  modal.classList.add('open');
  leftBarMobile.classList.add('open');
});
