let x = 12;
let name = "Yi Li"
let age = "18";
let coding = true;
var isOn = true;

document.getElementById('info').innerHTML = "My name is " + name + ". I am " + age + " years old and I can code Javascript: " + coding;;
document.getElementById('demo').innerHTML = x + " is a number.";

function sumValues(a, b) {
    let c = a + b;
    alert("The value of z is " + c + ".");
}

function switchOff(){
    if(isOn == true) {
        alert("The light is on.");
        isOn = false;
    } else {
        alert("The light is  off.");
        isOn = true;
    }
}

function showConsole() {
    if (isOn == true) {
        document.getElementById('console').innerHTML = "Hello!";
        console.log("Console is saying Hi.");
        isOn = false;
    } else {
        document.getElementById('console').innerHTML = "Goodbye!";
        console.log("Console is saying Bye .");
        isOn = true;
    }
}