const navbarNav = document.getElementById('mainNav');
const navToggler = document.getElementById('navToggler');

navToggler.addEventListener('click', e => {
  e.preventDefault();
  navbarNav.classList.toggle('show');
});

window.onresize = () => {
  if (window.innerWidth < 992 && navbarNav.classList.contains('show'))
    navbarNav.classList.remove('show');
};
