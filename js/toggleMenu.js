const buttonMobile = document.getElementById('button-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const menuMobile = document.getElementById('menu-mobile');
  menuMobile.classList.toggle('active');
}

buttonMobile.addEventListener('click', toggleMenu);
buttonMobile.addEventListener('touchstart', toggleMenu);

document.addEventListener('click', function(event) {
  const menuMobile = document.getElementById('menu-mobile');
  const isClickInsideMenu = menuMobile.contains(event.target);
  const isClickInsideButton = buttonMobile.contains(event.target);
  if (!isClickInsideMenu && !isClickInsideButton && menuMobile.classList.contains('active')) {
    menuMobile.classList.remove('active');
  }
});