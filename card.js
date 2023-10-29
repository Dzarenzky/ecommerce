function addToCart(productName, price) {
    const productId = cartItems.length + 1;
    const quantity = 1;
    cartItems.push({ id: productId, name: productName, price: price, quantity: quantity });
    updateCart();
}
