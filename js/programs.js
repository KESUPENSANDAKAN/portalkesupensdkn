const grid = document.getElementById("eventGrid");
const emptyState = document.getElementById("emptyState");

function renderEvents(filter = "upcoming") {
  const items = KESUPEN_EVENTS.filter(e => filter === "all" || e.status === filter);
  grid.innerHTML = "";

  items.forEach(e => {
    const card = document.createElement("article");
    card.className = "card event-card";
    card.innerHTML = `
      <span class="event-status">${e.status === "upcoming" ? "UPCOMING" : "PAST EVENT"}</span>
      <p class="eyebrow">${e.category}</p>
      <h2>${e.title}</h2>
      <p><strong>${e.dateText}</strong></p>
      <p>${e.location}</p>
      <p class="muted">${e.description}</p>
      <div class="event-actions">
        ${e.eventPage !== "#" ? `<a class="btn" href="${e.eventPage}">LIHAT PROGRAM</a>` : ""}
        ${e.ebook !== "#" ? `<a class="btn secondary" href="${e.ebook}" target="_blank" rel="noopener">BUKA E-BOOK</a>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });

  emptyState.hidden = items.length !== 0;
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderEvents(btn.dataset.filter);
  });
});

renderEvents("upcoming");
