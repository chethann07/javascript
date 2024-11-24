function generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSpecialChars
) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*+=/-()";
  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowerCase : "";
  allowedChars += includeUppercase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSpecialChars ? specialChars : "";

  if (passwordLength <= 0) {
    return "The password must contain atleast one character!";
  }

  if (allowedChars.length === 0) {
    return "Atleast one set of character needs to be selected";
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 15;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSpecialChars = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSpecialChars
);

console.log(`Generated: ${password}`);
