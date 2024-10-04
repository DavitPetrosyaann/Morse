const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function translateToMorse(text) {
  let morseTranslation = "";

  text
    .toUpperCase()
    .split("")
    .forEach((elm) => {
      if (morseCode[elm]) {
        morseTranslation += morseCode[elm] + " ";
      } else if (elm === " ") {
        morseTranslation += "    ";
      } else {
        morseTranslation += "? ";
      }
    });
  return morseTranslation.trim();
}

const input = document.getElementById("input");
const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", (e) => {
  e.preventDefault();
  text = translateToMorse(input.value);
  console.log(text);

  input.value = "";
  output.value = text;
});

//////////////////////////////////////////////////////////////////////
console.log(new Date().getHours() + ":" + new Date().getMinutes()); //
//////////////////////////////////////////////////////////////////////

// Create reverse lookup dictionary for Morse code to English
const englishCode = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function translateFromMorse(text) {
  let englishTranslation = "";

  text
    .trim()
    .split("     ")
    .forEach((word) => {
      word.split(" ").forEach((e) => {
        if (englishCode[e]) {
          englishTranslation += englishCode[e];
        } else {
          englishTranslation += "?";
        }
      });
      englishTranslation += " ";
    });

  return englishTranslation.trim();
}

document.addEventListener("DOMContentLoaded", function () {
  const inputFromMorse = document.querySelector('[data-id="1"]');
  const buttonFromMorse = document.querySelector('[data-id="2"]');
  const outputFromMorse = document.querySelector('[data-id="3"]');

  buttonFromMorse.addEventListener("click", (e) => {
    e.preventDefault();
    const text = translateFromMorse(inputFromMorse.value);
    console.log(text);

    inputFromMorse.value = "";
    outputFromMorse.value = text;
  });
});

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////copy/////////////////////////////////////////

const copyMorseButton = document.querySelector('[data-id="copyMorse"]');
copyMorseButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(output.value)
    .then(() => {})
    .catch((err) => {});
});
