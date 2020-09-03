const tax = .09;
var product;
var quantity;
var price;

product=prompt("Enter product: ");
quantity=prompt("Enter the amount: ");
price=prompt("Enter the price: ");

let cost = quantity * price
pricetax = (quantity*price)*tax;
final = Number(cost) + Number(pricetax);

console.log("Product: " + product + "\nQuantity: " + quantity + "\nPrice: " + price + "\nCost: " + cost + "\nTax: " + pricetax + "\nTotal: " + final);