"use strict";
const showMenu = document.querySelector(".page-body");
const navToggle = document.querySelector(".main-navigation__toggle");

// Бургер - меню
showMenu.classList.remove("show-menu");

navToggle.addEventListener("click", () => {
  if (showMenu.classList.contains("show-menu")) {
    showMenu.classList.remove("show-menu");
  } else {
    showMenu.classList.add("show-menu");
  }
});

// popups
