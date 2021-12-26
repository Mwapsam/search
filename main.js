const products = [
  {
    img: 'img/boots.jpg',
    title: 'Male Brown Boots',
    price: '$15',
  },
  {
    img: 'img/canvas.jpg',
    title: 'White Canvas',
    price: '$30',
  },
  {
    img: 'img/binoculas.jpg',
    title: 'Smart Binoculars',
    price: '$100',
  },
  {
    img: 'img/black-sneakers.jpg',
    title: 'Black Sneakers',
    price: '$23',
  },
  {
    img: 'img/clothes.jpg',
    title: 'Mix Clothes',
    price: '$132',
  },
  {
    img: 'img/headphones.jpg',
    title: 'White Headphones',
    price: '$76',
  },
  {
    img: 'img/jeans.jpg',
    title: 'Jeans',
    price: '$22',
  },
  {
    img: 'img/router.jpg',
    title: 'Router',
    price: '$43',
  },
  {
    img: 'img/seven-zero.jpg',
    title: 'Seven Zero T-shirt',
    price: '$30',
  },
  {
    img: 'img/sneakers.jpg',
    title: 'Cool Sneakers',
    price: '$37',
  },
  {
    img: 'img/tablet.jpg',
    title: 'Tablet',
    price: '$100',
  },
  {
    img: 'img/watch.jpg',
    title: 'Smart Watch',
    price: '$39',
  },
];

const items = document.getElementById('product');

function data() {
  products.forEach((product) => {
    items.innerHTML += `<div class="product">
    <img src="${product.img}" alt="" />
    <div class="productDetails">
      <h2>${product.title}</h2>
      <h3>${product.price}</h3>
    </div>
  </div>`;
  });
}
window.onload = data();
