const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


// ===== BOTÃO BANNER =====
const exploreBtn = document.querySelector('.banner button');

exploreBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.content-area').offsetTop,
    behavior: 'smooth'
  });
});


// ===== FILTRO =====
const filtroItems = document.querySelectorAll('.filtro li');

filtroItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`Você clicou em ${item.textContent.trim()}`);
  });
});


// ===== ÍCONES DA TOPBAR =====
// (corrigido: agora funciona com qualquer elemento dentro de .icons)
const icons = document.querySelectorAll('.icons *');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const icone = icon.textContent.trim(); // pega emoji/texto

    if (icone === '🛒') {
      alert('Abrindo o carrinho...');
    } else if (icone === '👤') {
      alert('Acessando perfil...');
    } else if (icone === '🔍') {
      const termo = prompt('O que você deseja buscar?');
      if (termo) alert(`Buscando por: ${termo}`);
    }
  });
});


// ===== WHATSAPP =====
const whatsappBtn = document.querySelector('.whatsapp');

whatsappBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://wa.me/5511111111111111', '_blank'); 
});


// ===== CARDS =====
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    alert(`Você clicou no produto ${index + 1}`);
  });
});
