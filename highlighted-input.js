export function highlightedInput(input, keywordMap) {
  // Create the wrapper and highlight layers.
  const w = document.createElement("div");
  w.className = "highlighted-wrap";

  const h = document.createElement("div");
  h.className = "highlighted-layer";

  // Apply to DOM.      
  input.className += " highlighted-input";
  input.parentNode.insertBefore(w, input);
  w.appendChild(input);
  w.appendChild(h);

  const keywords = Object.keys(keywordMap);

  // HTML char escape map. Whitespace is mapped to a non-breaking space
  // to prevent the browser from collapsing multiple spaces in the highlight layer.
  const charMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", " ": "\u00A0" };

  function render() {
    const pattern = new RegExp(`(${keywords.join("|")})`, "g");
    
    // Sanitize the input.
    const val = input.value.replace(/[&<>]/g, c => charMap[c]);

    // Apply highlighting.
    const out = val.replace(pattern, (match) => {
      return `<span class="highlighted-term ${keywordMap[match]}">${match}</span>`;
    });
    
    h.innerHTML = out || "\u00A0";
  }

  input.addEventListener("input", render);
  render();
}

export default highlightedInput;
