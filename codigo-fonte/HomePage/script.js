document.querySelector(".menu-icon").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("active");
});

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector("#produtos").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".whatsapp").addEventListener("click", () => {
  window.open("https://wa.me/5588999999999", "_blank");
});
