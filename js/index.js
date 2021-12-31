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
const footerSocial = document.getElementById("footer-social");
// let isOpen = false;

hamburgerOpen.addEventListener('click', openNav)
function openNav() {
    // Modify class to open navigation
    hamburgerOpen.style.display = 'none';
    mainMenu.style.display = 'flex';

    // Modify class of footer social icons
    footerSocial.style.display = 'none';
};
hamburgerClose.addEventListener('click', closeNav)
function closeNav() {
    // Modify class to close navigation
    hamburgerOpen.style.display = 'block';
    mainMenu.style.display = 'none';

    // Modify class of footer social icons
    footerSocial.style.display = 'flex';
};
// FAQs Section
/* 
 * Accordion
    Inputs:
        (class) faqs-question-container -> the panel question to be clicked
        (this.element) svg element -> to modify 
        (this.nextSibling) panel -> the panel answer to be opened
    Allow user to open and close accordions answer panel
*/
let panelIsOpen; // true if a panel is open, false otherwise
let panelToOpen; // Clicked panel to be opened
let currentPanelToClose; // if the currently opened panel needs to be closed 
let prevPanelToClose; // Previously opened panel to close
let openedPanelCount = 0; // Limits the opened panel to (1)

// Add Event Listeners to each question and panel
const questionContainer = document.getElementsByClassName("faqs-question-container");
const answerPanels = document.getElementsByClassName("panel");
for (const question of questionContainer) {
    question.addEventListener('click', checkPanelState);
}
function setArrowActive(arrowIconContainer, arrowIcon) {
    // Set arrow icon to active
    arrowIconContainer.style.stroke = 'rgb(250, 87, 87)';
    arrowIcon.style.transform = 'rotate(180deg)';
}
function setArrowInActive(arrowIconContainer, arrowIcon) {
    // Set arrow icon to inactive
    arrowIconContainer.style.stroke = 'rgb(82, 103, 223)';
    arrowIcon.style.transform = 'rotate(0deg)';
}
function openPanel(currentPanel, arrowIconContainer, arrowIcon) {
    // Open the clicked panel 
    panelIsOpen = true;
    prevPanelToClose = currentPanel;
    prevArrowContainer = arrowIconContainer;
    prevArrowIcon = arrowIcon;
    openedPanelCount = openedPanelCount + 1;
    currentPanel.style.display = 'block';
    setArrowActive(arrowIconContainer, arrowIcon);
}
function closeCurrentPanel(currentPanel, arrowIconContainer, arrowIcon) {
    // Close the current panel 
    panelIsOpen = false;
    openedPanelCount = openedPanelCount - 1;
    currentPanel.style.display = 'none';
    setArrowInActive(arrowIconContainer, arrowIcon);
}
function closePreviousPanel(previousPanel, arrowIconContainer, arrowIcon) {
    // Close the previous panel
    openedPanelCount = openedPanelCount - 1;
    previousPanel.style.display = 'none';
    setArrowInActive(prevArrowContainer, prevArrowIcon);
}
// Arrow icon variables
let prevArrowContainer;
let prevArrowIcon; 
// Monitors and controls the state of panels
function checkPanelState() {
    const panelToOpen = this.nextSibling.nextElementSibling;
    currentPanelToClose = panelToOpen;
    const arrowIconContainer = this.getElementsByClassName("arrow-icon")[0];
    const arrowIcon = this.getElementsByTagName("svg")[0];

    // Opens a panel if no other panel is currently opened 
    if (!panelIsOpen && openedPanelCount < 1) {
        openPanel(panelToOpen, arrowIconContainer, arrowIcon);
    } else if (prevPanelToClose === currentPanelToClose) {
        // Close the current panel
        closeCurrentPanel(currentPanelToClose, arrowIconContainer, arrowIcon);
    } else {
        // Close the previous panel and opens up a new one
        closePreviousPanel(prevPanelToClose, arrowIconContainer, arrowIcon);
        openPanel(panelToOpen, arrowIconContainer, arrowIcon);
    }
}