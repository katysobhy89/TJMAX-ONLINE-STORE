// js/main.js
function addToCart(productId) {
    alert("Product " + productId + " added to cart!");
    // Logic to add product to session storage or database
}

function addToWishlist(productId) {
    alert("Product " + productId + " added to wishlist!");
    // Logic to add product to wishlist in database
}

function removeFromCart(productId) {
    alert("Product " + productId + " removed from cart!");
    // Logic to remove product from session storage or database
}

function updateQuantity(productId) {
    alert("Product " + productId + " quantity updated!");
    // Logic to update quantity in cart
}

function proceedToCheckout() {
    window.location.href = '../templates/checkout.html';
}

function processPayment(event) {
    event.preventDefault();
    alert("Payment processed successfully!");
    // Logic to process payment and clear the cart
}

function updateProfile(event) {
    event.preventDefault();
    alert("Profile updated successfully!");
    // Logic to update user profile in the database
}
