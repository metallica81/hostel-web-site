const photos = document.querySelectorAll('.slide'); 
const rightArrow = document.querySelector('.rightArrow'); 
const leftArrow = document.querySelector('.leftArrow'); 

let currentIndex = 0; 

function showSlide(index) {
    photos.forEach(photo => photo.classList.remove('active')); 
    photos[index].classList.add('active');
}

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length; 
    showSlide(currentIndex); 
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length; 
    showSlide(currentIndex);
});

// Показать первый слайд
showSlide(currentIndex);
