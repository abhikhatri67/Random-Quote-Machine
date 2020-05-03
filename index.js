var quotes = [];

const textElement = document.getElementById("text");
const authorElement = document.getElementById("author");

init();

/**
 *
 */
async function init() {
  quotes = await getQuotesAsync();
  generateQuote();
}

/**
 *
 */
function generateQuote() {
  textElement.textContent = quotes[getRandomInt(0, quotes.length - 1)].quote;
  authorElement.textContent =
    " - " + quotes[getRandomInt(0, quotes.length - 1)].author;
}

/**
 *
 */
async function getQuotesAsync() {
  let response = await fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  );
  let data = await response.json();
  return data.quotes;
}

/**
 *
 * @param {*} min
 * @param {*} max
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
