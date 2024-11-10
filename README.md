# SBA316

Random Quote Generator

Overview

The Random Quote Generator is a simple, interactive web application that allows users to view inspirational quotes, generate a random quote on demand, and add their own custom quotes. The app is styled with a light blue background and features a responsive design for both desktop and mobile views.

Key Features:
Display a random inspirational quote when a button is clicked.
Allow users to submit their own custom quotes.
Show quotes dynamically with changes in background colors and text styles for better user engagement.
HTML5 and JavaScript form validation.
Light blue background with a colorful and engaging design.
Requirements

This project fulfills the following technical requirements:

DOM manipulation: Caching elements using getElementById and querySelector, modifying HTML content dynamically.
Event listeners: Registering two event listeners (one for button clicks and one for form submission).
CSS: Creating a visually appealing layout with a light blue background and interactive elements.
Form validation: Both HTML5 built-in validation and JavaScript validation are implemented.
Responsive design: The layout adapts to mobile screens, ensuring a good user experience on all devices.
Installation

To use the Random Quote Generator, follow the instructions below:

Clone the repository or download the ZIP file:
git clone https://github.com/yourusername/random-quote-generator.git
Open the project folder in your code editor.
Open index.html in your browser: Simply open the index.html file in a modern browser to view and interact with the Random Quote Generator app.
Project Structure

The project is organized into three main files:

random-quote-generator/
├── index.html # The main HTML file
├── styles.css # The stylesheet for styling the page
└── app.js # The JavaScript file for functionality

1. index.html
   This is the main HTML file that contains the structure of the page, including:

A header with the title.
A container that displays the random quote.
A button to fetch a new random quote.
A form for submitting custom quotes. 2. styles.css
This file contains the CSS that styles the page, giving it a clean, colorful design with a light blue background. It includes:

Styling for the body, header, and quote sections.
Interactive button and input field styles.
Responsive design for different screen sizes. 3. app.js
The JavaScript file that handles the functionality of the quote generator, including:

Caching elements using getElementById and querySelector.
Dynamically displaying a random quote.
Handling form submissions and adding custom quotes to the quote pool.
Validating the input form.
How It Works

Random Quote Button
When the user clicks the "Get Random Quote" button, a random quote is selected from a predefined list of quotes and displayed on the screen with the author’s name.
Custom Quote Submission
The user can also add their own custom quote by typing it into the input field and clicking the "Add Quote" button.
The form input is validated to ensure the quote is not empty.
If the quote is valid, it gets added to the quote list and can be selected as a random quote.
Styling
The background of the page is light blue (#add8e6), and various other sections have soft color palettes for contrast and readability.
Interactive elements like buttons and input fields are styled with hover effects for a better user experience.
