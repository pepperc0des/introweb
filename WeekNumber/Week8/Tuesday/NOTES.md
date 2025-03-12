# Flex box, Media Queries, and Responsive Sites 

- all - Used for all media type devices
- print - Used for print preview mode
- screen - Used for computer screens, tablets, smart-phones, etc.

```css
@media not|only mediatype and (media feature) and (media feature) {
    CSS-Code;
}
```

- Flex Container - the parent (container) ```<div>``` element
- Flex Items - the items inside the container ```<div>```

### The CSS Flex Container

The CSS properties we use for the flex container are:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### The CSS flex-direction Property

The `flex-direction` property specifies the display-direction of flex items in the flex container.

The `flex-direction` property can have one of the following values:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

The `justify-content` property is used to align the flex items when they do not use all available space on the main-axis (horizontally).

The `justify-content` property can have one of the following values:

- `center`
- `flex-start`
- `flex-end`
- `space-around`
- `space-between`
- `space-evenly`

### The CSS align-items Property

The `align-items` property is used to align the flex items when they do not use all available space on the cross-axis (vertically).

The `align-items` property can have one of the following values:

- `center`
- `flex-start`
- `flex-end`
- `stretch`
- `baseline`
- `normal`