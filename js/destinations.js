document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.destination-card');
            const expandedContent = card.querySelector('.expanded-content');
            const previewText = card.querySelector('.preview-text');
            
            // Toggle the expanded content
            expandedContent.classList.toggle('active');
            card.classList.toggle('expanded');
            
            // Update button text
            this.textContent = expandedContent.classList.contains('active') ? 'Show Less' : 'Learn More';
            
            // Toggle preview text visibility
            previewText.style.display = expandedContent.classList.contains('active') ? 'none' : 'block';
            
            // Close other cards
            learnMoreButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherCard = otherButton.closest('.destination-card');
                    const otherExpanded = otherCard.querySelector('.expanded-content');
                    const otherPreview = otherCard.querySelector('.preview-text');
                    
                    otherExpanded.classList.remove('active');
                    otherCard.classList.remove('expanded');
                    otherButton.textContent = 'Learn More';
                    otherPreview.style.display = 'block';
                }
            });
        });
    });
});
