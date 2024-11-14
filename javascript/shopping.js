let cart = [];

function addToCart(itemName, itemPrice) {
    const quantityInput = event.target.previousElementSibling;
    const quantity = parseInt(quantityInput.value);

    // Check if item is already in cart
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: quantity });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(listItem);
    });
}
