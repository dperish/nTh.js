/* nTh.js - is a javascript micro-library to return lower ordinals from integers  
   version: 0.1
   date: 2013-09-17
   license: Copyright (c) 2013 David Perish, MIT License */

(function() {
 
  var nth = function (n) {
    var intRegex = /^\d+$/;
    if(intRegex.test(n)) {
      var suffix = '';
      switch (n%10) {
        case 1:
          suffix = 'st';
          break;
        case 2:
          suffix = 'nd';
          break;
        case 3:
          suffix = 'rd';
          break;
        default:
          suffix = 'th';
          break;
      }
      return n + suffix;
    }
    return n;  
  };
        
  window.nth = nth;
 
  nth.of = function(x,y) {
    return nth(x) + ' of ' + y;
  };
  
})();
