document.addEventListener("DOMContentLoaded", function() {
    const mobileNavBtn = document.querySelector(".mobile-nav-btn");
    const mobileScreen = document.querySelector("header");

    mobileNavBtn.addEventListener("click", function() {
        mobileScreen.classList.toggle("active");
    });
});
