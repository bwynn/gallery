// gallery object used to be called from the event handlers within the galleryCtrl
// anonymous function below
var gallery = {
  next: function(){
    var slide = document.getElementById('galleryWrap');
      if (!slide.hasAttribute('style') ||
           slide.style.transform == 'translateX(0px)') {
        slide.style.webkitTransform = 'translate(-900px,0px)';
        slide.style.MozTransform = 'translateX(-900px)'
        slide.style.transform = 'translateX(-900px)';
      } else {
        slide.style.webkitTransform = 'translate(-1800px,0px)';
        slide.style.MozTransform = 'translateX(-1800px)';
        slide.style.transform = 'translateX(-1800px)';
      }
    },
  previous: function(){
    // this will take the window width and use that number to decrement the
    // property of the translate style on the gallery figure elements
    var slide = document.getElementById('galleryWrap');
      if (slide.style.transform == 'translateX(-1800px)') {
        slide.style.webkitTransform = 'translate(-900px,0px)';
        slide.style.MozTransform = 'translateX(-900px)';
        slide.style.transform = 'translateX(-900px)';
      } else {
        slide.style.webkitTransform = 'translate(0px,0px)';
        slide.style.MozTransform = 'translateX(0px)';
        slide.style.transform = 'translateX(0px)';
      }
    }
};

// this anonymous function returns the pixel width of the viewport and
// is intended to identify page-width when adjusting the translate style property
// for the gallery
var windowSize = function(){return window.innerWidth;};

// self-invoked function returns access to the event handlers when the page loads
var triggers = function() {
  var leftPaddle = document.querySelector('#left a');
  var rightPaddle = document.querySelector('#right a');

  leftPaddle.addEventListener('click', function(e) {
    return gallery.previous();
  },false);

  rightPaddle.addEventListener('click', function(e) {
    return gallery.next();
  },false);
}();
