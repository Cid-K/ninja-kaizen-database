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
