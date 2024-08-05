// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the DOM elements
    const lengthSlider = document.getElementById('length'); // Slider for password length
    const lengthValue = document.getElementById('lengthValue'); // Display for slider value
    const uppercaseCheckbox = document.getElementById('uppercase'); // Checkbox for uppercase letters
    const lowercaseCheckbox = document.getElementById('lowercase'); // Checkbox for lowercase letters
    const numbersCheckbox = document.getElementById('numbers'); // Checkbox for numbers
    const symbolsCheckbox = document.getElementById('symbols'); // Checkbox for symbols
    const generateButton = document.getElementById('generate'); // Button to generate password
    const passwordOutput = document.getElementById('password'); // Textarea to display password

    // Update the displayed length value when the slider value changes
    lengthSlider.addEventListener('input', function () {
        lengthValue.textContent = lengthSlider.value; // Update the length value display
    });

    // Generate the password when the button is clicked
    generateButton.addEventListener('click', function () {
        // Get the current values from the slider and checkboxes
        const length = parseInt(lengthSlider.value); // Convert slider value to an integer
        const includeUppercase = uppercaseCheckbox.checked; // Check if uppercase letters should be included
        const includeLowercase = lowercaseCheckbox.checked; // Check if lowercase letters should be included
        const includeNumbers = numbersCheckbox.checked; // Check if numbers should be included
        const includeSymbols = symbolsCheckbox.checked; // Check if symbols should be included

        // Generate the password using the selected options
        const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
        passwordOutput.value = password; // Display the generated password
    });

    // Function to generate a password
    function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
        // Define character sets
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

        // Create a string with all possible characters based on selected options
        let allCharacters = '';
        if (includeUppercase) allCharacters += uppercaseLetters;
        if (includeLowercase) allCharacters += lowercaseLetters;
        if (includeNumbers) allCharacters += numbers;
        if (includeSymbols) allCharacters += symbols;

        // If no character types are selected, return an empty string
        if (allCharacters === '') return '';

        // Generate the password by randomly selecting characters from the allCharacters string
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length); // Get a random index
            password += allCharacters[randomIndex]; // Add the character at the random index to the password
        }

        return password; // Return the generated password
    }
});
