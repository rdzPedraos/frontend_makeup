const menuIcon = document.getElementById("headerMenu");
const header = document.querySelector(".header");
const body = document.querySelector("body");

menuIcon.addEventListener("click", function () {
  body.classList.toggle("no-scroll");
  if (window.scrollY != 0) window.scroll({ top: 0, behavior: "smooth" });
  header.classList.toggle("enabled");
});