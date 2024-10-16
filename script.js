// JavaScript file for any interactive functionality if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log("Pinterest-style Gallery is ready!");
});

// Predefined username and password
const predefinedUsername = "kholidacantik";
const predefinedPassword = "27";

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Validate login credentials
    if (username === predefinedUsername && password === predefinedPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        // Simulate redirect (for example to a dashboard)
        setTimeout(() => {
            window.location.href = "index.html"; // Change this to your dashboard page
        }, 2000);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }
});
