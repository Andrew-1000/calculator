var enoughSleep = false;
if (enoughSleep){
  alert("I'm ready to go!");

}else {
  alert("I need a nap");
}

//If statement on temperature
var temperature = 40;
if (temperature < 20){
  alert("Dont forget a jacket!")

}else {
  alert("Keep cool today");
}

//If Else If statement on temperature decision

var temperature = 40;
if (temperature < 50) {
  alert("Dont forget Jacket");
} else if (temperature<25) {
  alert ("Have a nice day : ");
} else {
  alert("Be cool!");
}


//More practise on else If Statements

var temperature = -6;
if (temperature <= 0) {
  alert("Brrr! Dont freeze out there");
} else if (temperature <15) {
  alert ("Dont Forget a jacket");
} else if (temperature < 25) {
  alert ("Have a nice day :)");
} else {
  alert ("keep cool today!");
}

//To calculate modulo
var checkEven = function(valuex, valuey){
  return valuex % valuey;

}
var valuex = parseFloat(prompt("Modulo: Enter First Number"));
var valuey = parseFloat(prompt("Modulo: Enter Second Number"));
var result = checkEven(valuex, valuey);
alert(result);



//To check if number is even or not

var  checkEven = function(valuew) {
  return  valuew / 2;

  
}
var valuew = parseInt(prompt("Provide the number: "));
var output = checkEven (valuew);
if (output = 0) {
  alert ("The value is an even number");
}else {
  alert ("The value is an odd number");
}


//Logical Operators to practice on && and || symbols
//&& -  Both things must be true
//|| - Either of these things may be true

var temperature = 30;
var raining = true;
if (temperature < 0) {
  alert("Brr! Dont freeze out there!" );
} else if (temperature < 15 || raining === true) {
  alert("Dont forget a jacket!");
} else if (temperature < 25) {
  alert ("Have a nice day");
} else {
  alert("Keep cool today")
}

var variable = "I'm a variable!";
var things = [variable, "I'm not a variable"];
things;



