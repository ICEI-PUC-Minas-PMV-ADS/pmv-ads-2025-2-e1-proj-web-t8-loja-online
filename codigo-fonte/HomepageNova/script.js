// BOTÃO DO BANNER – SCROLL PARA PRODUTOS
const btnExplorar = document.getElementById("btnExplorar");
const productsGrid = document.getElementById("productsGrid");

btnExplorar.addEventListener("click", () => {
  productsGrid.scrollIntoView({ behavior: "smooth" });
});

// ===============================
// LOCALSTORAGE – FILTROS
// ===============================
const btnAplicarFiltros = document.getElementById("btnAplicarFiltros");

function getSelectedFilters() {
  const sizes = [...document.querySelectorAll('input[name="size"]:checked')].map(i => i.value);
  const colors = [...document.querySelectorAll('input[name="color"]:checked')].map(i => i.value);
  const prices = [...document.querySelectorAll('input[name="price"]:checked')].map(i => i.value);
  return { sizes, colors, prices };
}

function applyFilters(filters) {
  const cards = productsGrid.querySelectorAll(".product-card");

  cards.forEach(card => {
    const cardSize = card.dataset.size;
    const cardColor = card.dataset.color;
    const cardPrice = card.dataset.price;

    const sizeMatch  = filters.sizes.length  === 0 || filters.sizes.includes(cardSize);
    const colorMatch = filters.colors.length === 0 || filters.colors.includes(cardColor);
    const priceMatch = filters.prices.length === 0 || filters.prices.includes(cardPrice);

    card.style.display = (sizeMatch && colorMatch && priceMatch) ? "" : "none";
  });
}

function saveFilters() {
  const filters = getSelectedFilters();
  localStorage.setItem("districtFilters", JSON.stringify(filters));
}

function loadFilters() {
  const saved = localStorage.getItem("districtFilters");
  if (!saved) return;

  const filters = JSON.parse(saved);

  document.querySelectorAll('input[name="size"]').forEach(input => {
    input.checked = filters.sizes.includes(input.value);
  });

  document.querySelectorAll('input[name="color"]').forEach(input => {
    input.checked = filters.colors.includes(input.value);
  });

  document.querySelectorAll('input[name="price"]').forEach(input => {
    input.checked = filters.prices.includes(input.value);
  });

  applyFilters(filters);
}

btnAplicarFiltros.addEventListener("click", () => {
  const filters = getSelectedFilters();
  saveFilters();
  applyFilters(filters);
});

// carrega filtros ao abrir
loadFilters();

const recentViewText = document.getElementById("recentViewText");

function saveLastViewedProduct(title, price) {
  const info = { title, price, viewedAt: new Date().toISOString() };
  localStorage.setItem("districtLastViewed", JSON.stringify(info));
}

function loadLastViewedProduct() {
  const saved = localStorage.getItem("districtLastViewed");
  if (!saved) return;

  const { title, price } = JSON.parse(saved);
  recentViewText.textContent = `Você visualizou recentemente: ${title} — ${price}`;
}

// clicar em "Ver produto"
document.querySelectorAll(".product-card").forEach(card => {
  const btn = card.querySelector(".product-btn");
  const title = card.querySelector(".product-title").textContent;
  const price = card.querySelector(".product-price").textContent;

  btn.addEventListener("click", () => {
    saveLastViewedProduct(title, price);
    loadLastViewedProduct();
    alert(`Abrir página do produto: ${title}`);
  });
});

loadLastViewedProduct();

function getFavorites() {
  const saved = localStorage.getItem("districtFavorites");
  return saved ? JSON.parse(saved) : [];
}

function saveFavorites(favs) {
  localStorage.setItem("districtFavorites", JSON.stringify(favs));
}

function toggleFavorite(card) {
  const title = card.querySelector(".product-title").textContent;
  let favorites = getFavorites();

  if (favorites.includes(title)) {
    favorites = favorites.filter(t => t !== title);
  } else {
    favorites.push(title);
  }
  saveFavorites(favorites);
}

function syncFavoriteButtons() {
  const favorites = getFavorites();
  document.querySelectorAll(".product-card").forEach(card => {
    const title = card.querySelector(".product-title").textContent;
    const favBtn = card.querySelector(".favorite-btn");
    if (favorites.includes(title)) {
      favBtn.classList.add("active");
    } else {
      favBtn.classList.remove("active");
    }
  });
}

document.querySelectorAll(".product-card").forEach(card => {
  const favBtn = card.querySelector(".favorite-btn");
  favBtn.addEventListener("click", () => {
    toggleFavorite(card);
    syncFavoriteButtons();
  });
});

syncFavoriteButtons();

