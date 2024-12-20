const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

// Function to show the current slide
const showSlide = (i) => {
  index = i < 0 ? slide.length - 1 : i >= slide.length ? 0 : i;
  slides.style.transform = `translateX(-${index * 100}%)`;
};

// Previous button
prevButton.addEventListener('click', () => {
  showSlide(index - 1);
});

// Next button
nextButton.addEventListener('click', () => {
  showSlide(index + 1);
});

// Auto slide every 5 seconds
setInterval(() => {
  showSlide(index + 1);
}, 5000);
