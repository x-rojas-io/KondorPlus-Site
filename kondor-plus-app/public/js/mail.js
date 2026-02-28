// Get form elements
const form = document.getElementById("contact");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const serviceSelect = document.getElementById("service");
const detailsTextarea = document.getElementById("details");
const mailtoLink = document.getElementById("mailtoLink");

// Add event listener to the mailto link (instead of form submission)
mailtoLink.addEventListener("click", function(event) {
  event.preventDefault();
  const mailtoUrl = `mailto:nestor.rojas@kondorplus.net?subject=Inquiry%20from%20${nameInput.value}&body=Name:%20${nameInput.value}%0AEmail:%20${emailInput.value}%0AService%20Interested%20In:%20${serviceSelect.value}%0AProject%20Details:%0A${detailsTextarea.value}`;
  mailtoLink.href = mailtoUrl;
  mailtoLink.click();
});
