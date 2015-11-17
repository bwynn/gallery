// Components:
//  - Slide object
//    - name
//    - src
//    - active state change req'd

//  - Gallery object
//    - paddle navigation
//    - dot navigation
//    - create/build slides
//    - touch navigation

var slides = [];

function Slide() {
  this.name = name;
  this.active = false; // default state
};

function Gallery() {

  function addSlide( name, src, arr ) {
    var slide = new Slide();
    slide.name = name;
    slide.src = src;
    arr.push( slide );
  };

  function listSlides( arr ) {
    console.log( arr );
  }

  return {
    addSlide: addSlide,
    listSlides: listSlides
  };
};

var gallery = new Gallery();

// gallery().addSlide("slide 1", "imgsrc.jpg", slides); // invocation of a new slide
