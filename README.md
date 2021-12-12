# Emoji-Fixer

This lightweight javascript library allows you to fix emojis that appear without any color (black and white) because of bold 'font-weight' css property.

This "bug" only takes affect on Windows operation systems.

## Example of emoji fixing

An example of grayscaled emojis:

![Grayscales emojis example](assets/images/grayscale-emojis.jpg)

After the `emoji-fixer` library:

![Colored emojis example](assets/images/colored-emojis.jpg)

## How to use this library

You can have a look at the `examples` directory to see an example of using this library.

### Using this library as a node_module (for webpack)

Simply install the library:

```bash
$ npm install emoji-fixer
```

After that you can simply add the following line of code to fix all emojis for your `body` tag:

```javascript
// Import the emoji-fixer lib
const fixEmojis = require('emoji-fixer').default;

// Fixes all of the emojis for the entire document
fixEmojis('body');
```

### Using this library in your HTML\Javascript directly

Method 1:

```javascript
// Import the emoji-fixer lib
import fixEmojis from 'https://cdn.jsdelivr.net/npm/emoji-fixer';

// Fixes all of the emojis for the entire document
fixEmojis('body');
```

Method 2:

```html
<script type="text/javascript">
    // Import the emoji-fixer lib async
    import('https://cdn.jsdelivr.net/npm/emoji-fixer').then(fixEmojis => {
        // Fixes all of the emojis for the entire document
        fixEmojis.default('body');
    });
</script>
```