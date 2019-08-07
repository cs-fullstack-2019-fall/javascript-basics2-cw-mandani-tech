//### Question 1
//Create two variables. One should equal “My name is: “ and the other should equal your name. Print the two variables in one print message.
var myNameString = prompt("Enter my name here:  ");
var yourNameString =prompt("Enter Your Name here:  ");
alert("My name is :   " + myNameString + "   and  your name is :   " + yourNameString);


//### Question 2
// Ask the user “What is your balance”. Make sure to save that answer in a variable balance. Subtract 10 from that balance. Print "You lost $10. Your new balance is: [THE BALANCE]".
var userBalInt = parseInt(prompt("Please enter your balance here: "));
var newBalInt = userBalInt - 10;
alert("You lost $10 , your new balance is    " + "$"+ newBalInt);


//### Question 3
// Create a variable. Ask the user to “Enter your number grade”. Ask the user “Enter your extra credit". Print the grade plus extra credit.

var numGradeInt = parseInt(prompt("Please enter your number grade here: "));
var extCreInt = parseInt(prompt("Please enter your extra credits here: "));
alert ("Your Grade plus Extra credits is here:  " + (numGradeInt + extCreInt));

//### Question 4
// Create a variable called balance and save it after asking the user “What is your balance?”.
// Create a variable called deduction and save it when asking the user “How much do you want to deduct?”
// Print the remaining balance after subtracting the deduction.

var balanceInt = parseInt(prompt("What is your balance?  "));
var deductionInt =parseInt(prompt("How much do you want to decuct?  "));
alert(" Your remaining balance after deduction is  " + "$" + (balanceInt - deductionInt));