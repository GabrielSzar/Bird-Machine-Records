import { products } from "./products.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const product = products.find((p) => p.id === id);

if (product) {
  document.querySelectorAll(".disco-title").forEach((el) => {
    el.textContent = product.title;
  });
  document.querySelector(".disco-artist").textContent = product.artist;
  document.querySelector(".disco-price").textContent =
    `Price: R$ ${product.price.toFixed(2)}`;
  document.querySelector(".disco-type").textContent = product.type;
  document.querySelector(".disco-desc").innerHTML = product.description
    .split("\n\n")
    .map((paragrafo) => `<p>${paragrafo}</p>`)
    .join("");
  document.querySelector(".disco-tracklist").innerHTML = product.tracklist
    .map((faixa) => `<li>${faixa}</li>`)
    .join("");
  document.querySelector(".disco-img").src = product.img;
}
