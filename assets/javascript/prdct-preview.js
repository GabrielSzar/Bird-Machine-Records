const products = [
  {
    id: 1,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 2,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 3,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 4,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 5,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 6,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 7,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 8,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 9,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 10,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 11,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 12,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 13,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 14,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 15,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 16,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 17,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 18,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 18,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
  {
    id: 20,
    title: "The Single",
    artist: "Children of The Corn",
    price: 359.99,
    type: "Vinil LP (Colored)",
    img: "/assets/img/childrenofthecornMain600x.png",
  },
];

const grid = document.querySelector(".grid-products");
products.forEach((product) => {
  grid.innerHTML += `
  <div class="card-product">
    <a href="disco.html">
      <img class="album-img" src="${product.img}" alt="{product.title}" />
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

// products.forEach((product) => {
//   grid.innerHTML += `
//   <div class="card-product">
//     <a href="disco.html">
//       <img class="album-img" src="${product.img}" alt="{product.title}" />
//       <div class="car-product-info">
//         <h1>${product.title}</h1>
//         <p>${product.artist}</p>
//         <div>
//           <p class="type">${product.type}</p>
//           <p class="price">R$ ${product.price.toFixed(2)}</p>
//         </div>
//       </div>
//     </a>
//   </div>
//   `;
// });
