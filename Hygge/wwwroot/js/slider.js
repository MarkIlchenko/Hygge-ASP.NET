class Slider {
    constructor(container) {
        this.currentSlide = 0;
        this.container = container;
        this.sliderContainer = container.querySelector('.slider-container');
        this.slides = this.sliderContainer.querySelectorAll('.slider-item');
        this.prevButton = container.querySelector('.slider-control-prev');
        this.nextButton = container.querySelector('.slider-control-next');
        this.indicators = container.querySelectorAll('.slider-indicator');

        this.prevButton.addEventListener('click', () => this.showPrevSlide());
        this.nextButton.addEventListener('click', () => this.showNextSlide());
    }

    showPrevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlider();
        this.updateIndicators();
    }

    showNextSlide() {
        this.currentSlide = (this.currentSlide + 1 + this.slides.length) % this.slides.length;
        this.updateSlider();
        this.updateIndicators();
    }

    updateSlider() {
        const offset = this.currentSlide * 100;
        this.sliderContainer.style.transform = `translateX(-${offset}%)`;
    }

    updateIndicators() {
        this.indicators.forEach((el, index) => index === this.currentSlide ? el.classList.add('active') : el.classList.remove('active'));
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const myJsSliderContainers = document.querySelectorAll('.js-slider-cont');

    myJsSliderContainers.forEach(container => {
        new Slider(container);
    });
});
