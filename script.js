const burgerMenu = document.querySelector(".btn-hamburger");
const mainNav = document.querySelector(".main-nav");

//event listeners
console.log(burgerMenu);
burgerMenu.addEventListener("click", function () {
  mainNav.classList.toggle("hide");
});
