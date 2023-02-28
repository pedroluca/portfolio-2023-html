const buttonMobile = document.getElementById('button-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const menuMobile = document.getElementById('menu-mobile');
  menuMobile.classList.toggle('active');
}

buttonMobile.addEventListener('click', toggleMenu);
buttonMobile.addEventListener('touchstart', toggleMenu);