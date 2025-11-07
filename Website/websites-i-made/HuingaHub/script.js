// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const huiForm = document.querySelector("form");
  const huiSection = document.querySelector("#huis .card-container");

  // Handle form submission (create new hui card)
  huiForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const marae = document.getElementById("marae").value;
    const title = document.getElementById("hui-title").value;
    const date = document.getElementById("date").value;
    const fundraisingGoal = document.getElementById("fundraising").value;

    // Create new card
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${title} - ${marae}</h3>
      <p>Date: ${date}</p>
      <p>Fundraising Goal: $${fundraisingGoal || "N/A"}</p>
      <button class="details-btn">View Details</button>
    `;

    // Add to Active Huis section
    huiSection.appendChild(card);

    // Reset form
    huiForm.reset();
  });

  // Handle donations with prompt
  document.querySelectorAll("#fundraising .card").forEach((card) => {
    const donateBtn = card.querySelector("button");
    const progress = card.querySelector("progress");
    const text = card.querySelector("p");

    if (donateBtn && progress) {
      donateBtn.addEventListener("click", () => {
        let amount = prompt("Enter your donation amount ($):");

        // Ensure it's a valid number
        amount = parseInt(amount);
        if (isNaN(amount) || amount <= 0) {
          alert("Please enter a valid donation amount.");
          return;
        }

        // Update progress
        let current = parseInt(progress.value);
        const max = parseInt(progress.max);
        let raised = Math.min(current + amount, max);

        progress.value = raised;

        // Update text (Goal: $X | Raised: $Y)
        let parts = text.textContent.split("|");
        if (parts.length === 2) {
          let goal = parts[0].split(":")[1].trim();
          text.textContent = `Goal: ${goal} | Raised: $${raised}`;
        }
      });
    }
  });
});
