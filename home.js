/* =========================
   EMAIL CAPTURE (HOME ONLY)
========================= */
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const emailMessage = document.getElementById("emailMessage");

if (emailForm && emailInput && emailMessage) {
  emailForm.addEventListener("submit", e => {
    e.preventDefault();

    if (!emailInput.value.includes("@")) {
      emailMessage.textContent = "Please enter a valid email address.";
      emailMessage.style.color = "#ef4444";
      return;
    }

    emailMessage.textContent = "✅ Thanks! We’ll be in touch soon.";
    emailMessage.style.color = "#22c55e";
    emailInput.value = "";
  });
}
