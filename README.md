nTh.js
======

Weighing in at 368 bytes minified, nTh.js is a javascript micro-library to return ordinal suffixes from integers (ie: 1st, 2nd, 3rd, 7th of 9).

======

#### Standard Usage - _nth(int)_:
`nth(4077);` produces `4077th`

#### Nth of Set - _nth.of(int, int)_:
`nth.of(1,3);` produces `1st of 3`

#### Via jQuery Class Selection:
``` html
  <ul>
    <li class='nth'>0</li>
    <li class='nth'>1</li>
    <li class='nth'>2</li>
    <li class='nth'>3</li>
    <li class='nth'>4077</li>
  </ui>
```
``` javascript
$(function(){
  $(".nth").html(function(i,e) {
      return nth(e);
  });
});
```
produces:
<ul>
  <li>0th</li>
  <li>1st</li>
  <li>2nd</li>
  <li>3rd</li>
  <li>4077th</li>
</ul>

======
### Contributions
This library was written by:
- David Lee Perish @DavidPerish - http://stonyhillsoftware.com

- Brandon McKinney @pagefold - http://bsstudio.us

- Gleb Bahmutov @bahmutov - http://glebbahmutov.com

Any & all contributions are welcomed.

======
### License

nTh.js is free (as in love), and is provided under The MIT License (MIT)


