//Business Logic

let testPizza = new Pizza("medium",["pineapple, spinach"]);

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  let price = 22;
  let extraToppings = 0;

  if (this.size === "large") {
    return price += 5;
  } else { 
    return price
  }
  console.log(Pizza.cost)
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



