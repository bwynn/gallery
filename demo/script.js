//(function() {
  // SAMPLE SESSION FOR DEVELOPMENT PURPOSES
  // create new gallery object
  var getGallery = gallry.gallery();
  var gallery = getGallery;
  var slides = []; // slides array stores slide objects
  var el = document.getElementById("attach"); // set element declaration to with element to append gallery to

  // gallery.addSlide("slide 1", "imgsrc.jpg", slides); // invocation of a new slide
  gallery.addSlide("slide1", "img/img1.jpg", slides ); // addSlide along with slide name, image path, and project array
  gallery.addSlide("slide2", "img/img2.jpg", slides );
  gallery.addSlide("slide3", "img/img3.jpg", slides );
  gallery.addSlide("slide4", "img/img4.jpg", slides );
  gallery.addSlide("slide5", "img/img5.jpg", slides );
  //gallery.backgroundCtrl(slides, 0, "cover", "top");
  //gallery.backgroundCtrl(slides, 1, "cover", "bottom");
  //gallery.backgroundCtrl(slides, 4, "cover", "bottom");
  //gallery.preferences( 450, "easeInOut", true, true ); // set preferences
  gallery.init( gallery, slides, el ); // initialize gallery
//}());
