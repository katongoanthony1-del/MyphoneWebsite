let cart = [];
let currentProduct = {};

window.onload = () => {
    document.getElementById("loader").style.display = "none";
};

function addToCart(name, price) {
    cart.push({ name, price });
    document.getElementById("cart-count").innerText = cart.length;
}

function openPopup(name, price, img) {
    currentProduct = { name, price };
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-img").src = img;
    document.getElementById("popup-name").innerText = name;
    document.getElementById("popup-price").innerText = "K" + price;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function addToCartFromPopup() {
    addToCart(currentProduct.name, currentProduct.price);
    closePopup();
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let total = 0;
    let message = "Hello, I want to order:\n";

    cart.forEach(item => {
        message += `- ${item.name} (K${item.price})\n`;
        total += Number(item.price);
    });

    message += `\nTotal: K${total}`;

    let number = "26097XXXXXXX";
    let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function filterProducts(category) {
    let items = document.querySelectorAll(".product");

    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else {
            item.style.display = item.classList.contains(category) ? "block" : "none";
        }
    });
}

const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {
        let value = this.value.toLowerCase();
        let products = document.querySelectorAll(".product");

        products.forEach(product => {
            let name = product.innerText.toLowerCase();
            product.style.display = name.includes(value) ? "block" : "none";
        });
    });
}

const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});

let images = [
    "images/iphone.jpg",
    "images/samsung.jpg",
    "images/shoes.jpg"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
}, 3000);