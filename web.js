const slideContainer = document.querySelector(".slide-container");
const productTableBody = document.getElementById("productTableBody");

const products = [
  { name: "Product 1", description: "Description 1", price: 100, quantity: 0 },
  { name: "Product 2", description: "Description 2", price: 150, quantity: 0 },
  { name: "Product 3", description: "Description 3", price: 200, quantity: 0 },
  { name: "Product 4", description: "Description 4", price: 120, quantity: 0 }
];

// Create product rows in the table
products.forEach((product, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${product.name}</td>
    <td>${product.description}</td>
    <td>$${product.price}</td>
    <td>${product.quantity}</td>
    <td>$<span id="total${index}">0.00</span></td>
    <td><button class="increase" data-index="${index}">+</button></td>
    <td><button class="decrease" data-index="${index}">-</button></td>
  `;
  productTableBody.appendChild(row);
});

const increaseButtons = document.querySelectorAll(".increase");
const decreaseButtons = document.querySelectorAll(".decrease");

increaseButtons.forEach(button => {
  button.addEventListener("click", () => {
    const index = button.getAttribute("data-index");
    products[index].quantity++;
    updateProductRow(index);
  });
});

decreaseButtons.forEach(button => {
  button.addEventListener("click", () => {
    const index = button.getAttribute("data-index");
    if (products[index].quantity > 0) {
      products[index].quantity--;
      updateProductRow(index);
    }
  });
});

function updateProductRow(index) {
  const totalElement = document.getElementById(`total${index}`);
  const quantityElement = document.querySelector(`#productTableBody tr:nth-child(${index + 1}) td:nth-child(4)`);
  
  const totalPrice = products[index].price * products[index].quantity;
  totalElement.textContent = totalPrice.toFixed(2);
  quantityElement.textContent = products[index].quantity;

  updateTotalDiscountedPrice();
}

function updateTotalDiscountedPrice() {
  const totalDiscountedPriceElement = document.getElementById("totalDiscountedPrice");
  const totalDiscountedPrice = products.reduce((total, product) => total + product.price * product.quantity, 0) * 0.9;
  totalDiscountedPriceElement.textContent = `$${totalDiscountedPrice.toFixed(2)}`;
}

// Auto-slide the images
let slideIndex = 0;

function showSlides() {
  slideIndex++;
  if (slideIndex > 3) {
    slideIndex = 0;
  }
  slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();
