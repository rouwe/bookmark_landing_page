// Header Section
/* 
 * Collapsible Navigation Menu
    Inputs:
        (id) main-nav-container -> element to be clicked
        (id) main-menu -> contents to be display/hide
        (id) hamburger-close -> element to be click to close the navigation menu
    Allows user to open and close navigation menu
*/
// Add Event handlers on hamburger icon & hamburger-close icon
const hamburgerOpen = document.getElementById("hamburger-open");
const mainMenu = document.getElementById("main-menu");
const hamburgerClose = document.getElementById("hamburger-close");

// let isOpen = false;

hamburgerOpen.addEventListener('click', openNav)
function openNav() {
    // Modify class to open navigation
    hamburgerOpen.style.display = 'none';
    mainMenu.style.display = 'flex';
};
hamburgerClose.addEventListener('click', closeNav)
function closeNav() {
    // Modify class to close navigation
    hamburgerOpen.style.display = 'block';
    mainMenu.style.display = 'none';
};