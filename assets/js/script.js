// Function to dynamically add meta tags to the head element
function addMetaTags() {
    // Get the head element
    var head = document.head;

    // Create meta tags
    var metaTags = [
        { name: "description", content: "Your go-to destination for all things related to web development! and many other things. At bibekchandsah.com.np, we believe in the power of quality resources to enhance your coding skills. That's why we offer all our content free of charge, ensuring that everyone has access to the tools they need to succeed." },
        { name: "search.description", content: "bibekchandsah bcs bibek10550 bibeksha10550 web-development front-end development" },
        { name: "keywords", content: "bibek sha, bibek10550, bibekchandsah, web-development, resources, bibeksha10550 bibekchandsah" },
        { name: "author", content: "Bibek Chand Sah" },
        { name: "language", content: "en" },
        { rel: "canonical", href: "https://bibek10550.github.io/bibek10550" },
        { property: "og:title", content: "BibekChandSah (BCS)" },
        { property: "og:description", content: "Your go-to destination for all things related to web development! and many other things. At bibekchandsah.com.np, we believe in the power of quality resources to enhance your coding skills. That's why we offer all our content free of charge, ensuring that everyone has access to the tools they need to succeed." },
        { property: "og:image", content: "https://raw.githubusercontent.com/bibek10550/bibek10550/main/assets/images/favicon/apple-touch-icon.png" },
        { property: "og:url", content: "https://bibek10550.github.io/bibek10550" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "BibekChandSah (BCS)" },
        { name: "twitter:description", content: "Your go-to destination for all things related to web development! and many other things. At bibekchandsah.com.np, we believe in the power of quality resources to enhance your coding skills. That's why we offer all our content free of charge, ensuring that everyone has access to the tools they need to succeed." },
        { name: "twitter:image", content: "https://raw.githubusercontent.com/bibek10550/bibek10550/main/assets/images/favicon/apple-touch-icon.png" }
    ];

    // Loop through the metaTags array and create meta elements
    metaTags.forEach(function (meta) {
        var metaTag = document.createElement('meta');
        for (var key in meta) {
            metaTag.setAttribute(key, meta[key]);
        }
        // Append meta elements to the head element
        head.appendChild(metaTag);
    });
}

// Call the function to add meta tags
addMetaTags();








// add title in body 
document.addEventListener('DOMContentLoaded', function () {
    document.body.setAttribute('title', 'Developed by Bibek');
});





// dynamic navbar
// Get the .navigationBar element
var navigationBar = document.querySelector('.navigationBar');

// Add the HTML code to the navigationBar
navigationBar.innerHTML += `
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <img src="#" alt="Logo" width="30" height="30" class="d-inline-block align-text-top rounded-5 logoImage"> Bibek Chand Sah 
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <a class="navbar-brand" href="index.html" class="offcanvas-title" id="offcanvasNavbarLabel">
                    <img src="#" alt="Logo" width="30" height="30" class="d-inline-block align-text-top rounded-5 logoImage"> Bibek Chand Sah 
                </a>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link indexPage" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link downloads" href="downloads.html">Downloads</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Front-End </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item HtmlCss" href="html&css.html">HTML & CSS</a></li>
                            <li><a class="dropdown-item javaScript" href="javascript.html">JavaScript</a></li>
                            <li><a class="dropdown-item projects" href="projects.html">Projects</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item feedback" href="feedback.html">Feedback</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Others </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item telegram" href="telegram.html">Telegram Channels</a></li>
                            <li><a class="dropdown-item videos" href="videos.html"></a></li>
                            <li><a class="dropdown-item" href="#">Coming Soon</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item feedback" href="feedback.html">Feedback</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link developer" href="developer.html">Developer</a>
                    </li>
                </ul>
                <div anim="ripple" class="col-auto theme">
                    <select class="form-select" id="colorModeSelect" aria-label="Color Mode" data-bs-toggle="tooltip" data-bs-title="Alt + L(Light) | Alt + D(Dark)">
                        <option selected disabled>Color Mode</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                    </select>
                </div>
                <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" data-bs-toggle="tooltip" data-bs-title="Alt + S">
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>
</nav>`;






// add title in search box
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.setAttribute('title', 'Alt+S search dropdown');
    }
});






// Update logo images by adding .logoImage class in image tag
var logoImages = document.querySelectorAll('.logoImage');
logoImages.forEach(function (logoImage) {
    logoImage.src = 'assets/images/BCS_Blue_Bg.png';
});






// make nav element active dynamically according to its page name and class name
document.addEventListener('DOMContentLoaded', function () {
    // Mapping between page names and corresponding classes
    var pageClassMap = {
        "index.html": "indexPage",
        "page-1.html": "indexPage",
        "downloads.html": "downloads",
        "html&css.html": "HtmlCss",
        "javascript.html": "javaScript",
        "projects.html": "projects",
        "feedback.html": "feedback",
        "developer.html": "developer",
        "telegram.html": "telegram",
        "videos.html": "videos",
    };
    // Get the current HTML page name
    var currentPageName = window.location.pathname.split('/').pop();
    // Check if the current page name exists in the mapping
    if (pageClassMap.hasOwnProperty(currentPageName)) {
        // Get the corresponding class name from the mapping
        var className = pageClassMap[currentPageName];
        // Add "active" class to elements with the corresponding class name
        var menuElement = document.querySelector('.' + className);
        if (menuElement) {
            menuElement.classList.add('active');
            // Add "active" class to parent elements of ".dropdown-menu"
            var dropdownMenu = menuElement.closest('.dropdown-menu');
            if (dropdownMenu) {
                var dropdownToggle = dropdownMenu.closest('.dropdown').querySelector('.nav-link');
                if (dropdownToggle) {
                    dropdownToggle.classList.add('active');
                }
            }
        }
    }
});





// Function to set the theme based on user selection
function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        // change nav to light mode
        document.querySelector('nav').classList.remove('bg-dark');
        var navElement = document.querySelector('nav');
        navElement.dataset.bsTheme = ''
        // change table to light mode
        var dataTableElement = document.querySelector('#dataTable');
        if (dataTableElement) {
            dataTableElement.classList.remove('table-dark');
        }
    } else if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        // change nav to dark mode
        document.querySelector('nav').classList.add('bg-dark');
        var navElement = document.querySelector('nav');
        navElement.dataset.bsTheme = 'dark'
        // change table to dark mode
        var dataTableElement = document.querySelector('#dataTable');
        if (dataTableElement) {
            dataTableElement.classList.add('table-dark');
        }
    } else {
        // If system preference is selected, check if system prefers dark mode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            // change nav to dark mode
            document.querySelector('nav').classList.add('bg-dark');
            var navElement = document.querySelector('nav');
            navElement.dataset.bsTheme = 'dark'
            // change table to dark mode
            var dataTableElement = document.querySelector('#dataTable');
            if (dataTableElement) {
                dataTableElement.classList.add('table-dark');
            }
            localStorage.setItem('colorMode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            // change nav to light mode
            document.querySelector('nav').classList.remove('bg-dark');
            var navElement = document.querySelector('nav');
            navElement.dataset.bsTheme = ''
            // change table to light mode
            var dataTableElement = document.querySelector('#dataTable');
            if (dataTableElement) {
                dataTableElement.classList.remove('table-dark');
            }
            localStorage.setItem('colorMode', 'light');
        }
    }
    // Store the selected mode in local storage
    localStorage.setItem('colorMode', theme);
    // Set the selected option in the dropdown
    var selectElement = document.getElementById('colorModeSelect');
    selectElement.value = theme;
}
// Function to handle the change event of the color mode select
document.getElementById('colorModeSelect').addEventListener('change', function () {
    var selectedMode = this.value;
    // console.log(this.value);
    if (this.value == "light") {
        // Add the animation to the .light-mode class
        // Create a style element
        var style = document.createElement('style');
        // Add the animation to the style element
        style.innerHTML = '.light-mode { animation: ClipPathAnimationLight 1s ease-out; }';
        // Append the style element to the document head
        document.head.appendChild(style);
    }
    else {
        // Add the animation to the .dark-mode class
        // Create a style element
        var style = document.createElement('style');
        // Add the animation to the style element
        style.innerHTML = '.dark-mode { animation: ClipPathAnimationDark 1s ease-out; }';
        // Append the style element to the document head
        document.head.appendChild(style);
    }
    setTheme(selectedMode);
});
// Retrieve the selected mode from local storage and set the theme
var storedMode = localStorage.getItem('colorMode');
if (storedMode) {
    setTheme(storedMode);
}





// short cut for theme
document.addEventListener('keydown', function (event) {
    // Check if Alt key is pressed
    if (event.altKey) {
        // Check if L is pressed for light mode
        if (event.key === 'l' || event.key === 'L') {
            // Prevent default behavior
            event.preventDefault();
            // Add the animation to the .light-mode class
            // Create a style element
            var style = document.createElement('style');
            // Add the animation to the style element
            style.innerHTML = '.light-mode { animation: ClipPathAnimationLight 1s ease-out; }';
            // Append the style element to the document head
            document.head.appendChild(style);
            // Select Light mode option in the dropdown
            document.getElementById('colorModeSelect').value = 'light';
            // Apply light mode
            setTheme('light');
        }
        // Check if D is pressed for dark mode
        else if (event.key === 'd' || event.key === 'D') {
            // Prevent default behavior
            event.preventDefault();
            // Add the animation to the .dark-mode class
            // Create a style element
            var style = document.createElement('style');
            // Add the animation to the style element
            style.innerHTML = '.dark-mode { animation: ClipPathAnimationDark 1s ease-out; }';
            // Append the style element to the document head
            document.head.appendChild(style);
            // Select Dark mode option in the dropdown
            document.getElementById('colorModeSelect').value = 'dark';
            // Apply dark mode
            setTheme('dark');
        }
        // collides with search function of nav bar
        // Check if S is pressed for dark mode
        // else if (event.key === 's' || event.key === 'S') {
        //     // Prevent default behavior
        //     event.preventDefault();
        //     // Select Dark mode option in the dropdown
        //     document.getElementById('colorModeSelect').value = 'system';
        //     // Apply dark mode
        //     setTheme('system');
        // }
    }
});







// dynamic footer
// Get the .footContainer element
var navigationBar = document.querySelector('.footerContainer');

// Add the HTML code to the footerContainer
navigationBar.innerHTML += `
<div class="container border-top">
    <footer class="py-5">
        <div class="row">
            <div class="col-6 col-md-2 mb-3">
                <h5>Most Popular</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/kiitcse" class="nav-link p-0 text-body-secondary">KIIT CSE</a></li>
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/Homepage" class="nav-link p-0 text-body-secondary">HomePage</a></li>
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/event-calendar" class="nav-link p-0 text-body-secondary">Event Calendar</a></li>
                    <li class="nav-item mb-2"><a href="html&css.html" class="nav-link p-0 text-body-secondary">HTML & CSS</a></li>
                    <li class="nav-item mb-2"><a href="javascript&css.html" class="nav-link p-0 text-body-secondary">JavaScript</a></li>
                    <li class="nav-item mb-2"><a href="telegram.html" class="nav-link p-0 text-body-secondary">Telegram Channels</a></li>
                </ul>
            </div>
            <div class="col-6 col-md-2 mb-3">
                <h5>Recent</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/kiitcse" class="nav-link p-0 text-body-secondary">KIIT CSE</a></li>
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/feedback" class="nav-link p-0 text-body-secondary">Feedback</a></li>
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/Homepage" class="nav-link p-0 text-body-secondary">Homepage</a></li>
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/Music" class="nav-link p-0 text-body-secondary">Music</a></li>
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/event-calendar" class="nav-link p-0 text-body-secondary">Event Calendar</a></li>
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/dailyQuote" class="nav-link p-0 text-body-secondary">Daily Quotes</a></li>
                    </ul>
                    </div>
                    <div class="col-6 col-md-2 mb-3">
                    <h5>Others</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="developer.html" class="nav-link p-0 text-body-secondary developer">About Us</a></li>
                    <li class="nav-item mb-2"><a href="feedback.html" class="nav-link p-0 text-body-secondary feedback">Feedback</a></li>
                    <li class="nav-item mb-2"><a href="mailto:bibeksha48@gmail.com" class="nav-link p-0 text-body-secondary">Gmail</a></li>
                    <li class="nav-item mb-2"><a href="https://github.com/bibek10550/" class="nav-link p-0 text-body-secondary">Github</a></li>
                    <li class="nav-item mb-2"><a href="https://greasyfork.org/en/users/1256995-bibek-sha" class="nav-link p-0 text-body-secondary">Greasy Fork</a></li>
                    <li class="nav-item mb-2"><a href="term&conditions.html" class="nav-link p-0 text-body-secondary term&condition">Term & Conditions</a></li>
                </ul>
            </div>
            <div class="col-md-5 offset-md-1 mb-3">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="assets/images/BCS_Full.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="300" height="300" loading="lazy">
                </div>
            </div>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="#" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1 homePage">
                    <img src="assets/images/BCS.png" class="logoImage" width="30" height="30">
                </a>
                <span class="mb-3 mb-md-0 text-body-secondary" id="copyrightNotice"></span>
            </div>
            <ul class="list-unstyled d-flex footerBadge">
                <li class="ms-3"><a href="https://www.facebook.com/bibek.sha.1432/" title="facebook"><span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill mb-3">
                            <img class="rounded-circle me-1" width="24" height="24" src="https://bibek10550.github.io/kiitcse/assets/image/facebook.png" alt="facebook logo">Facebook </span></a> </li>
                <li class="ms-3"><a href="https://www.instagram.com/bibeksha1432/" title="instagram"><span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill mb-3">
                            <img class="rounded-circle me-1" width="24" height="24" src="https://bibek10550.github.io/kiitcse/assets/image/instagram.png" alt="instagram logo">Instagram </span></a></li>
                <li class="ms-3"><a href="mailto:bibeksha48@gmail.com" title="Send Message"><span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill mb-3">
                            <img class="rounded-circle me-1" width="24" height="24" src="https://bibek10550.github.io/kiitcse/assets/image/gmail.png" alt="gmail logo">Gmail </span></a> </li>
                <li class="ms-3"><a href="#whatsappLink" id="whatsappLink"> <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill mb-3">
                            <img class="rounded-circle me-1" width="24" height="24" src="https://bibek10550.github.io/kiitcse/assets/image/share.png" alt="">Share </span></a></li>
                <li class="ms-3"><a href="Feedback.html" title="feedback"><span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill mb-3">
                            <img class="rounded-circle me-1" width="24" height="24" src="https://bibek10550.github.io/kiitcse/assets/image/feedback.jpeg" alt="feedback logo">Feedback </span></a></li>
            </ul>
        </div>
    </footer>
    <div id="imagePreview" style="display: none;"></div>
</div>
`;







// dynamic change current year copyright
// Get the current year
var currentYear = new Date().getFullYear();
// Create a span element for the "©" symbol
var copyrightSymbol = document.createElement('span');
copyrightSymbol.textContent = '© ';
// Create a text node for the name and rights information
var nameRightsInfo = document.createTextNode('Bibek Chand Sah, All rights reserved');
// Find the element to insert the content
var copyrightNotice = document.getElementById('copyrightNotice');
// Append the elements and text nodes to the container element
copyrightNotice.appendChild(copyrightSymbol);
copyrightNotice.appendChild(document.createTextNode(currentYear + ' '));
copyrightNotice.appendChild(nameRightsInfo);







// Tooltip activation
window.addEventListener("load", () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});





// SHOW SCROLL UP 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 160) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)







// animation on scroll
AOS.init();







// ripple effect
"use strict";
[].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
    el.addEventListener('click', e => {
        e = e.touches ? e.touches[0] : e;
        const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
        el.style.cssText = `--s: 0; --o: 1;`;
        el.offsetTop;
        el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`;
    });
});







// prevent debugging
document.addEventListener('keydown', function (event) {
    // Check if Ctrl + Shift + I are pressed
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        // Prevent default action
        event.preventDefault();
        // Optionally, you can add a message or perform some other action here
        console.log("Ctrl + Shift + I pressed. Default action prevented.");
    }
});





// prevent developer tool
// Check if the browser's developer tools are open






// dynamic online status toast
// Select the .onlineStatusToast element
var onlineStatusToast = document.querySelector('.onlineStatusToast');
// Create a new div element for the online status toast
var onlineToastDiv = document.createElement('div');
onlineToastDiv.id = 'OnlineToast';
onlineToastDiv.classList.add('hide-toast');
onlineToastDiv.innerHTML = `
    <div class="toast-content">
        <span id="wifi-icon" class="icon"></span>
        <p id="toast-message"></p>
        <span id="close-icon" class="icon close-icon"></span>
    </div>
`;

// Append the new div element to the .onlineStatusToast element
onlineStatusToast.appendChild(onlineToastDiv);








// online status toast 
const toastElement = document.getElementById("OnlineToast");
const toastMessageElement = document.getElementById("toast-message");
const wifiIconElement = document.getElementById("wifi-icon");
const closeIconElement = document.getElementById("close-icon");
let isOffline = false; // To track offline status
let hideTimeout; // To store the timeout reference
function showToast(message, isConnected) {
    toastMessageElement.textContent = message;
    wifiIconElement.style.display = isConnected ? "inline-block" : "none";
    toastElement.classList.remove("hide-toast");
    toastElement.classList.add("show-toast");
    if (!isConnected) {
        isOffline = true;
        clearTimeout(hideTimeout); // Clear the timeout when offline
    }
    if (isConnected) {
        if (!isOffline) {
            hideTimeout = setTimeout(hideToast, 5000); // Hide after 5 seconds if online
        }
    }
}
function hideToast() {
    toastElement.classList.remove("show-toast");
    toastElement.classList.add("hide-toast");
}
function updateStatus() {
    const isConnected = navigator.onLine;
    if (isConnected) {
        showToast("You are currently online", true);
        toastElement.style.backgroundColor = "green";
        if (isOffline) {
            hideTimeout = setTimeout(hideToast, 5000); // Start the timer if back online
            isOffline = false; // Reset offline status
        }
    } else {
        showToast("You are currently offline", false);
        toastElement.style.backgroundColor = "red";
        isOffline = true;
    }
}
updateStatus();
// Listen for online and offline events
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
// Hide the toast when close icon is clicked
closeIconElement.addEventListener("click", hideToast);







// whatsapp share when clicked on share (qr or link)
// check either qr or link should be displayed
window.addEventListener("load", () => {
    setWhatsappLink();
});
// Function to detect whether the user is on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
// Function to set the appropriate link based on the device
function setWhatsappLink() {
    const whatsappLink = document.getElementById('whatsappLink');
    const imagePreview = document.getElementById('imagePreview');
    const shareIcon = document.querySelector(".whatsappLink");

    if (isMobileDevice()) {
        console.log("mobile devices");
        whatsappLink.addEventListener('click', (event) => {
            imagePreview.innerHTML = '<img src="assets/images/qrcode.png" alt="QR Code">';
            event.stopPropagation(); // Prevent the click event from reaching the document
            // Toggle display of image preview
            imagePreview.style.display = imagePreview.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', () => {
            // Close the image preview when clicked outside
            imagePreview.style.animation = "disappear 0.3s ease-out";
            setTimeout(() => {
                imagePreview.style.display = 'none';
                imagePreview.style.animation = ""; // Reset animation property
            }, 300); // Adjust the timeout to match the animation duration
        });
    } else {
        console.log("pc devices");
        whatsappLink.href = 'whatsapp://send?text=Go%20to%20KIIT%20CSE-%20https://bibek10550.github.io/kiitcse/%20KIIT%20CSE%20is%20resource%20hub%20which%20simplifies%20your%20educational%20journey%20in%20Computer%20Science%20and%20Engineering%20(CSE).%20It%20offers:%20Previous%20Year%20Questions%20(PYQs),%20Concise%20Notes,%20Video%20Lectures.';

        // Hide image preview if it's visible
        imagePreview.style.display = 'none';
        // imagePreview.style.animation = "zoomOut 0.3s ease-in";
    }
}







// dynamic tool container
// Select the .toolContainer element
var toolContainer = document.querySelector('.toolContainer');
// Create a new div element for the tool container
var toolContainerDiv = document.createElement('div');
toolContainerDiv.id = 'widget-container';
toolContainerDiv.classList.add('widget-container');
toolContainerDiv.innerHTML = `
    <div class="switcher-column">
    <div class="switcher-btn" title="calendar">
        <i class="fa fa-calendar change-color"></i>
    </div>
    <div class="theme-buttons-container" id="theme-buttons-container-calendar"></div>
    </div>
    <div class="switcher-column">
    <div class="switcher-btn" title="commenting">
        <i class="fa fa-commenting change-color"></i>
    </div>
    <div class="theme-buttons-container" id="theme-buttons-container-commenting"></div>
    </div>
    <div class="switcher-column">
    <div class="switcher-btn" title="linksaver">
        <i class="fa fa-list-alt change-color"></i>
    </div>
    <div class="theme-buttons-container" id="theme-buttons-container-linksaver"></div>
    </div>
`;

// Append the new div element to the .toolContainer element
toolContainer.appendChild(toolContainerDiv);







// index page
// most popular container
var cardDataMostPopular = [
    {
        img: "https://bibek10550.github.io/kiitcse/assets/image/KIIT_CSE_blue_name_transparent.png",
        altText: "KIIT CSE",
        name: "KIIT CSE",
        link: "https://github.com/bibek10550/kiitcse",
        description: "This resource hub simplifies your educational journey in Computer Science and Engineering (CSE). It offers: Previous Year Questions (PYQs), Concise Notes, Video Lectures."
    },
    {
        img: "https://bibek10550.github.io/Homepage/favicon_io/apple-touch-icon.png",
        altText: "Homepage",
        name: "Homepage",
        link: "https://github.com/bibek10550/Homepage",
        description: "This homepage is designed to suit your preferences and needs. It offers many features and useful items that you use every day. You can easily customize it to make it your own."
    },
    {
        img: "https://bibek10550.github.io/event-calendar/favicon_io/apple-touch-icon.png",
        altText: "event-calendar",
        name: "Event Calendar",
        link: "https://github.com/bibek10550/event-calendar/",
        description: "Effortlessly manage your schedule and organize your time effectively with this intuitive and feature-rich calendar application. This calendar is able to store your events and mark the days dynamically."
    },
    // {
    //     img: "https",
    //     altText: "Homepage",
    //     name: "Homepage",
    //     link: "https",
    //     description: "This"
    // },
    // Add more card data objects here if needed
];

// Function to create a card element
function createCardMostPopular(cardInfo) {
    var card = document.createElement('div');
    card.classList.add('col', 'itemBox');
    card.setAttribute('data-aos', 'fade-up');
    card.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 projectImage">
                <img src="${cardInfo.img}" class="img-fluid rounded-start" alt="${cardInfo.altText}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold"><a href="${cardInfo.link}">${cardInfo.name}</a></h5>
                    <p class="card-text">${cardInfo.description}</p>
                </div>
            </div>
        </div>
    </div>`;
    return card;
}

// Get the recentContainer element
var mostPopularContainer = document.querySelector('.mostPopularContainer');

// Loop through the cardData array and create cards for each item
cardDataMostPopular.forEach(function (cardInfo) {
    var cardElement = createCardMostPopular(cardInfo);
    if (mostPopularContainer) {
        mostPopularContainer.appendChild(cardElement);
    }
});






// recent projects Container Data 
var cardData = [
    {
        img: "https://bibek10550.github.io/kiitcse/assets/image/KIIT_CSE_blue_name_transparent.png",
        altText: "KIIT CSE",
        name: "KIIT CSE",
        link: "https://github.com/bibek10550/kiitcse",
        description: "This resource hub simplifies your educational journey in Computer Science and Engineering (CSE). It offers: Previous Year Questions (PYQs), Concise Notes, Video Lectures."
    },
    {
        img: "https://bibek10550.github.io/Homepage/favicon_io/apple-touch-icon.png",
        altText: "Homepage",
        name: "Homepage",
        link: "https://github.com/bibek10550/Homepage",
        description: "This homepage is designed to suit your preferences and needs. It offers many features and useful items that you use every day. You can easily customize it to make it your own."
    },
    {
        img: "https://bibek10550.github.io/feedback/favicon/apple-touch-icon.png",
        altText: "feedback form",
        name: "Feedback",
        link: "https://github.com/bibek10550/feedback",
        description: "A platform for collecting feedback and suggestions to improve user experience and satisfaction. "
    },

    // {
    //     img: "https",
    //     altText: "Homepage",
    //     name: "Homepage",
    //     link: "https",
    //     description: "This"
    // },
    // Add more card data objects here if needed
];

// Function to create a card element
function createCard(cardInfo) {
    var card = document.createElement('div');
    card.classList.add('col', 'itemBox');
    card.setAttribute('data-aos', 'fade-up');
    card.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 projectImage">
                <img src="${cardInfo.img}" class="img-fluid rounded-start" alt="${cardInfo.altText}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold"><a href="${cardInfo.link}">${cardInfo.name}</a></h5>
                    <p class="card-text">${cardInfo.description}</p>
                </div>
            </div>
        </div>
    </div>`;
    return card;
}

// Get the recentContainer element
var recentContainer = document.querySelector('.recentContainer');

// Loop through the cardData array and create cards for each item
cardData.forEach(function (cardInfo) {
    var cardElement = createCard(cardInfo);
    if (recentContainer) {
        recentContainer.appendChild(cardElement);
    }
});








// project container (page-1)
// projects Data
var cardDataProject1 = [
    {
        img: "https://bibek10550.github.io/kiitcse/assets/image/KIIT_CSE_blue_name_transparent.png",
        altText: "KIIT CSE",
        name: "KIIT CSE",
        link: "https://github.com/bibek10550/kiitcse",
        description: "This resource hub simplifies your educational journey in Computer Science and Engineering (CSE). It offers: Previous Year Questions (PYQs), Concise Notes, Video Lectures."
    },
    {
        "img": "https://bibek10550.github.io/feedback/favicon/apple-touch-icon.png",
        "altText": "Feedback",
        "name": "Feedback",
        "link": "https://github.com/bibek10550/feedback",
        "description": "A platform for collecting feedback and suggestions to improve user experience and satisfaction."
    },
    {
        img: "https://bibek10550.github.io/Homepage/favicon_io/apple-touch-icon.png",
        altText: "Homepage",
        name: "Homepage",
        link: "https://github.com/bibek10550/Homepage",
        description: "This homepage is designed to suit your preferences and needs. It offers many features and useful items that you use every day. You can easily customize it to make it your own."
    },
    {
        img: "https://bibek10550.github.io/CSE/favicon_io/apple-touch-icon.png",
        altText: "CSE",
        name: "CSE",
        link: "https://github.com/bibek10550/CSE",
        description: "Explore the world of Computer Science and Engineering (CSE) with resources including study materials, project ideas, and educational content."
    },
    {
        img: "https://bibek10550.github.io/Music/favicon_io/apple-touch-icon.png",
        altText: "Music",
        name: "Music",
        link: "https://github.com/bibek10550/Music",
        description: "Discover and enjoy a collection of musical compositions, genres, and playlists tailored to suit every taste and mood."
    },
    {
        img: "https://bibek10550.github.io/bibek/assets/favicon/apple-touch-icon.png",
        altText: "Bibek",
        name: "Bibek",
        link: "https://github.com/bibek10550/bibek",
        description: "Explore the personal portfolio and projects of Bibek, showcasing skills, experiences, and achievements."
    },
    {
        img: "https://bibek10550.github.io/event-calendar/favicon_io/apple-touch-icon.png",
        altText: "Event Calendar",
        name: "Event Calendar",
        link: "https://github.com/bibek10550/event-calendar",
        description: "Keep track of your events and appointments with this convenient and user-friendly event calendar application."
    },
    {
        img: "https://bibek10550.github.io/event-calendar/favicon_io/apple-touch-icon.png",
        altText: "Calendar",
        name: "Calendar",
        link: "https://github.com/bibek10550/calendar",
        description: "Effortlessly manage your schedule and organize your time effectively with this intuitive and feature-rich calendar application."
    },
    {
        img: "https://bibek10550.github.io/dailyQuote/favicon_io/apple-touch-icon.png",
        altText: "Daily Quote",
        name: "Daily Quote",
        link: "https://github.com/bibek10550/dailyQuote",
        description: "Receive daily doses of inspiration and motivation with this app that delivers uplifting quotes straight to your device."
    },
    {
        img: "https://placehold.co/1920x1080.png?text=youtube+resume+button",
        altText: "YouTube Resume Button",
        name: "YouTube Resume Button",
        link: "https://github.com/bibek10550/youtube-resume-button",
        description: "Enhance your YouTube experience with a convenient resume button that allows you to block the advertisement and continue playing the video where you left off in videos."
    },
    {
        img: "https://placehold.co/1920x1080.png?text=video-PIP-Instagram",
        altText: "Video PIP Instagram",
        name: "Video PIP Instagram",
        link: "https://github.com/bibek10550/video-PIP-Instagram",
        description: "Enjoy seamless multitasking with video-PIP-Instagram, enabling picture-in-picture mode for Instagram videos call while browsing through the page."
    },
    {
        img: "assets/images/projects/showTime.png",
        altText: "ShowTime",
        name: "ShowTime",
        link: "https://github.com/bibek10550/showTime",
        description: "Experience sleek and modern design with showTime, Shows the current time so that you don't need to look clock manually"
    },
    {
        img: "https://raw.githubusercontent.com/bibek10550/linksaver/main/android-chrome-512x512.png",
        altText: "LinkSaver",
        name: "LinkSaver",
        link: "https://github.com/bibek10550/linksaver",
        description: "Organize and save your favorite links with ease using LinkSaver, a convenient tool for bookmarking and managing URLs."
    },
    {
        img: "https://raw.githubusercontent.com/bibek10550/pickupline/main/icon.png",
        altText: "Pickupline",
        name: "Pickupline",
        link: "https://github.com/bibek10550/pickupline",
        description: "Spruce up your conversation skills with Pickupline, a collection of witty and charming pick-up lines for various social situations."
    },
    {
        img: "assets/images/projects/GoogleFormHelper.png",
        altText: "Google Form Helper",
        name: "Google Form Helper",
        link: "https://github.com/bibek10550/GoogleFormHelper",
        description: "It is able to provide the answer automatically and also selects the best answer automatically."
    },
    {
        img: "https://bibek10550.github.io/documents/fav-icon/apple-touch-icon.png",
        altText: "Documents",
        name: "Documents",
        link: "https://github.com/bibek10550/documents",
        description: "Access and manage your documents more efficiently with Documents, a platform for organizing and storing files online."
    },
    {
        img: "assets/images/projects/qr-code-reader-or-scanner.png",
        altText: "QR Code Reader or Scanner",
        name: "QR Code Reader or Scanner",
        link: "https://github.com/bibek10550/qr-code-reader-or-scanner",
        description: "Easily scan and decode QR codes with QR Code Reader or Scanner, providing quick access to information encoded in QR codes."
    },
    {
        img: "assets/images/projects/bibeksah48.png",
        altText: "Bibeksah48",
        name: "Bibeksah48",
        link: "https://github.com/bibek10550/bibeksah48",
        description: "Explore the personal portfolio and projects of Bibeksah48, showcasing skills, experiences, and achievements."
    },
    {
        img: "assets/images/projects/Water-droplet.png",
        altText: "Water-droplet",
        name: "Water-droplet",
        link: "https://github.com/bibek10550/Water-droplet",
        description: "Experience the soothing and mesmerizing effect of water droplets with this elegant and calming animation."
    },
    {
        img: "assets/images/projects/google-search.png",
        altText: "Google Search",
        name: "Google Search",
        link: "https://github.com/bibek10550/google-search",
        description: "Simplify your web browsing experience with Google Search, offering fast and accurate search results from the world's largest search engine."
    },
    {
        img: "assets/images/projects/tutorial-point-all-pdf.png",
        altText: "Tutorial Point All PDF",
        name: "Tutorial Point All PDF",
        link: "https://github.com/bibek10550/tutorial-point-all-pdf",
        description: "Access a comprehensive collection of educational resources and tutorials in PDF format from Tutorial Point All PDF."
    },
    {
        img: "assets/images/projects/3d-text-rotating.png",
        altText: "3D Text Rotating",
        name: "3D Text Rotating",
        link: "https://github.com/bibek10550/3d-text-rotating",
        description: "Add depth and visual interest to your designs with 3D Text Rotating, a tool for creating captivating three-dimensional text effects."
    },
    {
        img: "assets/images/projects/Weird-Card-Design.png",
        altText: "Weird Card Design",
        name: "Weird Card Design",
        link: "https://github.com/bibek10550/Weird-Card-Design",
        description: "Explore unconventional and imaginative card designs with Weird Card Design, offering unique and creative templates for various purposes."
    },
    {
        img: "assets/images/projects/back-to-top.png",
        altText: "Back to Top",
        name: "Back to Top",
        link: "https://github.com/bibek10550/back-to-top",
        description: "Enhance user experience and navigation on your website with Back to Top, a convenient feature that allows users to quickly return to the top of the page."
    },
    {
        img: "assets/images/projects/3D-foldable-file.png",
        altText: "3D Foldable File",
        name: "3D Foldable File",
        link: "https://github.com/bibek10550/3D-foldable-file",
        description: "Explore a visually stunning and interactive 3D foldable file viewer, providing a unique and engaging way to interact with digital documents."
    },
    {
        img: "assets/images/projects/custom-scroll-bar.png",
        altText: "Custom Scroll Bar",
        name: "Custom Scroll Bar",
        link: "https://github.com/bibek10550/custom-scroll-bar",
        description: "Enhance the appearance and functionality of your website with a custom scroll bar, allowing for greater control and customization of scrolling behavior."
    },
    {
        img: "assets/images/projects/dropdown.png",
        altText: "Dropdown",
        name: "Dropdown",
        link: "https://github.com/bibek10550/dropdown",
        description: "Implement sleek and user-friendly dropdown menus on your website with Dropdown, offering smooth transitions and intuitive navigation."
    },
    {
        img: "assets/images/projects/light-and-dark-official.png",
        altText: "Light and Dark Official",
        name: "Light and Dark Official",
        link: "https://github.com/bibek10550/light-and-dark-official",
        description: "Provide users with the flexibility to switch between light and dark modes on your website with Light and Dark Official, enhancing readability and reducing eye strain."
    },
    {
        img: "assets/images/projects/navigate-in-same-page.png",
        altText: "Navigate in Same Page",
        name: "Navigate in Same Page",
        link: "https://github.com/bibek10550/navigate-in-same-page",
        description: "Improve user experience and streamline navigation on your website with Navigate in Same Page, allowing users to smoothly scroll to different sections of the same page."
    },
    {
        img: "assets/images/projects/parallax-mountain.png",
        altText: "Parallax Mountain",
        name: "Parallax Mountain",
        link: "https://github.com/bibek10550/parallax-mountain",
        description: "Create visually stunning and immersive web experiences with Parallax Mountain, featuring captivating parallax scrolling effects that bring your content to life."
    },
    {
        img: "assets/images/projects/pop-up-after-load-page.png",
        altText: "Pop-up After Load Page",
        name: "Pop-up After Load Page",
        link: "https://github.com/bibek10550/pop-up-after-load-page",
        description: "Capture user attention and convey important messages with Pop-up After Load Page, a customizable pop-up window that appears after the page has finished loading."
    },
    {
        img: "assets/images/projects/pop-up-email.png",
        altText: "Pop-up Email",
        name: "Pop-up Email",
        link: "https://github.com/bibek10550/pop-up-email",
        description: "Facilitate user engagement and lead generation with Pop-up Email, a user-friendly email subscription pop-up that encourages visitors to subscribe to your mailing list."
    },
    {
        img: "assets/images/projects/responsive-nav-bar.png",
        altText: "Responsive Nav Bar",
        name: "Responsive Nav Bar",
        link: "https://github.com/bibek10550/responsive-nav-bar",
        description: "Ensure seamless navigation on all devices with Responsive Nav Bar, an adaptive navigation menu that adjusts its layout and functionality based on screen size."
    },
    {
        img: "assets/images/projects/responsive-signup-nav-bar.png",
        altText: "Responsive Signup Nav Bar",
        name: "Responsive Signup Nav Bar",
        link: "https://github.com/bibek10550/responsive-signup-nav-bar",
        description: "Optimize user experience and conversion rates with Responsive Signup Nav Bar, a mobile-friendly navigation menu designed to enhance sign-up and registration processes."
    },
    {
        img: "assets/images/projects/slide-show-with-nav-indicator.png",
        altText: "Slide Show with Nav Indicator",
        name: "Slide Show with Nav Indicator",
        link: "https://github.com/bibek10550/slide-show-with-nav-indicator",
        description: "Create engaging and interactive slideshow presentations with Slide Show with Nav Indicator, featuring intuitive navigation indicators for easy slide navigation."
    },
    {
        img: "assets/images/projects/sticky-nav-bar.png",
        altText: "Sticky Nav Bar",
        name: "Sticky Nav Bar",
        link: "https://github.com/bibek10550/sticky-nav-bar",
        description: "Improve website navigation and user experience with Sticky Nav Bar, a fixed navigation menu that remains visible and accessible as users scroll through the page."
    },
    {
        img: "assets/images/projects/text-typing-loading-animation-effects.png",
        altText: "Text Typing Loading Animation Effects",
        name: "Text Typing Loading Animation Effects",
        link: "https://github.com/bibek10550/text-typing-loading-animation-effects",
        description: "Enhance visual appeal and user engagement with Text Typing Loading Animation Effects, a collection of dynamic and attention-grabbing text animation effects for loading screens."
    },
    {
        img: "assets/images/projects/card.png",
        altText: "Card",
        name: "Card",
        link: "https://github.com/bibek10550/card",
        description: "Create stylish and customizable card components with Card, perfect for showcasing content, products, and information in an attractive and organized manner."
    },
    {
        img: "assets/images/projects/chat-bot.png",
        altText: "Chat Bot",
        name: "Chat Bot",
        link: "https://github.com/bibek10550/chat-bot",
        description: "Enhance user engagement and customer support with Chat Bot, an AI-powered chatbot that provides instant responses and assistance to users on your website."
    },
    {
        img: "assets/images/projects/3d-effect.png",
        altText: "3D Effect",
        name: "3D Effect",
        link: "https://github.com/bibek10550/3d-effect",
        description: "Add depth and visual interest to your website with 3D Effect, a collection of stunning three-dimensional effects and animations for creating immersive web experiences."
    },
    {
        img: "assets/images/projects/double-nav-barr.png",
        altText: "Double Nav Barr",
        name: "Double Nav Barr",
        link: "https://github.com/bibek10550/double-nav-barr",
        description: "Enhance website navigation and organization with Double Nav Barr, featuring two navigation bars for improved user experience and accessibility."
    },
    {
        img: "assets/images/projects/css-border.png",
        altText: "CSS Border",
        name: "CSS Border",
        link: "https://github.com/bibek10550/css-border",
        description: "Customize and enhance the appearance of your website elements with CSS Border, offering a variety of border styles and effects to choose from."
    },
    {
        img: "assets/images/projects/double-nav-bar.png",
        altText: "Double Nav Bar",
        name: "Double Nav Bar",
        link: "https://github.com/bibek10550/double-nav-bar",
        description: "Improve website navigation and usability with Double Nav Bar, featuring a dual navigation menu layout for easier access to content and sections."
    },
    {
        img: "assets/images/projects/small-piece-of-paper-falling-down.png",
        altText: "Small Piece of Paper Falling Down",
        name: "Small Piece of Paper Falling Down",
        link: "https://github.com/bibek10550/small-piece-of-paper-falling-down",
        description: "Add visual interest and interactivity to your website with Small Piece of Paper Falling Down, a charming animation effect that simulates falling paper elements."
    },
    {
        img: "assets/images/projects/working-google-search-engine.png",
        altText: "Working Google Search Engine",
        name: "Working Google Search Engine",
        link: "https://github.com/bibek10550/working-google-search-engine",
        description: "Create your own search engine with Working Google Search Engine, a customizable and functional search tool powered by Google's search API."
    },
    {
        img: "assets/images/projects/image-comparison.png",
        altText: "Image Comparison",
        name: "Image Comparison",
        link: "https://github.com/bibek10550/image-comparison",
        description: "Highlight differences and visualize changes between images with Image Comparison, a tool for comparing two images side by side with a draggable slider."
    },
    {
        img: "assets/images/projects/Template.png",
        altText: "Template",
        name: "Template",
        link: "https://github.com/bibek10550/Template",
        description: "Kickstart your web development projects with Template, a versatile and customizable website template designed to meet various design and layout needs."
    },
    // {
    //     img: "https",
    //     altText: "Homepage",
    //     name: "Homepage",
    //     link: "https://bibek10550.github.io/",
    //     description: "This"
    // },
    // Add more card data objects here if needed
];

// Function to create a card element for projectContainer1
function createCardProject1(cardInfo) {
    var card = document.createElement('div');
    card.classList.add('col', 'itemBox');
    card.setAttribute('data-aos', 'fade-up');
    card.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 projectImage">
                <img src="${cardInfo.img}" class="img-fluid rounded-start" alt="${cardInfo.altText}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold"><a href="${cardInfo.link}">${cardInfo.name}</a></h5>
                    <p class="card-text">${cardInfo.description}</p>
                </div>
            </div>
        </div>
    </div>`;
    return card;
}

// Get the projectContainer1 element
var projectContainer1 = document.querySelector('.projectContainer1');

// Load initial five items
loadInitialItems();

function loadInitialItems() {
    // Slice the array to get the first five items
    var initialItems = cardDataProject1.slice(0, 15);
    // Create and append cards for the initial five items
    initialItems.forEach(function (cardInfo) {
        var cardElement = createCardProject1(cardInfo);
        if (projectContainer1) {
            projectContainer1.appendChild(cardElement);
        }
    });

    // If all items are displayed initially, disable the load more button
    if (projectContainer1) {
        if (projectContainer1.children.length >= cardDataProject1.length) {
            loadMoreButton.disabled = true;
            loadMoreButton.innerText = "All items loaded";
        }
    }
}


// Function to load next three items
function loadNextThreeItems() {
    // Slice the array to get the next three items starting from the current number of items displayed
    var nextThreeItems = cardDataProject1.slice(projectContainer1.children.length, projectContainer1.children.length + 5);
    // Create and append cards for the next three items
    nextThreeItems.forEach(function (cardInfo) {
        var cardElement = createCardProject1(cardInfo);
        projectContainer1.appendChild(cardElement);
    });

    // Disable the load more button if all items are displayed
    if (projectContainer1.children.length >= cardDataProject1.length) {
        loadMoreButton.disabled = true;
        loadMoreButton.innerText = "All items loaded";
    }
}

// Get the load more button element
var loadMoreButton = document.querySelector('.loadMoreProject button');

// Add click event listener to the load more button
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function () {
        // Show "Loading" text on button while loading more items
        loadMoreButton.innerText = "Loading...";

        // Simulate loading delay (you can replace this with actual loading code)
        setTimeout(function () {
            loadNextThreeItems();
            // Restore "Load More" text if all items are displayed
            if (projectContainer1.children.length >= cardDataProject1.length) {
                loadMoreButton.innerText = "All items loaded";
            } else {
                loadMoreButton.innerText = "Load More";
            }
        }, 500); // 0.5 second delay for demonstration purposes, replace with actual loading code
    });
}






// html&css page
// // Initialize an empty array to store the HtmlCss data
// let HtmlCssData = [];
// // Function to update the HtmlCss data with new entries
// function updateHtmlCssData(...entries) {
//     // Loop through each entry in the arguments
//     for (let i = 0; i < entries.length; i += 5) {
//         let ProjectTypeFilter = entries[i];
//         let ProjectName = entries[i + 1];
//         let ProjectLink = entries[i + 2];
//         let ProjectImageLink = entries[i + 3];
//         let ProjectDescription = entries[i + 4];

//         // Push new data to the HtmlCssData array
//         HtmlCssData.push({
//             "ProjectTypeFilter": ProjectTypeFilter,
//             "ProjectName": ProjectName,
//             "ProjectLink": ProjectLink,
//             "ProjectImageLink": ProjectImageLink,
//             "ProjectDescription": ProjectDescription,
//         });
//     }
// }
// // Function to generate HTML elements for HtmlCss based on HtmlCss data
// function generateHtmlCssElements() {
//     // Get the container where HtmlCss elements will be appended
//     let HtmlCssContainer = document.querySelector('.HtmlCssContainer');

//     // HtmlCssContainer.innerHTML = '';

//     // Loop through each HtmlCss entry in the HtmlCssData array
//     HtmlCssData.forEach(entry => {
//         // Create a new HtmlCss card element
//         let HtmlCssCard = document.createElement('div');
//         HtmlCssCard.classList.add('col', 'itemBox', entry.ProjectTypeFilter);
//         HtmlCssCard.setAttribute('data-aos', 'fade-up');

//         // Construct the HTML for the HtmlCss card
//         HtmlCssCard.innerHTML = `
//             <div class="card h-100">
//                 <a href="${entry.ProjectLink}">
//                     <img src="${entry.ProjectImageLink}" class="card-img-top" alt="${entry.ProjectName}" />
//                 </a>
//                 <div class="card-body">
//                     <a class="ProjectHeading" href="${entry.ProjectLink}">
//                         <h5 class="card-title">${entry.ProjectName}</h5>
//                     </a>
//                     <p class="card-text text-center">${entry.ProjectDescription}</p>
//                 </div>
//             </div>
//         `;

//         // Append the HtmlCss card to the HtmlCss container
//         HtmlCssContainer.appendChild(HtmlCssCard);
//     });
// }
// // Call the function to generate HtmlCss elements
// generateHtmlCssElements();











// Initialize an empty array to store the HtmlCss data
let HtmlCssData = [];

// Function to update the HtmlCss data with new entries
function updateHtmlCssData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 5) {
        let ProjectTypeFilters = entries[i].split(' '); // Split filters into an array
        let ProjectName = entries[i + 1];
        let ProjectLink = entries[i + 2];
        let ProjectImageLink = entries[i + 3];
        let ProjectDescription = entries[i + 4];

        // Push new data to the HtmlCssData array
        HtmlCssData.push({
            "ProjectTypeFilters": ProjectTypeFilters, // Store multiple filters as an array
            "ProjectName": ProjectName,
            "ProjectLink": ProjectLink,
            "ProjectImageLink": ProjectImageLink,
            "ProjectDescription": ProjectDescription,
        });
    }
}

// Function to generate HTML elements for HtmlCss based on HtmlCss data
function generateHtmlCssElements() {
    // Get the container where HtmlCss elements will be appended
    let HtmlCssContainer = document.querySelector('.HtmlCssContainer');

    // Clear previous content
    // HtmlCssContainer.innerHTML = '';

    // Loop through each HtmlCss entry in the HtmlCssData array
    HtmlCssData.forEach(entry => {
        // Create a new HtmlCss card element
        let HtmlCssCard = document.createElement('div');
        HtmlCssCard.classList.add('col', 'itemBox');
        entry.ProjectTypeFilters.forEach(filter => {
            HtmlCssCard.classList.add(filter); // Add each filter as a class
        });
        // HtmlCssCard.setAttribute('data-aos', 'fade-up');

        // Construct the HTML for the HtmlCss card
        HtmlCssCard.innerHTML = `
            <div class="card h-100">
                <a href="${entry.ProjectLink}">
                    <img src="${entry.ProjectImageLink}" class="card-img-top" alt="${entry.ProjectName}" />
                </a>
                <div class="card-body">
                    <a class="ProjectHeading" href="${entry.ProjectLink}">
                        <h5 class="card-title">${entry.ProjectName}</h5>
                    </a>
                    <p class="card-text text-center">${entry.ProjectDescription}</p>
                </div>
            </div>
        `;

        // Append the HtmlCss card to the HtmlCss container
        HtmlCssContainer.appendChild(HtmlCssCard);
    });
}
// Generate HtmlCss elements
generateHtmlCssElements();








// Function to filter data based on search query
// function searchData(query) {
//     // Convert query to lowercase for case-insensitive search
//     const lowerCaseQuery = query.toLowerCase();

//     // Hide all items first
//     $('.itemBox').hide('1000');

//     // Show items that match the search query
//     HtmlCssData.forEach(entry => {
//         const matchTypeFilter = entry.ProjectTypeFilters.some(filter => filter.toLowerCase().includes(lowerCaseQuery));
//         const matchName = entry.ProjectName.toLowerCase().includes(lowerCaseQuery);
//         const matchDescription = entry.ProjectDescription.toLowerCase().includes(lowerCaseQuery);
//         if (matchTypeFilter || matchName || matchDescription) {
//             $(`.itemBox.${entry.ProjectTypeFilters.join('.')}`).show('1000');
//         }
//     });
// }

// // Event listener for search input
// $('#noteTopicInput').on('input', function () {
//     const query = $(this).val().trim();
//     if (query === '') {
//         // If search input is empty, show all items
//         $('.itemBox').show('1000');
//     } else {
//         // Filter data based on search query
//         searchData(query);
//     }
// });











// Function to filter data based on search query
// function searchData(query) {
//     // Convert query to lowercase for case-insensitive search
//     const lowerCaseQuery = query.toLowerCase();

//     // Hide all items first
//     $('.itemBox').hide(); // Hide items without animation

//     // Show items that match the search query
//     HtmlCssData.forEach(entry => {
//         const matchTypeFilter = entry.ProjectTypeFilters.some(filter => filter.toLowerCase().includes(lowerCaseQuery));
//         const matchName = entry.ProjectName.toLowerCase().includes(lowerCaseQuery);
//         const matchDescription = entry.ProjectDescription.toLowerCase().includes(lowerCaseQuery);
//         if (matchTypeFilter || matchName || matchDescription) {
//             $(`.itemBox.${entry.ProjectTypeFilters.join('.')}`).show(); // Show items without animation
//         }
//         console.log(matchDescription | matchName | matchTypeFilter);
//     });
// }

// // Event listener for search input
// $('#noteTopicInput').on('input', function () {
//     const query = $(this).val().trim();
//     if (query === '') {
//         // If search input is empty, show all items without animation
//         $('.itemBox').show(); // Show items without animation
//     } else {
//         // Filter data based on search query with animation
//         searchData(query);
//     }
// });









// Function to filter data based on search query
function searchData(query, data) {
    // Convert query to lowercase for case-insensitive search
    const lowerCaseQuery = query.toLowerCase();

    // Hide all items first
    $('.itemBox').hide(); // Hide items without animation

    // Show items that match the search query
    data.forEach(entry => {
        const matchTypeFilter = entry.ProjectTypeFilters.some(filter => filter.toLowerCase().includes(lowerCaseQuery));
        const matchName = entry.ProjectName.toLowerCase().includes(lowerCaseQuery);
        const matchDescription = entry.ProjectDescription.toLowerCase().includes(lowerCaseQuery);
        if (matchTypeFilter || matchName || matchDescription) {
            $(`.itemBox.${entry.ProjectTypeFilters.join('.')}`).show(); // Show items without animation
        }
    });
}

// Event listener for search input
$('#noteTopicInput').on('input', function () {
    const query = $(this).val().trim();
    if (query === '') {
        // If search input is empty, show all items without animation
        $('.itemBox').show(); // Show items without animation
    } else {
        // Filter data based on search query without animation
        searchData(query, HtmlCssData);
        searchData(query, JavaScriptData);
        searchData(query, ProjectData);
        // searchData(query, TelegramData);
    }
});












// Initialize an empty array to store the JavaScript data
// let JavaScriptData = [];
// // Function to update the JavaScript data with new entries
// function updateJavaScriptData(...entries) {
//     // Loop through each entry in the arguments
//     for (let i = 0; i < entries.length; i += 5) {
//         let ProjectTypeFilter = entries[i];
//         let ProjectName = entries[i + 1];
//         let ProjectLink = entries[i + 2];
//         let ProjectImageLink = entries[i + 3];
//         let ProjectDescription = entries[i + 4];
//         // Push new data to the JavaScriptData array
//         JavaScriptData.push({
//             "ProjectTypeFilter": ProjectTypeFilter,
//             "ProjectName": ProjectName,
//             "ProjectLink": ProjectLink,
//             "ProjectImageLink": ProjectImageLink,
//             "ProjectDescription": ProjectDescription,
//         });
//     }
// }
// // Function to generate HTML elements for JavaScript based on JavaScript data
// function generateJavaScriptElements() {
//     // Get the container where JavaScript elements will be appended
//     let JavaScriptContainer = document.querySelector('.JavaScriptContainer');

//     // JavaScriptContainer.innerHTML = '';

//     // Loop through each JavaScript entry in the JavaScriptData array
//     JavaScriptData.forEach(entry => {
//         // Create a new JavaScript card element
//         let JavaScriptCard = document.createElement('div');
//         JavaScriptCard.classList.add('col', 'itemBox', entry.ProjectTypeFilter);
//         JavaScriptCard.setAttribute('data-aos', 'fade-up');

//         // Construct the HTML for the JavaScript card
//         JavaScriptCard.innerHTML = `
//             <div class="card h-100">
//                 <a href="${entry.ProjectLink}">
//                     <img src="${entry.ProjectImageLink}" class="card-img-top" alt="${entry.ProjectName}" />
//                 </a>
//                 <div class="card-body">
//                     <a class="ProjectHeading" href="${entry.ProjectLink}">
//                         <h5 class="card-title">${entry.ProjectName}</h5>
//                     </a>
//                     <p class="card-text text-center">${entry.ProjectDescription}</p>
//                 </div>
//             </div>
//         `;

//         // Append the JavaScript card to the JavaScript container
//         JavaScriptContainer.appendChild(JavaScriptCard);
//     });
// }








// Initialize an empty array to store the JavaScript data
let JavaScriptData = [];

// Function to update the JavaScript data with new entries
function updateJavaScriptData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 5) {
        let ProjectTypeFilters = entries[i].split(' '); // Split filters into an array
        let ProjectName = entries[i + 1];
        let ProjectLink = entries[i + 2];
        let ProjectImageLink = entries[i + 3];
        let ProjectDescription = entries[i + 4];

        // Push new data to the JavaScriptData array
        JavaScriptData.push({
            "ProjectTypeFilters": ProjectTypeFilters, // Store multiple filters as an array
            "ProjectName": ProjectName,
            "ProjectLink": ProjectLink,
            "ProjectImageLink": ProjectImageLink,
            "ProjectDescription": ProjectDescription,
        });
    }
}

// Function to generate HTML elements for JavaScript projects based on JavaScript data
function generateJavaScriptElements() {
    // Get the container where JavaScript elements will be appended
    let JavaScriptContainer = document.querySelector('.JavaScriptContainer');

    // Clear previous content
    // JavaScriptContainer.innerHTML = '';

    // Loop through each JavaScript entry in the JavaScriptData array
    JavaScriptData.forEach(entry => {
        // Create a new JavaScript card element
        let JavaScriptCard = document.createElement('div');
        JavaScriptCard.classList.add('col', 'itemBox');
        entry.ProjectTypeFilters.forEach(filter => {
            JavaScriptCard.classList.add(filter); // Add each filter as a class
        });
        // JavaScriptCard.setAttribute('data-aos', 'fade-up');

        // Construct the HTML for the JavaScript card
        JavaScriptCard.innerHTML = `
            <div class="card h-100">
                <a href="${entry.ProjectLink}">
                    <img src="${entry.ProjectImageLink}" class="card-img-top" alt="${entry.ProjectName}" />
                </a>
                <div class="card-body">
                    <a class="ProjectHeading" href="${entry.ProjectLink}">
                        <h5 class="card-title">${entry.ProjectName}</h5>
                    </a>
                    <p class="card-text text-center">${entry.ProjectDescription}</p>
                </div>
            </div>
        `;

        // Append the JavaScript card to the JavaScript container
        JavaScriptContainer.appendChild(JavaScriptCard);
    });
}




// Call the function to generate JavaScript elements
generateJavaScriptElements();









// Initialize an empty array to store the Project data
// let ProjectData = [];
// // Function to update the Project data with new entries
// function updateProjectData(...entries) {
//     // Loop through each entry in the arguments
//     for (let i = 0; i < entries.length; i += 5) {
//         let ProjectTypeFilter = entries[i];
//         let ProjectName = entries[i + 1];
//         let ProjectLink = entries[i + 2];
//         let ProjectImageLink = entries[i + 3];
//         let ProjectDescription = entries[i + 4];

//         // Push new data to the ProjectData array
//         ProjectData.push({
//             "ProjectTypeFilter": ProjectTypeFilter,
//             "ProjectName": ProjectName,
//             "ProjectLink": ProjectLink,
//             "ProjectImageLink": ProjectImageLink,
//             "ProjectDescription": ProjectDescription,
//         });
//     }
// }
// // Function to generate HTML elements for Project based on Project data
// function generateProjectElements() {
//     // Get the container where Project elements will be appended
//     let ProjectContainer = document.querySelector('.ProjectContainer');

//     // ProjectContainer.innerHTML = '';

//     // Loop through each Project entry in the ProjectData array
//     ProjectData.forEach(entry => {
//         // Create a new Project card element
//         let ProjectCard = document.createElement('div');
//         ProjectCard.classList.add('col', 'itemBox', entry.ProjectTypeFilter);
//         ProjectCard.setAttribute('data-aos', 'fade-up');

//         // Construct the HTML for the Project card
//         ProjectCard.innerHTML = `
//             <div class="card h-100">
//                 <a href="${entry.ProjectLink}">
//                     <img src="${entry.ProjectImageLink}" class="card-img-top" alt="${entry.ProjectName}" />
//                 </a>
//                 <div class="card-body">
//                     <a class="ProjectHeading" href="${entry.ProjectLink}">
//                         <h5 class="card-title">${entry.ProjectName}</h5>
//                     </a>
//                     <p class="card-text text-center">${entry.ProjectDescription}</p>
//                 </div>
//             </div>
//         `;

//         // Append the Project card to the Project container
//         ProjectContainer.appendChild(ProjectCard);
//     });
// }
// // Call the function to generate Project elements
// generateProjectElements();












// Initialize an empty array to store the Project data
let ProjectData = [];

// Function to update the Project data with new entries
function updateProjectData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 5) {
        let ProjectTypeFilters = entries[i].split(' '); // Split filters into an array
        let ProjectName = entries[i + 1];
        let ProjectLink = entries[i + 2];
        let ProjectImageLink = entries[i + 3];
        let ProjectDescription = entries[i + 4];

        // Push new data to the ProjectData array
        ProjectData.push({
            "ProjectTypeFilters": ProjectTypeFilters, // Store multiple filters as an array
            "ProjectName": ProjectName,
            "ProjectLink": ProjectLink,
            "ProjectImageLink": ProjectImageLink,
            "ProjectDescription": ProjectDescription,
        });
    }
}

// Function to generate HTML elements for Project based on Project data
function generateProjectElements() {
    // Get the container where Project elements will be appended
    let ProjectContainer = document.querySelector('.ProjectContainer');

    // Clear previous content
    // ProjectContainer.innerHTML = '';

    // Loop through each Project entry in the ProjectData array
    ProjectData.forEach(entry => {
        // Create a new Project card element
        let ProjectCard = document.createElement('div');
        ProjectCard.classList.add('col', 'itemBox');
        entry.ProjectTypeFilters.forEach(filter => {
            ProjectCard.classList.add(filter); // Add each filter as a class
        });
        // ProjectCard.setAttribute('data-aos', 'fade-up');

        // Construct the HTML for the Project card
        ProjectCard.innerHTML = `
            <div class="card h-100">
                <a href="${entry.ProjectLink}">
                    <img src="${entry.ProjectImageLink}" class="card-img-top" alt="${entry.ProjectName}" />
                </a>
                <div class="card-body">
                    <a class="ProjectHeading" href="${entry.ProjectLink}">
                        <h5 class="card-title">${entry.ProjectName}</h5>
                    </a>
                    <p class="card-text text-center">${entry.ProjectDescription}</p>
                </div>
            </div>
        `;

        // Append the Project card to the Project container
        ProjectContainer.appendChild(ProjectCard);
    });
}
// Generate Project elements
generateProjectElements();







// // Initialize an empty array to store the Telegram data
// let TelegramData = [];
// // Function to update the HtmlCss data with new entries
// function updateTelegramData(...entries) {
//     // Loop through each entry in the arguments
//     for (let i = 0; i < entries.length; i += 5) {
//         let ProjectTypeFilter = entries[i];
//         let ProjectName = entries[i + 1];
//         let ProjectLink = entries[i + 2];
//         let ProjectImageLink = entries[i + 3];
//         let ProjectDescription = entries[i + 4];

//         // Push new data to the Telegram array
//         TelegramData.push({
//             "ProjectTypeFilter": ProjectTypeFilter,
//             "ProjectName": ProjectName,
//             "ProjectLink": ProjectLink,
//             "ProjectImageLink": ProjectImageLink,
//             "ProjectDescription": ProjectDescription,
//         });
//     }
// }
// // Function to generate HTML elements for Telegram based on Telegram data
// function generateTelegramElements() {
//     // Get the container where Telegram elements will be appended
//     let TelegramContainer = document.querySelector('.TelegramContainer');

//     // Telegram.innerHTML = '';

//     // Loop through each HtmlCss entry in the Telegram array
//     TelegramData.forEach(entry => {
//         // Create a new HtmlCss card element
//         let TelegramCard = document.createElement('div');
//         TelegramCard.classList.add('col', 'itemBox', entry.ProjectTypeFilter);
//         TelegramCard.setAttribute('data-aos', 'fade-up');

//         // Construct the HTML for the Telegram card
//         TelegramCard.innerHTML = `
//         <div class="card mb-1" style="max-width: 540px;">
//             <div class="row g-0">
//                 <div class="col-md-4 projectImage">
//                     <img src="${entry.ProjectImageLink}" class="img-fluid rounded-circle" width="100" alt="${entry.ProjectName}">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title fw-bold"><a href="${entry.ProjectLink}">${entry.ProjectName}</a></h5>
//                         <i class="copylink fa fa-clone" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Copy Link" title="Copy Link"></i>
//                         <p class="card-text">${entry.ProjectDescription}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//         // Append the Telegram card to the Telegram container
//         TelegramContainer.appendChild(TelegramCard);
//     });
// }
// // Call the function to generate Telegram elements
// generateTelegramElements();









// Initialize an empty array to store the Telegram data
let TelegramData = [];

// Function to update the Telegram data with new entries
function updateTelegramData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 5) {
        let ProjectTypeFilters = entries[i].split(' '); // Split filters into an array
        let ProjectName = entries[i + 1];
        let ProjectLink = entries[i + 2];
        let ProjectImageLink = entries[i + 3];
        let ProjectDescription = entries[i + 4];

        // Push new data to the TelegramData array
        TelegramData.push({
            "ProjectTypeFilters": ProjectTypeFilters, // Store multiple filters as an array
            "ProjectName": ProjectName,
            "ProjectLink": ProjectLink,
            "ProjectImageLink": ProjectImageLink,
            "ProjectDescription": ProjectDescription,
        });
    }
}

// Function to generate HTML elements for Telegram based on Telegram data
function generateTelegramElements() {
    // Get the container where Telegram elements will be appended
    let TelegramContainer = document.querySelector('.TelegramContainer');

    // Clear previous content
    // TelegramContainer.innerHTML = '';

    // Loop through each Telegram entry in the TelegramData array
    TelegramData.forEach(entry => {
        // Create a new Telegram card element
        let TelegramCard = document.createElement('div');
        TelegramCard.classList.add('col', 'itemBox');
        entry.ProjectTypeFilters.forEach(filter => {
            TelegramCard.classList.add(filter); // Add each filter as a class
        });
        TelegramCard.setAttribute('data-aos', 'fade-up');

        // Construct the HTML for the Telegram card
        TelegramCard.innerHTML = `
        <div class="card mb-1" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 projectImage">
                    <img src="${entry.ProjectImageLink}" class="img-fluid rounded-circle" width="100" alt="${entry.ProjectName}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold"><a href="${entry.ProjectLink}">${entry.ProjectName}</a></h5>
                        <i class="copylink fa fa-clone" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Copy Link" title="Copy Link"></i>
                        <p class="card-text">${entry.ProjectDescription}</p>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Append the Telegram card to the Telegram container
        TelegramContainer.appendChild(TelegramCard);
    });
}
// Generate Telegram elements
generateTelegramElements();


















// Function to filter Telegram channels based on search input
// function filterTelegramData(searchText) {
//     // Get the container where Telegram elements are appended
//     let TelegramContainer = document.querySelector('.TelegramContainer');
//     // Clear the container
//     // TelegramContainer.innerHTML = '';

//     // Filter TelegramData based on search text
//     let filteredData = TelegramData.filter(entry => {
//         return entry.ProjectName.toLowerCase().includes(searchText.toLowerCase()) ||
//             entry.ProjectDescription.toLowerCase().includes(searchText.toLowerCase()) ||
//             entry.ProjectTypeFilter.toLowerCase().includes(searchText.toLowerCase());
//     });

//     // Generate HTML elements for filtered Telegram channels
//     filteredData.forEach(entry => {
//         let TelegramCard = document.createElement('div');
//         TelegramCard.classList.add('col', 'itemBox', entry.ProjectTypeFilter);
//         TelegramCard.setAttribute('data-aos', 'fade-up');
//         TelegramCard.innerHTML = `
//         <div class="card mb-1" style="max-width: 540px;">
//             <div class="row g-0">
//                 <div class="col-md-4 projectImage">
//                     <img src="${entry.ProjectImageLink}" class="img-fluid rounded-circle" width="100" alt="${entry.ProjectName}">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title fw-bold"><a href="${entry.ProjectLink}">${entry.ProjectName}</a></h5>
//                         <i class="copylink fa fa-clone" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Copy Link" title="Copy Link"></i>
//                         <p class="card-text">${entry.ProjectDescription}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `;
//         TelegramContainer.appendChild(TelegramCard);
//     });

//     // Get all elements with the class "copylink"
//     var copyLinks = document.querySelectorAll('.copylink');
//     // Add click event listener to each copylink element
//     copyLinks.forEach(function (link) {
//         link.addEventListener('click', function (event) {
//             // Prevent default action (e.g., following the link)
//             event.preventDefault();

//             // Get the URL to copy
//             var urlToCopy = this.parentElement.querySelector('h5.card-title a').getAttribute('href');

//             // Create a temporary input element
//             var tempInput = document.createElement('input');

//             // Set its value to the URL
//             tempInput.setAttribute('value', urlToCopy);

//             // Append it to the document
//             document.body.appendChild(tempInput);

//             // Select the text in the input element
//             tempInput.select();

//             // Execute the copy command
//             document.execCommand('copy');

//             // Remove the temporary input
//             document.body.removeChild(tempInput);

//             // Change the class of the icon to indicate successful copy
//             this.classList.remove('fa-clone');
//             this.classList.add('fa-check-circle-o');

//             // Change the data-bs-title attribute to indicate successful copy
//             this.setAttribute('data-bs-title', 'Copied Link');

//             // Revert the class and data-bs-title after 2 seconds
//             setTimeout(function () {
//                 link.classList.remove('fa-check-circle-o');
//                 link.classList.add('fa-clone');
//                 link.setAttribute('data-bs-title', 'Copy Link');
//             }, 2000);
//             console.log('Link copied to clipboard: ' + urlToCopy);
//         });
//     });

//     // tooltip initialization
//     const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
//     const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// }

// // Event listener for input change in search field
// var noteTopicInput = document.getElementById('noteTopicInput');
// if (noteTopicInput) {
//     document.getElementById('noteTopicInput').addEventListener('input', function (event) {
//         filterTelegramData(event.target.value);
//     });
// }












// Get all elements with the class "copylink"
window.addEventListener("load", () => {
    // Get all elements with the class "copylink"
    var copyLinks = document.querySelectorAll('.copylink');

    // Add click event listener to each copylink element
    copyLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Prevent default action (e.g., following the link)
            event.preventDefault();

            // Get the URL to copy
            var urlToCopy = this.parentElement.querySelector('h5.card-title a').getAttribute('href');

            // Create a temporary input element
            var tempInput = document.createElement('input');

            // Set its value to the URL
            tempInput.setAttribute('value', urlToCopy);

            // Append it to the document
            document.body.appendChild(tempInput);

            // Select the text in the input element
            tempInput.select();

            // Execute the copy command
            document.execCommand('copy');

            // Remove the temporary input
            document.body.removeChild(tempInput);

            // Change the class of the icon to indicate successful copy
            this.classList.remove('fa-clone');
            this.classList.add('fa-check-circle-o');

            // Change the data-bs-title attribute to indicate successful copy
            this.setAttribute('data-bs-title', 'Copied Link');

            // Revert the class and data-bs-title after 2 seconds
            setTimeout(function () {
                link.classList.remove('fa-check-circle-o');
                link.classList.add('fa-clone');
                link.setAttribute('data-bs-title', 'Copy Link');
            }, 2000);
            console.log('Link copied to clipboard: ' + urlToCopy);
        });
    });
});







// developer
// testimonial container
// testimonial Data for multiple cards
var cardDataTestimonial = [
    {
        img: "https://bibek10550.github.io/kiitcse/assets/image/developer.jpg",
        altText: "Bibek Chand Sah",
        name: "Bibek Chand Sah",
        description: "If this page help you in anyway then please consider providing us the feedback in feedback page. It will help us a lot to improve the content of the page."
    },
    {
        img: "https://bibek10550.github.io/kiitcse/assets/image/developer.jpg",
        altText: "Bibek Chand Sah",
        name: "Bibek Chand Sah",
        description: "If this page help you in anyway then please consider providing us the feedback in feedback page. It will help us a lot to improve the content of the page."
    },
    {
        img: "https://bibek10550.github.io/kiitcse/assets/image/developer.jpg",
        altText: "Bibek Chand Sah",
        name: "Bibek Chand Sah",
        description: "If this page help you in anyway then please consider providing us the feedback in feedback page. It will help us a lot to improve the content of the page."
    },
    {
        img: "https://bibek10550.github.io/kiitcse/assets/image/developer.jpg",
        altText: "Bibek Chand Sah",
        name: "Bibek Chand Sah",
        description: "If this page help you in anyway then please consider providing us the feedback in feedback page. It will help us a lot to improve the content of the page."
    },
    // {
    //     img: "https",
    //     altText: "computer",
    //     name: "computer",
    //     description: "This"
    // }
    // Add more card data objects here if needed
];

// Function to create a card element
function createCardTestimonial(cardInfo) {
    var card = document.createElement('div');
    card.classList.add('col-lg-auto', 'swiper-slide');
    card.innerHTML = `
    <div class="card testimonial">
        <img src="${cardInfo.img}" class="rounded-circle me-1 mt-4" width="100" height="100" class="card-img-top" alt="${cardInfo.altText}">
        <div class="card-body">
            <h5 class="card-title text-center fw-bolder">${cardInfo.name}</h5>
            <p class="card-text">${cardInfo.description}</p>
        </div>
    </div>`;
    return card;
}

// Get the recentContainer element
var testimonialContainer = document.querySelector('.testimonialContainer');

// Loop through the cardData array and create cards for each item
cardDataTestimonial.forEach(function (cardInfo) {
    var cardElement = createCardTestimonial(cardInfo);
    if (testimonialContainer) {
        testimonialContainer.appendChild(cardElement);
    }
});










// swiper testimonials
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    // mousewheel: true,
    keyboard: true,
    grabCursor: 'true',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // effect: "coverflow",
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    // },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
})





// video
// https://www.instagram.com/reels/C6UAHa1NiOn/
// https://www.instagram.com/reels/C3VS7sXPnCt/
// https://www.instagram.com/reels/C424Ijtoqoo/
// https://www.instagram.com/reels/C4jxYnhPlZY/