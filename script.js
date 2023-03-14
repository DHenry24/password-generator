const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>/?';

const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numericEl = document.getElementById('numeric');
const specialEl = document.getElementById('special');

copyBtn.addEventListener('click', () => {
  passwordEl.select();

});

generateBtn.addEventListener('click', () => {
  const length = lengthEl.value;
  const includeLowercase = lowercaseEl.checked;
  const includeUppercase = uppercaseEl.checked;
  const includeNumeric = numericEl.checked;
  const includeSpecial = specialEl.checked;

  let chars = '';
  let password = '';

  if (includeLowercase) {
    chars += lowercaseChars;
    password += getRandomChar(lowercaseChars);
  }

  if (includeUppercase) {
    chars += uppercaseChars;
    password += getRandomChar(uppercaseChars);
  }

  if (includeNumeric) {
    chars += numericChars;
    password += getRandomChar(numericChars);
  }

  if (includeSpecial) {
    chars += specialChars;
    password += getRandomChar(specialChars);
  }

  for (let i = password.length; i < length; i++) {
    password += getRandomChar(chars);
  }

  passwordEl.value = password;
});

function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}
