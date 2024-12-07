// form-validation.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    form.addEventListener("submit", (e) => {
      let isValid = true;
  
      // Clear previous error messages
      document.querySelectorAll(".error").forEach((el) => el.remove());
  
      // Validate Name
      if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required.");
        isValid = false;
      }
  
      // Validate Email
      if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
      }
  
      // Validate Message
      if (messageInput.value.trim() === "") {
        showError(messageInput, "Message cannot be empty.");
        isValid = false;
      }
  
      if (!isValid) {
        e.preventDefault(); // Stop form submission if validation fails
      }
    });
  
    function showError(input, message) {
      const error = document.createElement("div");
      error.className = "error";
      error.style.color = "red";
      error.textContent = message;
      input.parentElement.appendChild(error);
    }
  
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });
  