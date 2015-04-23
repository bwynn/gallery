var gallery = {
  next: function(){console.log('toggle to next slide ' + windowSize)},
  previous: function(){console.log('toggle to previous slide ' + windowSize)}
};

var windowSize = function(){return window.innerWidth;}();

var galleryCtrl = function() {
  var leftPaddle = document.querySelector('#left a');
  var rightPaddle = document.querySelector('#right a');

  leftPaddle.addEventListener('click', function(e) {
    return gallery.previous();
  });

  rightPaddle.addEventListener('click', function(e) {
    return gallery.next();
  });
}();
