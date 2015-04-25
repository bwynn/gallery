// gallery object used to be called from the event handlers within the galleryCtrl
// anonymous function below
var gallery = {
  setWidth: function() {
    // This iterates through the figure tags and changes the width property
    // of the images when invoked, which happens to be upon user trigger.
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
