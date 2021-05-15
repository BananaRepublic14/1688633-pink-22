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

// Для редактора фотографий
const workShopButtons = document.querySelectorAll(
  ".workshop-photo__filter-button"
);
const workshopFilters = document.querySelectorAll(
  ".workshop-photo__filter-item"
);
const activeButtonClassName = "workshop-photo__filter-button--active";
const activeFilterClassName = "workshop-photo__filter-item--active";

function toggleClassName(element, className) {
  if (element.classList.contains(className)) {
    return;
  }
  [...element.parentElement.children].forEach((child) =>
    child.classList.remove(className)
  );
  element.classList.add(className);
}

workShopButtons.forEach(setButtonsHandler);

function setButtonsHandler(button, i) {
  button.addEventListener("click", () => {
    toggleClassName(button, activeButtonClassName);
    const currentFilter = workshopFilters[i];
    toggleClassName(currentFilter, activeFilterClassName);
    currentFilter.querySelector("input").focus();
  });
}
