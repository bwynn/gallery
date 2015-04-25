// gallery object used to be called from the event handlers within the galleryCtrl
// anonymous function below
var gallery = {
  setWidth: function() {
    // This is next bit is to try to set the image size to the width of the viewport, as
    // inheritance is preventing the ability to set a width of 100% without defaulting to the
    // max width property set on the figure.backgd tags. Because I need the slider
    // images to translate along with the viewport size as that is how the transform
    // property is being assigned, once image size matches the viewport, we'll be in
    // business... get it working before i worry too much about how clean this is.
    var imgSize = document.querySelectorAll('#galleryOuter > #galleryWrap > figure.backgd');
    var size = document.getElementById('galleryOuter').offsetWidth;

    for (var i = 0; i < imgSize.length; i++) {
      imgSize[i].style.width = '' + size + 'px';
    }
  },
  next: function(){
    var size = document.getElementById('galleryOuter').offsetWidth;
    var slide = document.getElementById('galleryWrap');

      if (!slide.hasAttribute('style') ||
           slide.style.transform == 'translateX(0px)') {
        slide.style.webkitTransition = '.5s ease-in-out';
        slide.style.transition = '.5s ease-in-out';
        slide.style.webkitTransform = 'translate(-' + size + 'px,0px)';
        slide.style.MozTransform = 'translateX(-' + size +'px)';
        slide.style.transform = 'translateX(-' + size +'px)';
      } else {
        slide.style.webkitTransition = '.5s ease-in-out';
        slide.style.transition = '.5s ease-in-out';
        slide.style.webkitTransform = 'translate(-' + size*2 + 'px,0px)';
        slide.style.MozTransform = 'translateX(-' + size*2 +'px)';
        slide.style.transform = 'translateX(-' + size*2 +'px)';
      }
    },
  previous: function(){
    // this will take the window width and use that number to decrement the
    // property of the translate style on the gallery figure elements
    var size = document.getElementById('galleryOuter').offsetWidth;
    var slide = document.getElementById('galleryWrap');
      if (slide.style.transform == 'translateX(-' + size*2 + 'px)') {
        slide.style.webkitTransition = '.5s ease-in-out';
        slide.style.transition = '.5s ease-in-out';
        slide.style.webkitTransform = 'translate(-' + size + 'px,0px)';
        slide.style.MozTransform = 'translateX(-' + size + 'px)';
        slide.style.transform = 'translateX(-' + size + 'px)';
      } else {
        slide.style.webkitTransition = '.5s ease-in-out';
        slide.style.transition = '.5s ease-in-out';
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
    gallery.setWidth();
    gallery.previous();
  },false);

  rightPaddle.addEventListener('click', function(e) {
    gallery.setWidth();
    gallery.next();
  },false);
}();
