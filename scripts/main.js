document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');
    const cartItems = document.querySelector('.cart-items');

    // Sample product data
    const products = [
        { id: 1, name: 'Sweater', price: 25.00 },
        { id: 2, name: 'Jeans', price: 40.00 },
        { id: 3, name: 'Jacket', price: 60.00 }
    ];

    // Display products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.textContent = `${product.name} - $${product.price}`;
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => addToCart(product));
        productDiv.appendChild(addToCartButton);
        productList.appendChild(productDiv);
    });

    // Add to Cart
    function addToCart(product) {
        const cartDiv = document.createElement('div');
        cartDiv.textContent = `${product.name} - $${product.price}`;
        cartItems.appendChild(cartDiv);
    }
});
