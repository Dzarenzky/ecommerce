// Variabel global cartItems untuk menyimpan produk di keranjang
let cartItems = [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productName, price, imageUrl) {
    const productId = cartItems.length + 1; // Generate unique ID for the product
    const product = {
        id: productId,
        name: productName,
        price: price,
        quantity: 1,
        image: imageUrl
    };
    cartItems.push(product);
    updateCart(); // Panggil fungsi updateCart() setiap kali menambahkan produk ke keranjang
}


function updateCart() {
    const cartTableBody = document.getElementById('cart-items');
    cartTableBody.innerHTML = '';

    let cartSubtotal = 0;

    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        cartSubtotal += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#" onclick="removeFromCart(${item.id})"><i class="far fa-times-circle"></i></a></td>
            <td><img src="${item.image}" alt=""></td>
            <td>${item.name}</td>
            <td>Rp ${item.price}</td>
            <td><input type="number" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)"></td>
            <td>Rp ${subtotal}</td>
        `;

        cartTableBody.appendChild(row);
    });

    const cartSubtotalElement = document.getElementById('subtotal-amount');
    cartSubtotalElement.innerText = `Rp ${cartSubtotal}`;

    calculateTotal(cartSubtotal);
}

function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCart();
}


function updateQuantity(productId, quantity) {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        updateCart();
    }
}

// Fungsi untuk menghitung total dan memperbarui tampilan total di HTML
function calculateTotal(subtotal) {
    // Perform any additional calculations such as tax, shipping, etc. if needed
    const totalAmount = subtotal; // For now, the total amount is the same as the subtotal

    // Update the total amount in the HTML
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.innerText = `Rp ${totalAmount}`;
}

// Call updateCart() to initialize the cart when the page loads
updateCart();
