


// mine below


const menu  = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active");

    console.log("Menu toggled");
});

// making rotating logs stay rotating and not reset

// const logos = document.querySelector(".rotating__logos__track").cloneNode(true);
// document.querySelector(".rotating__logos").appendChild(logos);


// windows.addEventListener("load", () => {
//     const yearElement = document.getElementById("year");
//     const currentYear = new Date().getFullYear();
//     yearElement.textContent = currentYear;
// })
