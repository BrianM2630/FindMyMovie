const button = document.getElementById("search-button");
const headerRight = document.querySelector(".header-right");
const hamburgerMenuButton = document.getElementById("hamburger-menu-button");
const hamburgerMenuDropdown = document.querySelector(".hamburger-menu-dropdown")


button.addEventListener("click", activateSearchBar);

function activateSearchBar() {
    headerRight.classList.toggle("active");
}

hamburgerMenuButton.addEventListener("click", activateDropdown);

function activateDropdown() {
    hamburgerMenuDropdown.classList.toggle("active");
}