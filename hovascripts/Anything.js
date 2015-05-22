var s = document.createElement('script');
s.src = 'https://code.jquery.com/jquery-1.11.1.min.js';
document.head.appendChild(s);

var j = {
  a: 'this',
  b: 'girl',
  c: 'that',
  d: "I'll",
  f: 'bounce',
  e: 'you',
  g: 'when',
  r: '<br>',
  k: function () {
    var x = '', i;
    for (i = 0; i < 7; i++) {
      if (i !== 6) {
        x += 'You know, ';
        if (i % 3 === 2) {
          x += j.r;
        }
      } else {
        x += 'You hot' + j.r;
      }
    }
    return x;
  },
  w: function () {
    return ['And', j.d, 'grant all your wishes', j.r].join(' ');
  },
  x: function () {
    return [j.d, 'bet', j.e, 'never seen it like', j.a, j.r].join(' ');
  },
  y:  function () {
    return ['Just stay up on', j.c, 'floor ', j.b, j.r].join(' ');
  },
  z: function () {
    return ['Anything', j.e, 'want ', j.b, j.r].join(' ');
  },
  t: function (z) {
    return [j.g, j.e, z+',', z, j.r].join(' ');
  },
  h: function (b) {
    return ['Especially', j.t(j.f) + 'I really like it', j.t(j.f)].join(' ');
  }
};

var lyrics = function () { 
  return j.z() + j.x() + j.y() + j.w() + j.k() + j.h();
};

$('body').html(lyrics());
j.r = '\n';
console.log(lyrics());

