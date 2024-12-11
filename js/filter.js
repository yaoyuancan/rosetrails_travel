document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const destinations = document.querySelectorAll('.destination-card');

    // Define destination types
    const destinationTypes = {
        'banff': ['mountain', 'nature'],
        'canmore': ['mountain', 'culture'],
        'drumheller': ['nature', 'culture'],
        'calgary': ['urban', 'culture']
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            destinations.forEach(destination => {
                const destinationId = destination.id;
                
                if (filterValue === 'all') {
                    destination.style.display = 'block';
                    destination.style.animation = 'fadeIn 0.6s ease-out';
                } else {
                    if (destinationTypes[destinationId] && destinationTypes[destinationId].includes(filterValue)) {
                        destination.style.display = 'block';
                        destination.style.animation = 'fadeIn 0.6s ease-out';
                    } else {
                        destination.style.display = 'none';
                    }
                }
            });
        });
    });
});
