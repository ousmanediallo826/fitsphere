// Select the hamburger and navigation elements
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

// Toggle 'active' class on the navigation menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
});
