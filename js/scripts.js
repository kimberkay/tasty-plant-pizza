//Business Logic


function Pizza(size, [toppings]) {
  this.size = size;
  this.toppings = [];
  this.price = 24;
};

Pizza.prototype.pizzaCost = function() {
  if (this.size === "large") {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 0;
  } 
  return this.price
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

    const size = $("input:radio[name=choose-size]:checked").val(); 
    let exampleToppings = $("input:checkbox[name=chooseToppings]:checked").each(function() {
      let topping = $(this).val();
      toppingsArray.push(topping);
      console.log(toppingsArray)
  });
  
    
    
    
    