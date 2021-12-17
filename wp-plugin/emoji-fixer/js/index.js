// Import the emoji-fixer lib async
import('https://cdn.jsdelivr.net/npm/emoji-fixer')
  .then((fixEmojisLib) => {
    let fixEmojis = fixEmojisLib.default;

    // Wait for the page to be fully loaded
    window.addEventListener('load', () => {
      fixEmojis('h1,h2,h3,h4,h5,h6,p');
    });
  })
  .catch((err) => {
    console.warn(`Failed to load emoji-fixer`);
  });
