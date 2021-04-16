// Target <ul> for guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
// Button with 'Guess!'-text
const guessButton = document.querySelector(".guess");
// Input field for letter
const textInput = document.querySelector(".letter");
// Empty <p> for word in progress
const wordInProgress = document.querySelector(".word-in-progress");
// <p> for displaying remaining guesses
const remainingGuesses = document.querySelector(".remaining");
// <span> inside remaining <p>
const diplayRemaining = document.querySelector(".remaining > span");
// The empty paragraph where messages will appear when the player guesses a letter
const messages = document.querySelector(".message");
// The hidden button that will appear prompting the player to play again
const playAgainButton = document.querySelector(".play-again");
// console.log(playAgainButton);

const word = "magnolia";

const placeholderTxt = function () {
  const placeholders = [];
  word.split("").forEach(function (letter) {
    placeholders.push(".");
  });
  wordInProgress.textContent = placeholders.join("");
};

placeholderTxt(word);

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  let inputValue = textInput.value;
  console.log(inputValue);
  inputValue = "";
});
