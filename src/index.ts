const emojisRegex =
  /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;

// Add the styling required to fix emojis
const css = document.createElement('style');
css.innerHTML = `.fixed-emoji { font-weight: normal; }`;
document.head.appendChild(css);

export default function fixEmojis(selector: string) {
  // Go through all of the elements
  document.querySelectorAll(selector).forEach((tag) => {
    // Get the inner html for the emoji
    let html = tag.innerHTML;

    // Find all of the emojis
    const emojis = html.match(emojisRegex);

    // If emojis were found
    if (emojis) {
      // Go through each emoji, replace it with a span called 'fixed-emoji'
      for (let emoji of emojis) html = html.replace(emoji, `<span class="fixed-emoji">${emoji}</span>`);

      // Update the HTML
      tag.innerHTML = html;
    }
  });
}
