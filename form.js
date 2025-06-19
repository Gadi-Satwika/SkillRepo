const form = document.getElementById("contactForm");
const errorEl = document.getElementById("error");
const successEl = document.getElementById("success");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Reset messages
  errorEl.textContent = "";
  successEl.textContent = "";

  if (name === "" || email === "" || message === "") {
    errorEl.textContent = "All fields are required.";
    return;
  }

  // Basic email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorEl.textContent = "Please enter a valid email address.";
    return;
  }

  // If valid
  successEl.textContent = "Your message has been sent!";
  form.reset(); // Optional: clear form
});
