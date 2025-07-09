const toogleMenu = document.querySelector(".toggle");
const freeNavMenu = document.querySelector(".free-nav-menu");
const navbar = document.querySelector(".navbar");
const stickyPoint = navbar.offsetTop;
toogleMenu.addEventListener("click", function () {
  freeNavMenu.classList.toggle("show");
});

window.addEventListener("scroll", function () {
  if (this.scrollY >= stickyPoint) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
