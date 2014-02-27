/* nTh.js - is a javascript micro-library to return lower ordinals from integers  
   version: 0.2.1
   date: 2014-02-27
   license: Copyright (c) 2013 David Perish, MIT License */


(function() {
 
  var nth = function (n) {
    
    var intRegex = /^\d+$/;
    
    if(intRegex.test(n)) {
       
      var suffix = 'th';
      var nums = [11,12,13,14,15,16,17,18,19];
      
      for (var num in nums) {
         if (n.toString().substr(n.toString().length -2, 2) == nums[num])
            return n + suffix;
      }

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
