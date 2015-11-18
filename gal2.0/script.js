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

  this.addSlide = function( name, path, arr ) {
    var slide = new Slide();
    slide.name = name;
    slide.src = path;
    arr.push( slide );
  };

  // implemented as Gallery.defaultState.call(this, arr);
  this.defaultActiveState = function( arr ) {
    // set all active state values to false
    for ( var i = 0; i < arr.length; i++ ) {
      arr[i].active = false;
    }
    // return with the first slide as active
    return arr[0].active = true;
  };

  return {
    addSlide: this.addSlide,
    defaultState: this.defaultActiveState
  };
};

var gallery = new Gallery(); // create new gallery object

// gallery().addSlide("slide 1", "imgsrc.jpg", slides); // invocation of a new slide

function curSlide(arr) {
  var selected;
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i].active === true ) {
      selected = arr[i];
    }
  }
  var index = arr.indexOf( selected );

  // increment to the next index
  this.advance = function() {
    var newIdx = index += 1;
    // clear out current active state
    selected.active = false;

    // assign new active state index
    arr[newIdx].active = true;
    console.log( arr[newIdx] );
  }

  return {
    selected: selected,
    index: index,
    advance: this.advance
  }
}
