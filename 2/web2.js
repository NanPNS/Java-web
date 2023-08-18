const increaseButtons = document.querySelectorAll(".increase");
const decreaseButtons = document.querySelectorAll(".decrease");
const totalPriceElement = document.getElementById("totalPrice");
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

autoSlide();
let totalPrice = 0;

increaseButtons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const price = parseFloat(product.querySelector("p").textContent.slice(7));
    totalPrice += price;
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  });
});

decreaseButtons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const price = parseFloat(product.querySelector("p").textContent.slice(7));
    if (totalPrice >= price) {
      totalPrice -= price;
      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
  });
});

const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
let slideIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.style.display = "none");
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

autoSlide();

