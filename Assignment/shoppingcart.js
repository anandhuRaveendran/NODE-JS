const shoppingCart = new Map();
shoppingCart.set("Apple", 2);
shoppingCart.set("Banana", 3);
shoppingCart.set("Milk", 1);

const prices = { "Apple": 0.80, "Banana": 0.50, "Milk": 2.50 }
let totalCost = 0;
console.log(shoppingCart)
console.log(prices)
shoppingCart.forEach((value, key) => {
    console.log(key, prices[key] * value)
    totalCost += prices[key] * value
}
)
console.log("Total Cost = ", totalCost.toFixed(2))
let productsMap = new Map();

let cart = new Map();

const itemPrices = {
    "Apple": 100,
    "Orange": 50,
    "Pineapple": 70,
    "Grape": 200,
    "Watermelon": 30
};

function addToCart() {
    const selectedItem = document.getElementById("items").value;
    const selectedQuantity = parseInt(document.getElementById("quantityInput").value);
    const selectedPrice = itemPrices[selectedItem]; // Fetch price from the itemPrices object

    if (!isNaN(selectedQuantity) && selectedQuantity > 0) {
        if (cart.has(selectedItem)) {
            cart.set(selectedItem, { price: selectedPrice, quantity: cart.get(selectedItem).quantity + selectedQuantity });
        } else {
            cart.set(selectedItem, { price: selectedPrice, quantity: selectedQuantity });
        }
        updateCart();
        calculateTotalPrice();
    } else {
        alert("Please enter a valid quantity.");
    }
}

function updateCart() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
        </tr>`;
    cart.forEach((value, key) => {
        const total = value.price * value.quantity;
        cartElement.innerHTML += `
            <tr>
                <td>${key}</td>
                <td>${value.price.toFixed(2)}</td>
                <td>${value.quantity}</td>
                <td>${total.toFixed(2)}</td>
            </tr>`;
    });
}

function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach((value, key) => {
        totalPrice += value.price * value.quantity;
    });
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}