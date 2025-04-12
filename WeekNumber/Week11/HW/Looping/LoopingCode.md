# Loops

- Loops are useful to run the same code over and over again

Example in Javascript that paints 100 random circles on a `<canvas>`:
``` JS
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}

btn.addEventListener("click", draw);
```
### The Part that actually draws the 100 Circles:
``` JS
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgb(255 0 0 / 50%)";
  ctx.arc(
    random(canvas.width),
    random(canvas.height),
    random(50),
    0,
    2 * Math.PI,
  );
  ctx.fill();
}
```

This code will run 100 times
- Each iteration will draw a circle in a random position on the canvas w/ `random(x)`
- Returns a whole number between `0` and `x-1`

The code will be the same if we want to make 1,000 or 10,000 circles. Only one number has to change: `i < 100`; instead of `100`.

Without a loop, we'd have to repeat the following code for every circle we want:
``` JS
ctx.beginPath();
ctx.fillStyle = "rgb(255 0 0 / 50%)";
ctx.arc(
  random(canvas.width),
  random(canvas.height),
  random(50),
  0,
  2 * Math.PI,
);
ctx.fill();
```

## Loops use Collections
- An `Array` is a type of collection that we use for an loop.
- Other types of collections include: `Set` and `Map`.


## for...of loop
- The `for...of` loop is the basic tool for looping through a collection of of items.
``` JS
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In this example, `for (const cat of cats)` says:

1. Given the collection `cats`, get the first item in the collection.
2. Assign it to the variable `cat` and then run the code between the curly braces `{}`.
3. Get the next item, and repeat (2) until you've reached the end of the collection.

## map() and filter():

- `map()` - to do something to each item in the collection and creating a new collection containing the changed item .
``` JS
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```
Here a function is passed into `cats.map()`, and `map()` calls the function once for each item in the array. Then adds the return value from each function call into a new array and finally returns the new array.
``` JS
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```
- `filter()` - can be used to test each item in the collection and create a new collection containing only the items that match.
``` JS
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```
The function we pass returns a `boolean`: if it is `true`, then the item is included in the new array. The function tests that any item that starts with the letter "L". The resulting array would only have cats whose name starts with "L"

#### `map()` and `filter()` are both often used with function expressions.
- Using function expressions, we could rewrite the example aboev to be more compact

``` JS
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

It's shorter :D

### Syntax for `for` loop:
``` JS
for (initializer; condition; final-expression) {
  // code to run
}
```
Inside the parentheses, we have three items separated by three semicolons:
1. An *initializer* - usually a variable set to a number that is incremented to counter the number of times the loop has run (counter variable)
2. A *condition* - defines when the loop stops, generally used with a comparison operator. Tests to see if the exit condition has been met
3. A *final-expression* - Runs each time the loop has gone through a full iteration. Usually serves to increment or decrement the counter variable (initialzer) so the condition is no longer `true`

## Calculating Squares
``` JS
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
```

This code caclulates squares for the numbers 1 to 9. The `for` loop performs the calculations

## Looping through collections with a for loop
``` JS
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

Above can be rewritten as:
``` JS
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```
you might start `i` at `1`, forgetting that the first array index is zero, not 1.
you might stop at `i <= cats.length`, forgetting that the last array index is at `length - 1`.


The output of the code below is very well-formed:
``` JS
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

```
My cats are called Pete, Biggles, Jasmine,
```

We want it like this: 
```
My cats are called Pete, Biggles, and Jasmine.
```
To do that, we do this:
``` JS
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

### Exiting loops with `Break`
- A `break` is used to exit a loop before it completes all the iteraiton

Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find? 
``` HTML
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

``` JS
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
```
1. First of all, we have some variable definitions — we have an array of contact information, with each item being a string containing a name and phone number separated by a colon.

2. Next, we attach an event listener to the button (btn) so that when it is pressed some code is run to perform the search and return the results.

3. We store the value entered into the text input in a variable called searchName, before then emptying the text input and focusing it again, ready for the next search. Note that we also run the toLowerCase() method on the string, so that searches will be case-insensitive.

4. Now on to the interesting part, the for...of loop:

> 1. Inside the loop, we first split the current contact at the colon character, and store the resulting two values in an array called splitContact.
 >2. We then use a conditional statement to test whether splitContact[0] (the contact's name, again lower-cased with toLowerCase()) is equal to the inputted searchName. If it is, we enter a string into the paragraph to report what the contact's number is, and use break to end the loop.
5. After the loop, we check whether we set a contact, and if not we set the paragraph text to "Contact not found.".

### Skipping Iterations with Continue
`continue` works similar to `break` but instead of exiting out the entire loop, it skips to the next iteration.

```HTML
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

``` JS
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
```

### while and do...while

A `while` loop syntax looks like:
``` JS
initializer
while (condition) {
  // code to run

  final-expression
}
```

Example:
``` JS
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

Syntax for `do...while`
``` JS
initializer
do {
  // code to run

  final-expression
} while (condition)
```
The main difference between a `do...while` loop and a `while` loop is that the code inside a `do...while` loop is always executed at least once. That's because the condition comes after the code inside the loop. So we always run that code, then check to see if we need to run it again. In `while` and `for` loops, the check comes first, so the code might never be executed.

Example:
``` JS
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

