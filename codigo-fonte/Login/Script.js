const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

const menuToggle = document.getElementById("menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
  if (menuToggle.textContent === "☰") {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "☰";
  }
});

document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    navUl.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});