//JavaScript Funtion to Add Two Numbers using prompt and alert boxes
var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Addition: Enter first number:"));
var number2 = parseInt(prompt("Addition: Enter second number:"));
var result = add(number1, number2);
alert(result);

//JavaScript Function to multiply Two Numbers using prompt and alert boxes
var multiply = function(num1, num2) {
  return num1 * num2;
};

var num1 = parseInt(prompt("Multiplication: First Number"));
var num2 = parseInt(prompt("Multiplication: Second Number "));
var result = multiply(num1, num2);
alert (result);


//JavaScript Function to divide Two Numbers using prompt and alert boxes
var divide = function(fnumber, snumber) {
  return fnumber / snumber;
  
};
var fnumber = parseInt(prompt ("Division: First Number: "));
var snumber = parseInt(prompt("Division: Second Number:"));
var result = divide(fnumber, snumber);
alert (result);


//JavaScript Function to Subtract two number using Prompt and Alert Boxes
var sub = function(firstno, secondno){
  return firstno - secondno;

};
var firstno = parseInt(prompt("Subtraction: First Number:"));
var secondno = parseInt(prompt("Subtraction: Second Number:"));
var result = sub(firstno, secondno);
alert(result);


//Calculating BMI Index using two Arguments (Weight in Kgs and height in mtrs) 
var calculatebmi =function(weight, height) {
  return weight / height;
}

var weight = parseFloat(prompt("Kindly provide weight in Kgs to calculate BMI"));
var height = parseFloat(prompt("Kindly provide height to calculate BMI"));
var result = calculatebmi(weight, height);
alert (result);


//Conversion of temperatures from Degrees Celcius to Fahrenheit
var fahrenConversion = function(celcius) {
  return (celcius * 1.8)+32;
};

var celcius = parseFloat(prompt("Kindly provide temperature in Degrees Celcius"));
var result = fahrenConversion(celcius);
alert(result + " °F");