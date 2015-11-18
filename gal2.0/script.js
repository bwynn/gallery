// Components:
//  - Slide object
//    - name
//    - src
//    - active state change req'd

//  - Gallery object
//    - add slide object
//    - default state
//    - current slide
//      - slide object
//      - slide index
//    - advance index
//    - decrement index

//  - DOM Generation
//    - Append structure to target container
//      - instantiate new Gallery object
//      - add slides to gallery
//    - Add paddle navigation to gallery
//    - Add dotnav list items to gallery
//      - set default states through class assignments in elements

//  - Events
//    - paddle navigation
//       - bind advance and previous state change
//    - dot navigation
//       - bind the active state to a selected element
//    - touch navigation
//       - advance/previous state changes

var slides = []; // slides array stores slide objects, passed in using api listed
// below

function Slide() {
  this.name; // name property
  this.active = false; // default state - false, this property will act as the
  // state switcher for the current gallery slide in the gallery.
}

function Gallery() {

  this.addSlide = function( name, path, arr ) {
    var slide = new Slide(); // invoke new slide object
    slide.name = name; // get name as a string
    slide.src = path; // get url path as a string
    arr.push( slide ); // push the slide object into the slides array

    console.log(arr);
  };

  // implemented as Gallery.defaultState.call(this, arr);
  this.defaultSlideState = function( arr ) {
    // set all active state values to false
    for ( var i = 0; i < arr.length; i++ ) {
      arr[i].active = false;
    }
    // return with the first slide as active
    arr[0].active = true; // sets the first gallery object with the active state
    console.log(arr);
  };

  // curSlide takes the gallery array object as a parameter, which controls
  // session states and changes
  this.currentSlide = function( arr ) {
    var selected; // declare selected
    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i].active === true ) { // if the slide object has a property with the active state === true
        selected = arr[i]; // set selected var to the current slide to create a
      }                    // session instance
    }

    // return current slide's index value 
    function index() {
      return arr.indexOf( selected ); // set var for the current index value
    }

    return {
      selected: selected,
      index: index
    };
  };

  // increment/advance to the next array object
  this.advanceIndex = function() {
    // if the index value is less than or equal to the array length value
    if ( index < arr.length - 1 ) {
      var newIdx = index += 1;
      // clear out current active state
      selected.active = false;

      // assign new active state index
      arr[newIdx].active = true;
      console.log(arr);
    }
    else {
      console.log("Last slide in the array");
    }
  };

  this.previousIndex = function() {
    if (index >= 1) {
      var newIdx = index -= 1;

      // clear out active state
      selected.active = false;

      // new index assigned
      arr[newIdx].active = true;
      console.log(arr);
    }
    else {
      return console.log("At the first slide, can't go back any further.");
    }
  };

  return {
    addSlide: this.addSlide,
    defaultSlideState: this.defaultSlideState,
    currentSlide: this.currentSlide,
    advanceIndex: this.advanceIndex,
    previousIndex: this.previousIndex
  };
}

var gallery = new Gallery(); // create new gallery object

// gallery.addSlide("slide 1", "imgsrc.jpg", slides); // invocation of a new slide
