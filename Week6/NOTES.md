# Notes for Week 6

A CSS rule consists of a selector and a declaration block
- multiple declartion blocks are separated by semi-colons ( ; )

CSS Examples:

```CSS
<style>
  body {
    background-color: lightblue;
  }

  h1 {
    color: white;
    text-align: center;
  }

  p {
    font-family: verdana;
    font-size: 20px;
  }
</style>
```
```HTML
<html>
  <head>
    <style>
      p {
        text-align: center;
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Every paragraph will be affected by the style.</p>
    <p id="para1">Me too!</p>
    <p>And me!</p>
  </body>
</html>

```

Internal CSS can be used if one single HTML has a unique style
External CSS can change the look of an entire webstie by changing just one file


