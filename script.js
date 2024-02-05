// Function to handle mouse enter and leave events for the main container
function handleMainContainerEvents() {
    var mainContainer = document.querySelector("#elements-container");
    var fixedImage = document.querySelector("#fixed-image");

    mainContainer.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block";
    });

    mainContainer.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none";
    });
}

// Function to handle mouse enter event for individual elements
function handleElementMouseEnter() {
    var elements = document.querySelectorAll(".elements");
    var fixedImage = document.querySelector("#fixed-image");

    elements.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            var image = element.getAttribute('data-image');
            fixedImage.style.backgroundImage = `url(${image})`;
        });
    });
}

// Function to initialize Swiper
function initializeSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}

// Function to handle menu click event
function handleMenuClick() {
    var menu = document.querySelector("nav h3");
    var fullScreen = document.querySelector("#full-screen");
    var topImage = document.querySelector("nav img");
    var flag = 0;

    menu.addEventListener("click", function () {
        if (flag === 0) {
            console.log("Menu opened");
            fullScreen.style.top = 0;
            topImage.style.opacity = 0;
            flag = 1;
        } else {
            console.log("Menu closed");
            fullScreen.style.top = "-100%";
            topImage.style.opacity = 1;
            flag = 0;
        }
    });
}

// Function to hide loader after a delay
function hideLoader() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4000);
}



// Call the functions to set up the event handlers and initialize components
function initializePage() {
    handleMainContainerEvents();
    handleElementMouseEnter();
    initializeSwiper();
    handleMenuClick();

    hideLoader();
   

}

// Call the initialization function when the page is loaded
window.addEventListener("load", initializePage);
