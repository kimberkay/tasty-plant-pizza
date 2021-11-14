//Business Logic
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

PizzaOrder.prototype.addToppings = function() {
  let toppingsCost = (this.toppings.length * 1.25);
  return toppingsCost;
};

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

//UI Logic


    
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $('input:radio[name="choose-size"]:checked').val();
    let toppingsChoice = [];
    $('input[name="chooseToppings"]:checked').each(function() {
        toppingsChoice.push(this.value);
     let newPizzaOrder = new PizzaOrder(pizzaSize, toppingsChoice);

     
        $("show-pizza").show(newPizzaOrder);
        $(".pizza-cost").html(PizzaOrder.pizzaCost);
      


     
  
    console.log(newPizzaOrder);
    
    });
    
  });
});




   

   
