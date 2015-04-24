// gallery object used to be called from the event handlers within the galleryCtrl
// anonymous function below
var gallery = {
  next: function(){
    var slide = document.querySelectorAll('#gallerywrap figure');
      if (slide.classList.contains('slide')) {
        slide.remove('slide');
      } else {
        slide.add('slide');
      }
    /*slide.style.webkitTransform = 'translate(' + width + 'px,0)' + 'translateZ(0)';
    slide.style.msTransform = 'translateX(' + width + 'px)';
    slide.style.MozTransform = 'translateX(' + width + 'px)';*/
    },
  previous: function(){
    // this will take the window width and use that number to decrement the
    // property of the translate style on the gallery figure elements
    console.log('toggle to previous slide ' + windowSize() );
    }
};

// this anonymous function returns the pixel width of the viewport and
// is intended to identify page-width when adjusting the translate style property
// for the gallery
var windowSize = function(){return window.innerWidth;};

// self-invoked function returns access to the event handlers when the page loads
var galleryCtrl = function() {
  var leftPaddle = document.querySelector('#left a');
  var rightPaddle = document.querySelector('#right a');

  leftPaddle.addEventListener('click', function(e) {
    return gallery.previous();
  },false);

  rightPaddle.addEventListener('click', function(e) {
    return gallery.next();
  },false);
}();
