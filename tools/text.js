const inputText = document.getElementById("inputText");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

const uppercaseBtn = document.getElementById("uppercaseBtn");
const lowercaseBtn = document.getElementById("lowercaseBtn");
const capitalizeBtn = document.getElementById("capitalizeBtn");
const removeSpacesBtn = document.getElementById("removeSpacesBtn");
const copyTextBtn = document.getElementById("copyTextBtn");

// Update stats
function updateStats() {
  const text = inputText.value.trim();
  wordCount.textContent = text === "" ? 0 : text.split(/\s+/).length;
  charCount.textContent = text.length;
}

// Event listeners
inputText.addEventListener("input", updateStats);

uppercaseBtn.addEventListener("click", () => {
  inputText.value = inputText.value.toUpperCase();
  updateStats();
});

lowercaseBtn.addEventListener("click", () => {
  inputText.value = inputText.value.toLowerCase();
  updateStats();
});

capitalizeBtn.addEventListener("click", () => {
  inputText.value = inputText.value.replace(/\b\w/g, c => c.toUpperCase());
  updateStats();
});

removeSpacesBtn.addEventListener("click", () => {
  inputText.value = inputText.value.replace(/\s+/g, " ").trim();
  updateStats();
});

copyTextBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(inputText.value);
  alert("Text copied!");
});

// Initialize stats
updateStats();
