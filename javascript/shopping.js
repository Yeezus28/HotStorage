let cart = [];

function addToCart(itemName, itemPrice, event) {
    const quantityInput = event.target.previousElementSibling;
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Check if the item is already in the cart
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

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
    });

    // Display the total
    const totalItem = document.createElement("li");
    totalItem.textContent = `Total: $${total.toFixed(2)}`;
    cartItemsContainer.appendChild(totalItem);

    // Toggle empty state class
    if (cart.length === 0) {
        cartItemsContainer.classList.add("empty");
    } else {
        cartItemsContainer.classList.remove("empty");
    }
}
