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

  * _Describe: Pizza ()
    Test: It will create a Pizza constructor with properties for size and toppings
    Code: function Pizza(size, toppings){
          this.size = size;
          this.toppings = toppings;
          }
    Expected Output: Pizza{"medium",["spinach","pineapple"]}

    Describe: Pizza.prototype.cost ()
    Test: It will create a Pizza.prototype for the cost of pizza.
    Code: Pizza.prototype.cost = function() {
          let price = 22;
          let extraToppings = 0;

          if (this.size === "large" {
            price =+ 5    
          } 
          return price;
    }

  * _Describe: Player()
    Test: It will create Player {}
    Code: Player()
    Expected Output: {turnTotal: 0, scoreTotal: 0}

    Test: It will use diceRoll() roll and add it to turnTotal
    Code: player.roll(5)
    Expected Output: {turnTotal: 5, scoreTotal: 0}

    Test: It will take turnTotal and it to scoreTotal and put turnTotal to 0
    Code: player.hold()
    Expected Output: {turnTotal:0, scoreTotal: 5}

    Test: It will make turnTotal to 0 if it receives 1
    Code: player.roll(1)
    Expected Output: {turnTotal: 0, scoreTotal: 5}    

  * _Describe: winCheck(playerOne, PlayerTwo)
  g 
    Test: It will determine whether either player has turnTotal + scoreTotal: >= 100
    Code: winCheck(playerOne, playerTwo)
    Expected Output: playerOne, playerTwo, or false

## Setup/Installation Requirements

* _Navigate to https://github.com/Christinamawel/Pig-Dice_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/Christinamawel/Pig-Dice.git"_
* _After cloning the project, navigate into it using the command "cd Pig-Dice"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

* _No known bugs_

## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Christy Welch, Katie Pundt, and Kim 
_