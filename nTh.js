/* nTh.js - is a javascript micro-library to return lower ordinals from integers
   license: Copyright (c) 2013-2015 David Perish, MIT License
   contributors: Brandon McKinney @pagefold, Gleb Bahmutov @bahmutov */

(function () {
    "use strict";

    function nth(n) {
        if (/^(string|number)$/.test(typeof n) === false) { return n; }
        var suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'],
            match = n.toString().match(/\d$/),
            suffix;
        if (!match) { return n; }
        suffix = suffixes[match[0]];
        if (/1[123]$/.test(n)) { suffix = 'th'; }
        return n + suffix;
    }

    // Should remove the global soon since there's now AMD support.
    // Staying out of the global scope is better for compatibility!
    window.nth = nth;

    nth.of = function (x, y) {
        return nth(x) + ' of ' + y;
    };

    if (typeof define === "function" && define.amd) {
        define("nth", [], function () {
            return nth;
        });
    }

}());
