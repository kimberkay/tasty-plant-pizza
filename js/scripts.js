//Business Logic

let testPizza = new Pizza("medium",["pineapple, spinach"]);

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 22;
}

Pizza.prototype.finalPrice = function() {
  if (this.size === "medium") {
    this.price += 0;
  } else if (this.size === "large") {
    this.price =+ 5;
  }
  return this.price;
};






/*Pizza.prototype.addPrice = function() {
  let price = 22
  if (this.size === "large") {
    price += 5
  } else {
  }
  console.log(price)
};
*/



