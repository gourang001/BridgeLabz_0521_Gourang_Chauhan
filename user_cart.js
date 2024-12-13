var prompt = require('prompt-sync')();
const items = [
    { name: "Apple", price: 150 },
    { name: "Banana", price: 50 },
    { name: "Orange", price: 120 },
    { name: "Milk", price: 60 },
    { name: "Bread", price: 25 },
    { name: "Orange", price: 40 },
    { name: "Cheese", price: 150 }
];
function total(acc,items){
    return acc+items.price;
}

const sum=items.reduce(total,0);
console.log(`total price of items are:  ${sum}`);

let removeItem=prompt(`enter the item that you wanted to remove: `);

function removeItemByName(items, itemName) {
    return items.filter(item => item.name !== itemName); 
}

const newCart = removeItemByName(items, removeItem);
// console.log(`items in new carts are ${newCart}`);
// console.log(`Items in the new cart: ${items}`);
newCart.forEach(item => {
    console.log(`${item.name}: ${item.price}`);
});