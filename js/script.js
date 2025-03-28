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
        const description = item.querySelector(".image-description");

        item.addEventListener("click", function (event) {
            // Hide all descriptions first
            hideAllDescriptions();

            // Show the clicked item's description with smooth transition
            description.style.opacity = "1";
            description.style.visibility = "visible";

            event.stopPropagation(); // Prevent hiding when clicking on the item
        });
    });

    // Hide descriptions when clicking anywhere else on the page
    document.addEventListener("click", function () {
        hideAllDescriptions();
    });

    // Function to hide all image descriptions smoothly
    function hideAllDescriptions() {
        document.querySelectorAll(".image-description").forEach(desc => {
            desc.style.opacity = "0";
            desc.style.visibility = "hidden";
        });
    }
});
