// Store tour information
const tours = {
    'lake-louise': {
        name: 'Lake Louise Adventure',
        duration: '8 hours',
        price: 189,
        image: 'images/banff-lake-louise.jpg',
        location: 'Banff Town'
    },
    'yoho': {
        name: 'Yoho National Park',
        duration: '4 hours',
        price: 149,
        image: 'images/banff-yoho.jpg',
        location: 'Banff Yoho National Park'
    },
    'nordic-centre': {
        name: 'Nordic Centre Trail Adventure',
        duration: '6 hours',
        price: 129,
        image: 'images/canmore-hiking.jpg',
        location: 'Nordic Centre'
    },
    'cave-explorer': {
        name: 'Rat\'s Nest Cave Explorer',
        duration: '6 hours',
        price: 169,
        image: 'images/canmore-cave.jpg',
        location: 'Grotto Mountain'
    },
    'dinosaur': {
        name: 'Dinosaur Discovery Tour',
        duration: '5 hours',
        price: 99,
        image: 'images/drumheller-museum.jpg',
        location: 'Royal Tyrrell Museum'
    },
    'badlands': {
        name: 'Badlands Adventure',
        duration: '7 hours',
        price: 139,
        image: 'images/drumheller-badlands.jpg',
        location: 'Horseshoe Canyon'
    },
    'city-highlights': {
        name: 'City Highlights Tour',
        duration: '4 hours',
        price: 79,
        image: 'images/calgary-tower.jpg',
        location: 'Downtown Calgary'
    },
    'culinary': {
        name: 'Culinary Adventure',
        duration: '3 hours',
        price: 119,
        image: 'images/calgary-food.jpg',
        location: '17th Avenue'
    }
};

// Function to handle booking button clicks
function bookTour(tourId) {
    // Store selected tour in sessionStorage
    sessionStorage.setItem('selectedTour', JSON.stringify(tours[tourId]));
    // Redirect to checkout page with source parameter
    window.location.href = 'checkout.html?source=tours';
}
