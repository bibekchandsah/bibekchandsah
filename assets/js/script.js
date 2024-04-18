// Function to set the theme based on user selection
function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    if (theme === 'light') {
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
            // Select Light mode option in the dropdown
            document.getElementById('colorModeSelect').value = 'light';
            // Apply light mode
            setTheme('light');
        }
        // Check if D is pressed for dark mode
        else if (event.key === 'd' || event.key === 'D') {
            // Prevent default behavior
            event.preventDefault();
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





// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    // spaceBetween: 48,
    // centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 3,
    //     },
    // },
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    mousewheel: true,
    keyboard: true,
});