const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");

const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Update length display
lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

// Generate password
function generatePassword() {
  let charset = "";
  if (uppercaseCheck.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercaseCheck.checked) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbersCheck.checked) charset += "0123456789";
  if (symbolsCheck.checked) charset += symbols;

  if (charset === "") {
    alert("Select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < lengthInput.value; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  passwordOutput.value = password;
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", () => {
  if (passwordOutput.value === "") return;
  navigator.clipboard.writeText(passwordOutput.value);
  alert("Password copied!");
});

// Generate initial password
generatePassword();
