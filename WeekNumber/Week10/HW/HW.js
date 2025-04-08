var isOn = true; // Global variable
var name = "Yi Li";
var age = 18;
var favNumber = 3.1;
const numberCalculate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var calculateResult = 0;


function helloWorld() {
    console.log("My first JavaScript assignment");
    if (isOn == true) {
        document.getElementById("output").innerHTML = "I just modified this element with JavaScript";        
        // console.log("Console is saying Hi.");
        isOn = false;
    } else {
        document.getElementById("output").innerHTML = "Click the button to see the message.";
        // console.log("Console is saying Bye .");
        isOn = true;
    }
    alert("Hello, world!");
}

function variablePractice() {
    console.log("My name is " + name + ". I am " + age + " years old and my favorite number is " + favNumber + ".");
}

function calculate(operation) {
    var a = [Math.floor(Math.random() * numberCalculate.length)];
    var b = [Math.floor(Math.random() * numberCalculate.length)];
    if (operation === "add") {
        calculateResult = a + b;
    } else if (operation === "subtract") {
        calculateResult = a - b;
    } else if (operation === "multiply") {
        calculateResult = a * b;
    } else if (operation === "divide") {
        calculateResult = a / b;
    } 

    console.log(a + " " + b)
    console.log("Result: " + Math.floor(calculateResult));
}

function fahrenheitToCelsius (){
    var celsius = 0;
    let fahrenheit = document.getElementById("tempInputF").value;
    celsius = (fahrenheit - 32) * 5 / 9;
    alert("Fahrenheit: " + fahrenheit + " Celsius: " + Math.round(celsius));
}

function celsiusToFahrenheit (){
    var fahrenheit = 0;
    let celsius = document.getElementById("tempInputC").value;
    fahrenheit = (celsius * 9 / 5) + 32;
    alert("Celsius: " + celsius + " Fahrenheit: " + Math.round(fahrenheit));
}

function stringManipulation(words){
    var str = words;
    
}
