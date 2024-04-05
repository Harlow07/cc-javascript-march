// INPUT
let price = prompt ("Type in the price of the items:");
price = Number(price);
// alert(typeof(price))

let moneyPaid = prompt ("Type in the money paid:");
moneyPaid = Number(moneyPaid);

// PROCESSING
let change = moneyPaid - price;

// OUTPUT
// If the price of the items is (price) and 
// the money paid is (moneyPaid) then
// the change is (change)
alert("If the price of the item is N" + price + " the money paid is N" +moneyPaid + 
", the change is N" + change);