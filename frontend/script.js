// Set this to your deployed API URL when publishing the frontend.
const API_BASE = window.LANDING_API_URL || "http://localhost:5000/api";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", async event => {
  event.preventDefault();
  status.textContent = "";
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Sending...";
  try {
    const response = await fetch(`${API_BASE}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Unable to submit your request.");
    status.textContent = "Thank you! Your request has been received.";
    form.reset();
  } catch (error) {
    status.textContent = `${error.message} Check that the backend is running.`;
    status.style.color = "#b34b42";
  } finally {
    button.disabled = false;
    button.innerHTML = "Request a conversation <span>↗</span>";
  }
});