// Cache elements
const randomQuoteBtn = document.getElementById("random-quote-btn");
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const quoteForm = document.getElementById("quote-form");
const quoteInput = document.getElementById("quote-input");
const errorMessage = document.getElementById("error-message");

// Array of pre-existing quotes
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
];
