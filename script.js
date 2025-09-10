const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Закрытие меню при клике по ссылке
document.querySelectorAll('.header__menu-link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
  });
});
