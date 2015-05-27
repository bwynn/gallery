// gallery object used to be called from the event handlers within the galleryCtrl
// anonymous function below
var gallery = {
  setWidth: function() {
    // This iterates through the figure tags and changes the width property
    // of the images when invoked, which happens to be upon user trigger.
    var imgSize = $("#galleryOuter > #galleryWrap > figure.backgd");  //document.querySelectorAll('#galleryOuter > #galleryWrap > figure.backgd');
    var size = $("#galleryOuter").width();  //document.getElementById('galleryOuter').offsetWidth;

    for (var i = 0; i < imgSize.length; i++) {
      $(imgSize[i]).css("width", size + "px");  // vanilla js //imgSize[i].style.width = '' + size + 'px';
    }
  },
  next: function(){
    var size = $('#galleryOuter').width();
    var slides = $('.backgd');
    var dotnav = $(".dotnavwrap a");

    dotnav.removeClass('active');

      // 3 slide gallery, basic logic determines slide positions
      // conditional statement determines current transform values applied to the
      // .backgd elements. Logical or condition determines between no style
      // value applied and style applied for boolean determinations
      if (slides.css("transform") == "none" ||
          slides.css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
        slides.css("transform", "translateX(-" + size + "px)");
      } else {
        // translate to farthest slide
        slides.css("transform", "translateX(-" + size*2 + "px)");
      }
    },
  previous: function(){
    // this will take the window width and use that number to decrement the
    // property of the translate style on the gallery figure elements
    var size = $('#galleryOuter').width();
    var slides = $('.backgd');

    // a reverse of the 3 slide gallery conditional from above, except
    // no 'or' statement required, as style has already been applied
    // by the time a user arrives at the far slide
    if (slides.css("transform") == "matrix(1, 0, 0, 1, -" + size*2 + ", 0)") {
      slides.css("transform", "translateX(-" + size + "px)");
    } else {
      slides.css("transform", "translateX(0px)");
    }
  },

  // switch case being used currently, but this functionality should
  // be built based on the current number of gallery slides, building
  // up the corresponding dotnav elements based on the total number
  // of slides available.
  dotnav: function() {
    var dotnav = $(".dotnavwrap a");
    var size = $('#galleryOuter').width();
    var slides = $('.backgd');

    // switcher between the three dotnavs
    switch (dotnav) {
      case 0:
      slides.css("transform", "translateX(0px)");
      break;
      case 1:
      slides.css("transform", "translateX(-" + size + "px)");
      break;
      case 2:
      slides.css("transform", "translateX(-" + size*2 + "px)");
      break;
    }
  }
};

// self-invoked function returns access to the event handlers when the page loads
var triggers = function() {
  var leftPaddle = $('#left a');
  var rightPaddle = $('#right a');

  leftPaddle.on('click', function(e) {
    gallery.setWidth();
    gallery.previous();
  });

  rightPaddle.on('click', function(e) {
    gallery.setWidth();
    gallery.next();
  });
}();

// Dotnav event handler, calls on gallery.dotnav object function to
// translate the slide to the selected corresponding index.
//$(function(){
  var dotnav = $(".dotnavwrap a");

  // changes classes when user interacts with the dotnav anchor tag
  dotnav.on("click", function() {
    gallery.dotnav();
    // with each click, translates the width of the viewport multiplied
    // by the index of the dotnav element clicked on.
  });
//}());


gallery.setWidth();
