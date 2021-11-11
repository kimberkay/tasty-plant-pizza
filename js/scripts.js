//Business Logic


function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 24;
};

Pizza.prototype.pizzaCost = function() {
  if (this.size === "large") {
    this.price += 5;
  } else { 
  }

  if (this.toppings === "yes") {
    this.price +=5;
  } else {
    }
  return this.price;
};



//UI Logic for radio button toppings
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    let testPizza = new Pizza("medium","yes");
    let testPizza2 = new Pizza("large","yes");
    let testPizza3 = new Pizza("large","no");
    console.log(testPizza.pizzaCost());
    console.log(testPizza2);
    console.log(testPizza);
    console.log(testPizza3);
    
    let exampleToppings = $("input:checkbox[name=toppingsInput]:checked").each(function() {
      let topping = $(this).val();
      toppingsArray.push(topping);
      console.log(toppingsArray)
      });
   // function showPizzaOrder();
    const size = $("input:radio[name=choose-size]:checked").val();
    const toppings = $("input:radio[name=toppings]:checked").val();
   
    $("input#topping1").val("");
    $("input#topping2").val("");
    $("input#topping3").val("");
  
  });
});




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





