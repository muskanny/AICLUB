document.addEventListener('DOMContentLoaded', function() {
    const eventCards = document.querySelectorAll('.event-card');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    eventCards.forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.getAttribute('data-event-id');
            // Fetch event details (you can use an API or a local JSON file)
            // For simplicity, we'll just use placeholder content
            const eventDetails = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h1>Event ${eventId}</h1>
                    <p>Details for event ${eventId}...</p>
                </div>
            `;
            modal.innerHTML = eventDetails;
            modal.style.display = 'flex';

            const closeButton = modal.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
});
