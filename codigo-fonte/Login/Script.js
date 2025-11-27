
const menuBtn = document.querySelector(".icon-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active"); // adiciona/remove classe
});

const logo = document.querySelector(".site-logo");
logo.style.cursor = "pointer";

logo.addEventListener("click", () => {
    window.location.href = "index.html"; // página inicial
});


const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const container = document.querySelector(".container");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

