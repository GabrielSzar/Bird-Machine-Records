import { products } from "./products.js";
import { merchs } from "./merchs.js";

const grid = document.querySelector(".grid-products");
const merchGrid = document.querySelector(".grid-merch");

const isHome = grid.dataset.preview === "true";

const preview = isHome ? "grid-5" : "grid-4";
grid.classList.add(preview);
if (merchGrid) { 
  merchGrid.classList.add(preview);
}

if (grid) {
  const isHome = grid.dataset.preview === "true";
  const list = isHome ? products.slice(0, 5) : products;

  list.forEach((product) => {
    const tamanho =
      product.title.length <= 15
        ? "big-font"
        : product.title.length <= 25
          ? "med-font"
          : "small-font";

    grid.innerHTML += `
    <div class="card-product">
      <a href="produto.html?id=${product.id}">
        <img class="album-img" src="${product.img}" alt="${product.title}" />
        <div class="car-product-info">
          <h1 class = "${tamanho}">${product.title}</h1>
          <p>${product.artist}</p>
          <div>
            <p class="type">${product.type}</p>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
          </div>
        </div>
      </a>
    </div>
    `;
  });
}
if (merchGrid) {
  const isHome = grid.dataset.preview === "true";
  const list = isHome ? merchs.slice(0, 5) : merchs;

  list.forEach((merch) => {
    merchGrid.innerHTML += `
    <div class="card-product">
      <a href="merch.html?id=${merch.id}">
        <img class="album-img" src="${merch.img}" alt="${merch.title}" />
        <div class="car-product-info">
          <h1>${merch.title}</h1>
          <p>${merch.artist}</p>
          <div>
            <p class="type">${merch.type}</p>
            <p class="price">R$ ${merch.price.toFixed(2)}</p>
          </div>
        </div>
      </a>
    </div>
    `;
  });
}
