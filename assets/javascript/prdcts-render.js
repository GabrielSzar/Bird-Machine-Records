import { products } from "./products.js";
import { merchs } from "./merchs.js";

const grid = document.querySelector(".grid-products");
const merchGrid = document.querySelector(".grid-merch");

if (grid) {
  const isHome = grid.dataset.preview === "true";
  const list = isHome ? products.slice(0, 5) : products;

  list.forEach((product) => {
    grid.innerHTML += `
    <div class="card-product">
      <a href="produto.html?id=${product.id}">
        <img class="album-img" src="${product.img}" alt="${product.title}" />
        <div class="car-product-info">
          <h1>${product.title}</h1>
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
      <a href="produto.html?id=${merch.id}">
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
