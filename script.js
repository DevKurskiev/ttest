const phrases = ["Фраза 1", "Фраза 2", "Фраза 3"];

const phraseText = document.getElementById("phraseText");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];
  phraseText.textContent = randomPhrase;
});
