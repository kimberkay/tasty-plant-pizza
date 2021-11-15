# _Tasty Plant Pizza Co._

#### By _**Kim Brannian**_

#### _A website for the Tasty Plant Pizza Co.._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git_
* _GitHub repositories_

## Description

_A website that will allow users to order a basic plant-based pizza and add toppings of their choice._


## Test

  * describe PizzaOrder

  test('should correctly create a  object with size and toppings') 
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    expect(myPizza.size).toEqual("large");
    expect(myPizza.toppings).toEqual(["mushroom","olives"]); 
  


  test('should correctly return the updated cost')
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    expect(myPizza.pizzaCost()).toEqual(31.50);
  

  test('should correctly return toppings cost')
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    expect(myPizza.addToppings()).toEqual(2.50);
  

  test('should correctly return total pizza cost')
    const myPizza = new PizzaOrder("large", ["mushroom","olives"]);
    expect(myPizza.pizzaCost()).toEqual(31.50);
 

## Setup/Installation Requirements

* _Navigate to https://github.com/kimberkay/tasty.plant.pizza_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://    github.com/kimberkay/tasty-plant-pizza.com"_
* _Open the project with the code editor of your choice_



## Known Bugs

*_Pizza Order still needs to be displayed, cost is there now.

## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _11/05/2021_  Kim Brannian 
_