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
