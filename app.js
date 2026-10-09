// app.js
import { fetchProducts, fetchProductsByCategory } from "./api.js";
import { showError, showLoading, hideLoading } from "./utils.js";

let state = {
  products: [],
  filtered: [],
  cart: JSON.parse(localStorage.getItem("cart")) || []
};

// Initialize dashboard
async function init() {
  showLoading();
  try {
    state.products = await fetchProducts();
    state.filtered = state.products;
    renderProducts(state.filtered);
  } catch (error) {
    showError("Unable to load products. Please try again later.");
  } finally {
    hideLoading();
  }
}

// Render product cards
function renderProducts(products) {
  const container = document.getElementById("productGrid");
  container.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
      <button data-id="${p.id}">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Search filter
document.getElementById("searchInput").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  state.filtered = state.products.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  renderProducts(state.filtered);
});

// Category tabs
document.querySelectorAll(".category-tab").forEach(tab => {
  tab.addEventListener("click", async () => {
    const category = tab.dataset.category;
    showLoading();
    try {
      state.filtered = category === "all"
        ? state.products
        : await fetchProductsByCategory(category);
      renderProducts(state.filtered);
    } catch (error) {
      showError("Category fetch failed.");
    } finally {
      hideLoading();
    }
  });
});

// Sorting logic
document.getElementById("sortSelect").addEventListener("change", e => {
  const sortType = e.target.value;
  if (sortType === "price-asc") {
    state.filtered.sort((a, b) => a.price - b.price);
  } else if (sortType === "price-desc") {
    state.filtered.sort((a, b) => b.price - a.price);
  }
  renderProducts(state.filtered);
});

// Cart management
document.addEventListener("click", e => {
  if (e.target.matches("button[data-id]")) {
    const id = e.target.dataset.id;
    state.cart.push(id);
    localStorage.setItem("cart", JSON.stringify(state.cart));
    alert("Item added to cart!");
  }
});

init();
