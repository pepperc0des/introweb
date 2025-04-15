# What is JSON?

JSON is a lightweight text format for storing and sharing data

- sends data from server -> client
- save structured data (like user profiles, settings, etc)

**Example JSON:**

```json
{
  "name": "Jane Doe",
  "age": 30,
  "isStudent": false
}
```

### JSON vs JavaScript Objects

| Feature            | JSON               | JavaScript Object       |
| ------------------ | ------------------ | ----------------------- |
| Quotes             | Double quotes only | Single or double quotes |
| Functions allowed? | ❌ No              | ✅ Yes                  |
| Comments?          | ❌ No              | ✅ Yes                  |
| Valid in JS?       | ✅ Yes (parsed)    | ✅ Yes                  |

---

### Common JSON Operations

### Parse JSON string → JavaScript object

```js
const jsonString = '{"name": "Jane"}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Jane"
```

### Convert JavaScript object → JSON string

```js
const obj = { name: "Jane" };
const jsonString = JSON.stringify(obj);
```

JSON can represent:

- **Objects**
- **Arrays**
- **Strings**, **numbers**, **booleans**, and **null**

**Example with an array of objects:**

```json
[
  {
    "name": "Hero One",
    "powers": ["Flying", "Strength"]
  },
  {
    "name": "Hero Two",
    "powers": ["Invisibility", "Speed"]
  }
]
```

Accessing data in JS

```js
heroes[0].powers[1]; // "Strength"
```
Similar to objects
