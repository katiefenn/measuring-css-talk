// Modified from markdown.js from Hakim to handle external html files
(function () {
    /*jslint loopfunc: true, browser: true*/
    /*globals alert*/
    'use strict';

    var formatColourHashes = function () {
        var hashes = document.querySelectorAll('.colour-hashes li');

        for (var i = 0; i < hashes.length; ++i) {
            var item = hashes.item(i);
            item.style.color = item.innerHTML;
        };
    };

    formatColourHashes();
})();
