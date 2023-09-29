/* ? ======= HEADER CTART ======= */
const headerMenu = document.querySelector('.js-header__menu'),
  headerMenu1000 = document.querySelector('.js-header__menu1000'),
  headerBurgerButton = document.querySelector('.js-header__burger');

let widthScreen = document.documentElement.clientWidth;

headerBurgerButton.addEventListener('click', () => {

  headerBurgerButton.classList.toggle('header__burger-close')
  if (widthScreen <= 1225 && widthScreen >= 670) {
    headerMenu1000.classList.toggle('header__menu-active')
  }
  if (widthScreen < 670) {
    headerMenu.classList.toggle('header__menu-active670')
  }
})
/*? ======= HEADER END ======= */
