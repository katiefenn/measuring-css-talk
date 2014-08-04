var bodyActiveSlideClass = (function () {
    Reveal.addEventListener('slidechanged', function () {
        document.querySelector('body').className = 'slide-' + document.querySelector('.present').dataset.title;
    });
})();
