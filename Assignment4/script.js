const products = {
    mobiles: [
        { id: 1, name: "OnePlus 13R", price: 49998, img: "https://m.media-amazon.com/images/I/418LdXdjiML._SX300_SY300_QL70_FMwebp_.jpg" },
        { id: 2, name: "Samsung Galaxy S25", price: 141199, img: "https://m.media-amazon.com/images/I/414pLp0PVCL._SX300_SY300_QL70_FMwebp_.jpg" },
        { id: 3, name: "Realme GT 6T 5G", price: 28998, img: "https://m.media-amazon.com/images/I/61HyiMlCuTL._SX522_.jpg" },
        { id: 4, name: "iQOO Z9 Lite 5G", price: 10499, img: "https://m.media-amazon.com/images/I/410W-fBOP2L._SX300_SY300_QL70_FMwebp_.jpg" }
    ],
    laptops: [
        { id: 5, name: "ASUS Vivobook 16", price: 53990, img: "https://m.media-amazon.com/images/I/61fsBFww9DL._AC_UL480_FMwebp_QL65_.jpg" },
        { id: 6, name: "Dell XPS 15", price: 89999, img: "https://m.media-amazon.com/images/I/41IMroAyzVL._SX300_SY300_QL70_FMwebp_.jpg" },
        { id: 7, name: "HP 15s", price: 44522, img: "https://m.media-amazon.com/images/I/71n4BPDmUNL._AC_UL480_FMwebp_QL65_.jpg" },
        { id: 8, name: "Acer Aspire Lite", price: 50990, img: "https://m.media-amazon.com/images/I/81JjrVwWSgL._AC_UL480_FMwebp_QL65_.jpg" }
    ],
    accessories: [
        { id: 9, name: "AirPods Pro", price: 24999, img: "https://m.media-amazon.com/images/G/31/img22/gamingacc/sbc/HEADSETS._CB581984226_.png" },
        { id: 10, name: "Gamepad", price: 34999, img: "https://m.media-amazon.com/images/G/31/img22/gamingacc/sbc/GAMEPAD._CB581984226_.png" }
    ]
};

// Load products into categories
function loadProducts() {
    Object.keys(products).forEach(category => {
        let container = document.getElementById(category).querySelector('.products');
        products[category].forEach(product => {
            container.innerHTML += `
                <div class="product">
                    <img src="${product.img}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>₹${product.price.toLocaleString()}</p>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.img}')">Add to Cart</button>
                </div>
            `;
        });
    });
}

let cart = [];

// Add to cart function
function addToCart(id, name, price, img) {
    let item = cart.find(item => item.id === id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, img, quantity: 1 });
    }
    updateCart();
}

// Update cart details
function updateCart() {
    let cartItemsContainer = document.getElementById("cart-items");
    let totalPrice = 0;
    let totalItems = 0;

    cartItemsContainer.innerHTML = cart.length === 0 ? "<p>Cart is empty</p>" : "";

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        totalItems += item.quantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" width="50">
                <span>${item.name}</span>
                <div class="quantity">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <span>₹${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `;
    });

    document.getElementById("total-price").innerText = totalPrice.toLocaleString();
    document.getElementById("cart-count").innerText = totalItems;
}

// Change item quantity
function changeQuantity(id, delta) {
    let item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCart();
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your purchase!");
    clearCart();
}

// Toggle cart sliding
function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}

// Touch event for mobile devices
function handleTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    if (this.touchStartX - touchEndX > 50) {
        // Swipe left
        document.getElementById("cart").classList.remove("active");
    } else if (touchEndX - this.touchStartX > 50) {
        // Swipe right
        document.getElementById("cart").classList.add("active");
    }
}

// Add touch event listeners
document.getElementById("cart").addEventListener("touchstart", handleTouchStart);
document.getElementById("cart").addEventListener("touchend", handleTouchEnd);

// Load products when page loads
loadProducts();
