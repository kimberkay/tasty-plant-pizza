//Business Logic
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

PizzaOrder.prototype.addToppings = function() {
  let toppingsCost = this.toppings.length * 1.25;
  return toppingsCost;
}

PizzaOrder.prototype.pizzaCost = function() {
  let baseCost = 0;
  if (this.size === "medium") {
    baseCost = 24;
  } else if (this.size === "large") {
    baseCost = 29;
  } else {
  }
  return baseCost + this.addToppings();
};



    
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    const size = $("input:radio[name=prefer1]:checked").val();
    let toppings = [];
    $('input[name="chooseToppings"]:checked').each(function() {
        toppings.push(this.value);
    });

    let myPizza = new PizzaOrder (size, [toppings]);
    let price = PizzaOrder.pizzaCost();
    console.log(myPizza);



    
    
  
  });
});




   

   
