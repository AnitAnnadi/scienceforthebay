// navbar

const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
  console.log("hello");
});

// loader

const loaderContainer = document.querySelector(".loader-container");
const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

window.addEventListener("DOMContentLoaded", function () {
  loader.classList.add("hide");
  loader.classList.add("hide-loader");
  loaderContainer.classList.add("hide");
  content.classList.remove("hide");
});
