//Business Logic

let testPizza = new Pizza("medium",["pineapple, spinach"]);
let testPizza2= new Pizza("large",["peppers"]);

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [toppings];
  this.price = 22;
}

Pizza.prototype.pizzaCost = function() {
  if (this.size === "medium") {
    this.price += 0;
  } else if (this.size === "large") {
    this.price += 5;
  }
  return this.price;
};


//UI Logic for radio button toppings



//UI Logic for figuring out checkboxes

/*$(document).ready(function() {
  $('form#language').submit(function(event) {
    event.preventDefault();
    
    const size = $("input:radio[choose-size]:checked").val();
    const toppings = $("input:checkbox[choose-toppings]:checked").val();
  
    When I can get checked toppings into an array, I believe I would use (array.length +1) to get the additional cost for toppings @ $1 each
  }
  }
  ); -*/





