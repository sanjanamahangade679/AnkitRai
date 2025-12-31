document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // Animate cards on load (stagger effect)
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200);
  });

  // Optional: Add keyboard focus effect for accessibility
  cards.forEach(card => {
    card.addEventListener("focusin", () => {
      card.classList.add("active");
    });

    card.addEventListener("focusout", () => {
      card.classList.remove("active");
    });
  });
});

// Button handler (already used in HTML)
function openDetails(project) {
  console.log("Opening details for:", project);
  alert(`More details coming soon for ${project.toUpperCase()}`);
}
