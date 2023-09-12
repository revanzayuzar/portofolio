// M. Revanza Yuzar



// Untuk mengakhiri loading
document.getElementById("loading").addEventListener("click", function() {
    let loading = document.querySelector(".loading");
    loading.classList.remove("loading");
    loading.classList.add("finish-loading");
    let fixed = document.querySelector(".fixed");
    fixed.classList.remove("fixed");
});



// Untuk menampilkan navbar
document.getElementById("button-menu").addEventListener("click", function() {
    let navbar = document.querySelector(".navbar");
    navbar.classList.add("navbar-active");
    let buttonMenu = document.querySelector(".button-menu");
    buttonMenu.classList.add("button-hidden");
});



// Untuk menyembunyikan navbar
document.getElementById("button-close").addEventListener("click", function() {
    let navbar = document.querySelector(".navbar");
    navbar.classList.remove("navbar-active");
    let buttonMenu = document.querySelector(".button-menu");
    buttonMenu.classList.remove("button-hidden");
    buttonMenu.classList.add("button-active");
});

const navbar = document.querySelector(".navbar");
const buttonMenu = document.getElementById("button-menu");
const buttonClose = document.getElementById("button-close");

document.addEventListener("click", function(event) {
    if (!navbar.contains(event.target) && !buttonMenu.contains(event.target) && !buttonClose.contains(event.target)) {
        let navbar = document.querySelector(".navbar");
        navbar.classList.remove("navbar-active");
        let buttonMenu = document.querySelector(".button-menu");
        buttonMenu.classList.remove("button-hidden");
        buttonMenu.classList.add("button-active");
    }
});