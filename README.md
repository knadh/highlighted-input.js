# highlighted-input.js


highlighted-input.js is a super tiny, zero dependency Javascript lib that highlights specific keywords and tags in an <code>&lt;input&gt;</code> field. It is ideal for search inputs to highlight field selectors as the user types. It is ~450 bytes minified+gzipped.

[**View demo**](https://knadh.github.io/highlighted-input.js)

[![demo](https://github.com/user-attachments/assets/d26afc80-4f4e-4782-b701-138c8ed76026)](https://knadh.github.io/highlighted-input.js)


## Usage

### Node
```shell
npm install @knadh/highlighted-input
```

```javascript
import { highlightedInput } from @knadh/highlighted-input;

// Initialize the highlighter with the input element and keyword map
const input = document.getElementById("input");

// .highlighted-h1 and .highlighted-h2 highlight classes.
const h1 = "highlighted-h1";
const h2 = "highlighted-h2";

// Map of keywords to highlight and the corresponding classnames.
// Copy styles from style.css and add it to the webpage. 
const keywordMap = {
    "lang:": h1, 
    "repo:": h1, 
    "user:": h1, 
    "AND": h2,
    "OR": h2,
    "NOT": h2,
};

highlightedInput(input, keywordMap);
```

Copy the [CSS](https://github.com/knadh/highlighted-input.js/blob/master/style.css), customize it as required, and add it to the webpage.


Check the [demo source](https://github.com/knadh/highlighted-input.js/blob/master/docs/index.html) for a full example.

### ES6 module
Check the [demo source](https://github.com/knadh/highlighted-input.js/blob/master/docs/index.html) to use the lib in `<script>` directly in an HTML page.

Licensed under the MIT License.
