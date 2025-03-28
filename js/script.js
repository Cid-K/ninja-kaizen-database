// Select all the expand buttons
const expandButtons = document.querySelectorAll('.expand-btn');

// Add event listeners to each button
expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the parent feature section
        const featureSection = button.parentElement;

        // Toggle the visibility of the feature details
        const featureDetails = featureSection.querySelector('.feature-details');
        const isVisible = featureDetails.style.display === 'block';

        if (isVisible) {
            featureDetails.style.display = 'none';
            button.textContent = 'Learn More'; // Change button text
        } else {
            featureDetails.style.display = 'block';
            button.textContent = 'Show Less'; // Change button text
        }
    });
});

// Image description functionality
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("click", function (event) {
            // Hide all descriptions first (for mobile behavior)
            document.querySelectorAll(".gallery-item").forEach(gallery => {
                gallery.classList.remove("active");
            });

            // Toggle active class for clicked item (for mobile)
            this.classList.add("active");

            event.stopPropagation(); // Prevent hiding immediately
            }
        });
    });

    // Hide descriptions when clicking anywhere else on the page (for mobile)
    document.addEventListener("click", function () {
        document.querySelectorAll(".gallery-item").forEach(gallery => {
            gallery.classList.remove("active");
        });
    });
});
