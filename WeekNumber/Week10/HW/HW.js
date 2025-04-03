var isOn = true; // Global variable
var name = "Yi Li";
var age = 18;
var favNumber = 3.1;

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

function calculate(a, b) {

    let c = a + b;
    let d = a - b;
    let e = a * b;
    let f = a / b;

}



