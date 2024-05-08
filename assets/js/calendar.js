document.addEventListener("DOMContentLoaded", function () {
    const widgetContainer = document.getElementById("widget-container");
    const themeContainers = {
        calendar: { container: document.getElementById("theme-buttons-container-calendar"), url: "https://bibek10550.github.io/event-calendar/", mobileWidth: 380, desktopWidth: 453, mobileHeight: 630, desktopHeight: 630 },
        commenting: { container: document.getElementById("theme-buttons-container-commenting"), url: "https://bibek10550.github.io/dailyQuote/", mobileWidth: 388, desktopWidth: 640, mobileHeight: 583, desktopHeight: 430 },
        linksaver: { container: document.getElementById("theme-buttons-container-linksaver"), url: "https://bibek10550.github.io/linksaver/", mobileWidth: 330, desktopWidth: 330, mobileHeight: 456, desktopHeight: 456 },
    };
    // Function to close all theme containers
    function closeAllThemeContainers() {
        Object.values(themeContainers).forEach(containerInfo => {
            containerInfo.container.style.display = 'none';
            containerInfo.container.style.right = '0px';
            containerInfo.container.style.transition = 'all .3s linear';
        });
    }
    // Function to handle icon click
    function handleIconClick(icon) {
        // Close all theme containers
        closeAllThemeContainers();
        // Show the corresponding theme container
        const containerInfo = themeContainers[icon];
        // Check if the iframe already exists
        if (!containerInfo.container.querySelector('iframe')) {
            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.src = containerInfo.url;
            // Determine width and height based on device width
            const width = window.innerWidth < 600 ? containerInfo.mobileWidth : containerInfo.desktopWidth;
            const height = window.innerWidth < 600 ? containerInfo.mobileHeight : containerInfo.desktopHeight;
            iframe.width = `${width}px`;
            iframe.height = `${height}px`;
            containerInfo.container.appendChild(iframe);
            iframe.style.border = "none";
        }

        containerInfo.container.style.display = 'flex';
        // Toggle the active class on widget-container for styling
        widgetContainer.classList.toggle("active");
    }

    widgetContainer.addEventListener("click", function (event) {
        // Prevent the click event from propagating to the document
        event.stopPropagation();
        // Check if the theme container is already populated
        const clickedIcon = event.target.closest('.switcher-btn');
        if (clickedIcon) {
            const iconTitle = clickedIcon.getAttribute('title');
            handleIconClick(iconTitle);
        }
    });

    // Event listener to close the website when clicking outside of specified elements
    document.addEventListener("click", function (event) {
        const target = event.target;
        if (!widgetContainer.contains(target)) {
            closeAllThemeContainers();
            // Remove the "active" class from color-switcher for styling
            widgetContainer.classList.remove("active");
        }
    });

    // Update iframe width and height on window resize
    window.addEventListener('resize', function () {
        Object.values(themeContainers).forEach(containerInfo => {
            const iframe = containerInfo.container.querySelector('iframe');
            if (iframe) {
                const width = window.innerWidth < 480 ? containerInfo.mobileWidth : containerInfo.desktopWidth;
                const height = window.innerWidth < 600 ? containerInfo.mobileHeight : containerInfo.desktopHeight;
                iframe.width = `${width}px`;
                iframe.height = `${height}px`;
            }
        });
    });
});







// short cut key for calendar "alt + c"
document.addEventListener('keydown', function (event) {
    // Check if Alt + C is pressed
    if (event.altKey && event.key.toLowerCase() === 'c') {
        event.preventDefault(); // Prevent default browser behavior

        // Handle different platforms and browsers
        const platform = navigator.platform.toLowerCase();
        const browser = navigator.userAgent.toLowerCase();

        if ((platform.includes('mac') || browser.includes('safari')) ||
            (platform.includes('mac') || browser.includes('firefox'))) {
            // For macOS Safari and Firefox
            handleCalendar();
        } else if (platform.includes('win') || browser.includes('edge')) {
            // For Windows Edge
            handleCalendar();
        } else if (platform.includes('linux')) {
            // For Linux
            handleCalendar();
        } else {
            // For other platforms and browsers
            console.log('Alt + C shortcut not supported on this platform/browser.');
        }
    }
});
function handleCalendar() {
    const calendarContainer = document.getElementById('theme-buttons-container-calendar');
    const calendarButton = document.querySelector('.switcher-btn[title="calendar"]');
    if (calendarButton && calendarContainer.style.display === 'none') {
        calendarButton.click(); // Simulate a click on the calendar button
        calendarContainer.style.display = 'flex';
    } else {
        calendarContainer.style.display = 'none';
    }
}