const navbarNav = document.getElementById("mainNav");
const navToggler = document.getElementById("navToggler");

navToggler.addEventListener("click", () => navbarNav.classList.toggle("show"));

window.onresize = function() {
  if (window.innerWidth < 992 && navbarNav.classList.contains("show"))
    navbarNav.classList.remove("show");
};
