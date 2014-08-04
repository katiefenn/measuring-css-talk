var SlideHeadingClasses = (function () {
    var slides = document.querySelectorAll('.slides section'),
        titles = [];

    for (var i = 0; i < slides.length; i++) {
        var heading = slides[i].querySelector('h1, h2, h3'),
            title = toDashSpaced(stripSymbols(getUniqueTitle(heading.innerHTML))).toLowerCase()

        slides[i].className += ' ' + title;
        slides[i].dataset.title = title;
    }

    function stripSymbols(dirty) {
        return dirty.replace(/[^0-9a-zA-Z\s]/g, '');
    }

    function toDashSpaced(string) {
       return string.replace(/\s/g, '-');
    }

    function getUniqueTitle(title) {
        titles.push(title);

        var totalInstances = instancesOfTitle(title).length;

        if (totalInstances == 1)
            return title;

        return title += ' ' + totalInstances;
    }

    function instancesOfTitle(title) {
        return titles.filter(function (item) {
            return item == title;
        });
    }
})();
