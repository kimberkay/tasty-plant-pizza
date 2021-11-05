//Business Logic

let testPizza = new Pizza ("medium",["pineapple, spinach"])

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.addPrice = function() {
  let price = 22
  if (this.size === "large") {
    price += 5
  } else {
  }
  console.log(price)
}

