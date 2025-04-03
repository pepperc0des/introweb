# Notes

- `.innerHTML` – change the text between the opening and closing tags of an HTML element of our choosing.

```
document.getElementById("output").innerHTML = "I just changed the content of this div using JavaScript";
```

- `alert();` – displays a pop up window with the data we pass in to the ()

```
alert(“Hello World!”);
```

- `console.log();` – logs data to the javascript console (we can access this with Google Developer Tools or Firebug)

```
console.log(“this is my first console log!”);
```

### When to Use `var`, `let`, or `const`?

1. Always declare variables

2. Always use `const` if the value should not be changed

3. Always use `const` if the type should not be changed (Arrays and Objects)

4. Only use `let` if you can't use `const`

5. Only use `var` if you MUST support old browsers.

## JavaScript `const`

- Variables defined with `const` cannot be Redeclared

- Variables defined with `const` cannot be Reassigned

- Variables defined with `const` have Block Scope

```js
// JavaScript const variables must be assigned a value when they are declared:
const PI = 3.14159265359;

// NOT
const PI;
PI = 3.14159265359;
```