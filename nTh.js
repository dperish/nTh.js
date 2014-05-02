/* nTh.js - is a javascript micro-library to return lower ordinals from integers
   version: 0.2.2
   date: 2014-03-19
   license: Copyright (c) 2013 David Perish, MIT License
   contributor: Brandon McKinney @pagefold */

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
        return [n, suffix].join('');
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