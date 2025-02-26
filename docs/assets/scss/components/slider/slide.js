const photos = document.querySelectorAll('.slide'); 
const rightArrow = document.querySelector('.rightArrow'); 
const leftArrow = document.querySelector('.leftArrow'); 
const slider = document.querySelector('.slider'); // Контейнер слайдов

let currentIndex = 0; 
let startX = 0; // Начальная точка касания
let endX = 0;   // Конечная точка касания

function showSlide(index) {
    photos.forEach(photo => photo.classList.remove('active')); 
    photos[index].classList.add('active');
}

// Переключение на следующий и предыдущий слайд
function nextSlide() {
    currentIndex = (currentIndex + 1) % photos.length; 
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length; 
    showSlide(currentIndex);
}

// Клики по стрелкам
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

// Обработчики свайпа
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    let swipeDistance = endX - startX;
    
    if (Math.abs(swipeDistance) > 50) { // Минимальная дистанция свайпа
        if (swipeDistance < 0) {
            nextSlide(); // Свайп влево → следующий слайд
        } else {
            prevSlide(); // Свайп вправо → предыдущий слайд
        }
    }
}

// Показываем первый слайд
showSlide(currentIndex);
