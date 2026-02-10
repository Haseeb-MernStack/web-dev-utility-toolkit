const colorInput = document.getElementById("colorInput");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyHexBtn = document.getElementById("copyHex");
const copyRgbBtn = document.getElementById("copyRgb");
const paletteDiv = document.getElementById("palette");

// Convert hex to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

// Update values and palette
function updateColor(color) {
  hexValue.textContent = color;
  rgbValue.textContent = hexToRgb(color);
  generatePalette(color);
}

// Generate simple palette (lighter/darker)
function generatePalette(color) {
  paletteDiv.innerHTML = "";
  for (let i = -3; i <= 3; i++) {
    let shade = shadeColor(color, i * 15);
    let div = document.createElement("div");
    div.style.backgroundColor = shade;
    div.className = "palette-color";
    div.title = shade;
    div.addEventListener("click", () => {
      navigator.clipboard.writeText(shade);
      alert(`Copied ${shade}`);
    });
    paletteDiv.appendChild(div);
  }
}

// Shade color utility
function shadeColor(color, percent) {
  let f=parseInt(color.slice(1),16),
      t=percent<0?0:255,
      p=Math.abs(percent)/100,
      R=f>>16,
      G=f>>8&0x00FF,
      B=f&0x0000FF;
  return "#" + (0x1000000 + (Math.round((t-R)*p)+R)*0x10000 + (Math.round((t-G)*p)+G)*0x100 + (Math.round((t-B)*p)+B)).toString(16).slice(1);
}

// Event listeners
colorInput.addEventListener("input", (e) => updateColor(e.target.value));
copyHexBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.textContent);
  alert("HEX copied!");
});
copyRgbBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbValue.textContent);
  alert("RGB copied!");
});

// Initialize
updateColor(colorInput.value);
