//(function() {
  // SAMPLE SESSION FOR DEVELOPMENT PURPOSES
  // create new gallery object
  var gallery = new Gallery();
  var slides = []; // slides array stores slide objects
  var el = document.getElementById("attach"); // set element declaration to with element to append gallery to

  // gallery.addSlide("slide 1", "imgsrc.jpg", slides); // invocation of a new slide
  gallery.addSlide("slide1", "img/img1.jpg", slides ); // addSlide along with slide name, image path, and project array
  gallery.addSlide("slide2", "img/img2.jpg", slides );
  gallery.addSlide("slide3", "img/img3.jpg", slides );
  gallery.addSlide("slide4", "img/img4.jpg", slides );
  gallery.addSlide("slide5", "img/img5.jpg", slides );
  gallery.init( gallery, slides, el ); // initialize gallery
  gallery.preferences( 450, "easeInOut", true ); // set preferences
//}());
