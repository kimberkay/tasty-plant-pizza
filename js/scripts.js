//Business Logic

let testPizza = new Pizza ("medium",["pineapple"])

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.size = function() {
  let price = 0;
  if (this.size === "medium") {
    return price + 22; 
  } else if (this.size === "large") {
    return price + 25;
  }
}