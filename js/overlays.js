document.addEventListener('DOMContentLoaded', () => {
    function openOverlay(content) {
        console.log("Opening overlay...");

        // Remove existing overlay if any
        const existingOverlay = document.querySelector('.overlay-container');
        if (existingOverlay) existingOverlay.remove();

        // Create overlay
        const overlayContainer = document.createElement('div');
        overlayContainer.classList.add('overlay-container');

        const overlayBox = document.createElement('div');
        overlayBox.classList.add('overlay-box');

        const closeButton = document.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', () => {
            console.log("Closing overlay...");
            overlayContainer.classList.add("fade-out"); // Smooth closing animation
            setTimeout(() => overlayContainer.remove(), 300); // Wait for animation
        });

        overlayBox.innerHTML = content;
        overlayBox.appendChild(closeButton);
        overlayContainer.appendChild(overlayBox);
        document.body.appendChild(overlayContainer);

        // Ensure overlay is visible
        setTimeout(() => overlayContainer.classList.add("visible"), 50);

        console.log("Overlay added to DOM:", document.querySelector('.overlay-container'));
    }

    // Open overlay for service cards
    document.querySelectorAll('.service-card').forEach((card) => {
        card.addEventListener('click', () => {
            console.log("Service card clicked:", card.querySelector("h3").textContent);
            openOverlay(`
                <h2>${card.querySelector("h3").textContent}</h2>
                <p>${card.querySelector("p").textContent}</p>
                <p>More details about ${card.querySelector("h3").textContent}.</p>
            `);
        });
    });

    // Open overlay for portfolio items
    document.querySelectorAll('.project-details-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const project = btn.closest('.project');
            console.log("Portfolio button clicked:", project.querySelector("h3").textContent);

            openOverlay(`
                <h2>${project.querySelector("h3").textContent}</h2>
                <img src="${project.querySelector("img").src}" alt="${project.querySelector("h3").textContent}" class="overlay-image">
                <p>${project.querySelector("p").textContent}</p>
            `);
        });
    });
});