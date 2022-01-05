// Header Section
/* 
 * Collapsible Navigation Menu
    Inputs:
        (id) main-nav-container -> element to be clicked
        (id) main-menu -> contents to be display/hide
        (id) hamburger-close -> element to be click to close the navigation menu
    Allows user to open and close navigation menu
*/
const hamburgerOpen = document.getElementById("hamburger-open");
const mainMenu = document.getElementById("main-menu");
const hamburgerClose = document.getElementById("hamburger-close");
const footerSocial = document.getElementById("footer-social");

hamburgerOpen.addEventListener('click', openNav)
function openNav() {
    // Modify class to open navigation
    hamburgerOpen.style.display = 'none';
    mainMenu.style.display = 'flex';
    footerSocial.style.display = 'none';
};
hamburgerClose.addEventListener('click', closeNav)
function closeNav() {
    hamburgerOpen.style.display = 'block';
    mainMenu.style.display = 'none';
    footerSocial.style.display = 'flex';
};
// Features Section
/* 
 * Tabs
    Inputs:
        (class) tablinks -> tabs navigation
        (class) tabcontent -> tabs content
    Allow user to open and close tabs
*/
let tabToOpen;
let prevTabToClose = 'Simple Bookmarking';
let prevTabLinkIdx = 0;
const tabLinks = document.getElementsByClassName("tablink-box");
const tabContents = document.getElementsByClassName("tabcontent");
const tabImg = document.getElementsByClassName("tab-img");

for (const tablink of tabLinks) {
    tablink.addEventListener('click', checkTabState);
}
function openTab(tab) {
    // Open a tab
    const addBottomBorder = (idx) => {
        // Add bottom border for active tab
        tabLinks[idx].classList.add('openTabLink');  
    }
    if (prevTabToClose === 'Simple Bookmarking') {
        prevTabLinkIdx = 0;
        addBottomBorder(prevTabLinkIdx);
    } else if (prevTabToClose === 'Speedy Searching') {
        prevTabLinkIdx = 1;
        addBottomBorder(prevTabLinkIdx);
        const backgroundImg = tabImg[prevTabLinkIdx].nextSibling.nextElementSibling;
        backgroundImg.style.top = '5rem';
    } else {
        prevTabLinkIdx = 2;
        addBottomBorder(prevTabLinkIdx);
        const backgroundImg = tabImg[prevTabLinkIdx].nextSibling.nextElementSibling;
        backgroundImg.style.top = '5rem';
    }
    const targetToOpen = document.getElementById(tab);
    targetToOpen.style.display = 'flex';
}
function closeTab(tab, prevTabLinkIdx) {
    // Close a tab
    const removeBottomBorder = (prevTabLinkIdx) => {
        // Remove bottom border for previous tab
        tabLinks[prevTabLinkIdx].classList.remove('openTabLink');
    }
    removeBottomBorder(prevTabLinkIdx);
    if (prevTabToClose === 'Simple Bookmarking') {
        prevTabLinkIdx = 0;
    } else if (prevTabToClose === 'Speedy Searching') {
        prevTabLinkIdx = 1;
    } else {
        prevTabLinkIdx = 2;
    }
    const targetToClose = document.getElementById(tab);
    targetToClose.style.display = 'none';
}
function getTabId(tabLinkText) {
    // Get id of clicked tab
    const formatTab = tabLinkText.split(" ");
    toOpen = formatTab[0].toLowerCase() + formatTab[1];
    return toOpen;
}
function checkTabState() {
    // Monitor and controls the state of tabs
    const tabLinkText = this.innerText;
    tabToOpen = getTabId(tabLinkText);
    if (prevTabToClose === tabLinkText) {
        console.log(tabToOpen)
        openTab(tabToOpen);
    } else {
        tabToClose = getTabId(prevTabToClose);
        prevTabToClose = tabLinkText;
        closeTab(tabToClose, prevTabLinkIdx);
        openTab(tabToOpen);        
    }
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
let panelIsOpen;
let panelToOpen;
let currentPanelToClose;
let prevPanelToClose;
let openedPanelCount = 0;

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
let prevArrowContainer;
let prevArrowIcon; 
function checkPanelState() {
    // Monitor and controls the state of panels
    const panelToOpen = this.nextSibling.nextElementSibling;
    currentPanelToClose = panelToOpen;
    const arrowIconContainer = this.getElementsByClassName("arrow-icon")[0];
    const arrowIcon = this.getElementsByTagName("svg")[0];

    if (!panelIsOpen && openedPanelCount < 1) {
        openPanel(panelToOpen, arrowIconContainer, arrowIcon);
    } else if (prevPanelToClose === currentPanelToClose) {
        closeCurrentPanel(currentPanelToClose, arrowIconContainer, arrowIcon);
    } else {
        closePreviousPanel(prevPanelToClose, arrowIconContainer, arrowIcon);
        openPanel(panelToOpen, arrowIconContainer, arrowIcon);
    }
};