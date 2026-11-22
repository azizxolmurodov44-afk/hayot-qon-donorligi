const form = document.getElementById("donorForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(form).get("name");
  status.textContent = `Rahmat, ${name}! Siz bilan tez orada bog‘lanamiz.`;
  form.reset();
});
