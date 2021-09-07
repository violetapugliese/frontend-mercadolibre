var ham = document.querySelector(".menu-btn");
var ham1 = document.querySelector(".menu-btn-ham1");
var ham2 = document.querySelector(".menu-btn-ham2");
var ham3 = document.querySelector(".menu-btn-ham3");
var menuLink = document.querySelectorAll(".navbar-toggler");

// BurgerButton
ham.addEventListener("click", toggleHamburger);
function toggleHamburger() {
  ham1.classList.toggle("closeBtn1");
  ham2.classList.toggle("closeBtn2");
  ham3.classList.toggle("closeBtn3");
}
menuLink.forEach(function (menuLink) {
    menuLink.addEventListener("click", toggleHamburger);
  });