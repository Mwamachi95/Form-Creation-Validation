 document.addEventListener('DOMContentLoaded', function() {
    // Get form and feedback elements
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        // Prevent form from submitting
        event.preventDefault();

        // Get and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation tracking
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            isValid = false;
            messages.push('Please enter a valid email address');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }

        // Special characters in password validation
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            isValid = false;
            messages.push('Password must contain at least one special character');
        }

        // Uppercase letter validation
        if (!/[A-Z]/.test(password)) {
            isValid = false;
            messages.push('Password must contain at least one uppercase letter');
        }

        // Number validation
        if (!/\d/.test(password)) {
            isValid = false;
            messages.push('Password must contain at least one number');
        }

        // Display feedback
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            // feedbackDiv.style.backgroundColor = "#d4edda";
            feedbackDiv.style.color = "#28a745";
            form.reset(); // Clear the form on success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            // feedbackDiv.style.backgroundColor = "#ffbaba";
            feedbackDiv.style.color = "#dc3545";
        }
    });
 })
