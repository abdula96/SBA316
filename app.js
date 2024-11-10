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

// Event listeners
randomQuoteBtn.addEventListener("click", displayRandomQuote);
quoteForm.addEventListener("submit", addCustomQuote);

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Modify content dynamically
  quoteText.innerHTML = `"${randomQuote.text}"`;
  authorText.innerHTML = `- ${randomQuote.author}`;
}

// Function to add a custom quote
function addCustomQuote(event) {
  event.preventDefault();

  const customQuote = quoteInput.value.trim();

  // Validate input (HTML5 validation + JavaScript check)
  if (customQuote === "") {
    errorMessage.textContent = "Please enter a valid quote.";
    return;
  }

  // Clear error message if input is valid
  errorMessage.textContent = "";

  // Add custom quote to the array and display it
  quotes.push({ text: customQuote, author: "Anonymous" });

  // Clear input field after submission
  quoteInput.value = "";

  // Optionally, display the newly added quote immediately
  quoteText.innerHTML = `"${customQuote}"`;
  authorText.innerHTML = "- Anonymous";
}
