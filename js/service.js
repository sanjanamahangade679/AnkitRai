document.querySelectorAll(".request-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const serviceName = btn.closest(".service-card")
                               .getAttribute("data-service");

        window.location.href = `proposal.html?service=${encodeURIComponent(serviceName)}`;
    });
});
