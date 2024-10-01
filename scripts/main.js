document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');
    const cartItems = document.querySelector('.cart-items');
    const loginForm = document.getElementById('login-form');
    const paymentForm = document.getElementById('payment-form');
    const checkoutButton = document.getElementById('checkout');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    let cart = [];

    // Sample product data
    const products = [
        { id: 1, name: 'Sweater', price: 25.00, stock: 5 },
        { id: 2, name: 'Jeans', price: 40.00, stock: 0 },
        { id: 3, name: 'Jacket', price: 60.00, stock: 10 }
    ];

    // Display products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.textContent = `${product.name} - $${product.price}`;
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.disabled = product.stock === 0;

        addToCartButton.addEventListener('click', () => addToCart(product));
        productDiv.appendChild(addToCartButton);
        productList.appendChild(productDiv);
    });

    // Add to Cart
    function addToCart(product) {
        if (product.stock > 0) {
            cart.push(product);
            product.stock--;
            updateCart();
        } else {
            alert('Item is out of stock');
        }
    }

    function updateCart() {
        cartItems.innerHTML = ''; // Clear current cart
        cart.forEach(item => {
            const cartDiv = document.createElement('div');
            cartDiv.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(cartDiv);
        });
    }

    // Login functionality
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin' && password === 'password') {
            alert('Login successful');
            document.getElementById('login-error').textContent = '';
        } else {
            document.getElementById('login-error').textContent = 'Invalid username or password';
        }
    });

    // Search functionality
    document.getElementById('search-button').addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ''; // Clear previous results

        products.forEach(product => {
            if (product.name.toLowerCase().includes(query)) {
                const resultDiv = document.createElement('div');
                resultDiv.textContent = `${product.name} - $${product.price}`;
                searchResults.appendChild(resultDiv);
            }
        });

        if (searchResults.innerHTML === '') {
            searchResults.innerHTML = '<p>No results found</p>';
        }
    });

    // Checkout functionality
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            document.getElementById('payment').style.display = 'block';
        } else {
            alert('Your cart is empty');
        }
    });

    // Payment functionality
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        // Simulate payment validation
        if (cardNumber && expiryDate && cvv) {
            alert('Payment successful');
            cart = []; // Clear cart
            updateCart();
            document.getElementById('payment').style.display = 'none';
        } else {
            document.getElementById('payment-error').textContent = 'Please fill out all fields correctly';
        }
    });
});
