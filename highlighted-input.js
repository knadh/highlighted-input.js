export function highlightedInput(input, keywordMap) {
  // Create the wrapper and highlight layers
  const w = document.createElement("div");
  w.className = "highlighted-wrap";

  const h = document.createElement("div");
  h.className = "highlighted-layer";

  // Apply to DOM
  input.classList.add("highlighted-input");
  input.parentNode.insertBefore(w, input);
  w.appendChild(input);
  w.appendChild(h);

  const keywords = Object.keys(keywordMap);

  // HTML char escape map. Whitespace is mapped to a non-breaking space
  // to preserve multiple consecutive spaces
  const charMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    " ": "\u00A0",
    "\n": "<br>"
  };

  const syncScroll = () => {
    h.scrollLeft = input.scrollLeft;
    h.scrollTop = input.scrollTop;
  };

  const render = () => {
    const pattern = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")})`, "g");

    // Sanitize the input value.
    let val = input.value.replace(/[&<>\n ]/g, c => charMap[c]);

    // Apply highlighting.
    val = val.replace(pattern, (match) => {
      return `<span class="highlighted-term ${keywordMap[match]}">${match}</span>`;
    });

    // Update the highlight layer.
    h.innerHTML = val || "\u00A0";

    // Sync scroll positions.
    syncScroll();
  }

  // Attach event listeners.
  input.addEventListener("input", render);
  ["scroll", "select", "click", "keyup"].forEach(event => {
    input.addEventListener(event, syncScroll);
  });

  render();

  // Return the cleanup function.
  return {
    cleanup() {
      input.removeEventListener("input", render);
      ["scroll", "select", "click", "keyup"].forEach(event => {
        input.removeEventListener(event, syncScroll);
      });
    }
  };
}

export default highlightedInput;
