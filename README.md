# Emoji-Fixer

This lightweight javascript library allows you to fix emojis that appear without any "color" because of bold 'font-weight' css property.

## Example of emoji fixing

An example of grayscaled emojis:

![Grayscales emojis example](assets/images/grayscale-emojis.jpg)

After the `emoji-fixer` library:

![Colored emojis example](assets/images/colored-emojis.jpg)

## How to use this library

You can have a look at the `examples` directory to see an example of using this library.

### Importing this library via CDN
Simply add the following code the bottom of your HTML body tag:

```html
<script src="https://cdn.jsdelivr.net/npm/emoji-fixer/dist/index.js"></script>
```

After that you can simply add the following line of code to fix all emojis for your `body` tag:

```html
<script type="module">
    // Import the emoji-fixer lib
    const fixEmojis = require('emoji-fixer').default;

    // Fixes all of the emojis for the entire document
    fixEmojis('body');
</script>
```