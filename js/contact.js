const form = document.getElementById("contactForm");

//when user submit feedback, clears form and alerts the user
form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you for your feedback!");

  form.reset();
});
