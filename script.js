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
    // check parameters passed in are - string, string, array object
    if ( typeof name == "string" && typeof path == "string" && Array.isArray( arr )) {

      var slide = new Slide(); // invoke new slide object

      slide.name = name; // get name as a string

      slide.src = path; // get url path as a string

      arr.push( slide ); // push the slide object into the slides array

      console.log(arr); // just to double check while in development
    }
    else {
      console.log("Ensure parameters passed in are: string, string, array"); // go fish
    }
  };

  // implemented as Gallery.defaultState.call(this, arr);
  this.defaultSlideState = function( arr ) {
    // check to see that the array has values assigned - slide objects
    if ( arr.length > 0 ) {

      // set all active state values to false, clearing out any current assignments
      for ( var i = 0; i < arr.length; i++ ) {
        arr[i].active = false;
      }
      // return with the first slide as active
      arr[0].active = true; // sets the first gallery object with the active state
    }
    console.log( arr ); // quick double check
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
      if ( Array.isArray( arr ) ) {
        return arr.indexOf( selected ); // set var for the current index value
      }
    }

    return {
      selected: selected,
      index: index
    };
  };

  // increment/advance to the next array object
  this.advanceIndex = function( arr ) {
    var getIndex = this.currentSlide( arr ).index() // get current slides index
    var newIdx = getIndex += 1; // set new index

    // if the index value is less than or equal to the array length value
    if ( this.currentSlide( arr ).index() < arr.length - 1 ) {
      // clear out current active state
      this.currentSlide(arr).selected.active = false;

      // assign new active state index
      arr[newIdx].active = true;
      console.log(arr);
    }
    else {
      console.log("Last slide in the array");
    }
  };

  this.previousIndex = function( arr ) {
    var getIndex = this.currentSlide( arr ).index();

    // if the current index is set to 1 or, select previous slide
    if (getIndex >= 1) {
      // newIdx value set to - 1
      var newIdx = getIndex -= 1;

      // clear out active state
      this.currentSlide(arr).selected.active = false;

      // new index assigned
      arr[newIdx].active = true;
      console.log(arr);
    }
    else {
      return console.log("At the first slide, can't go back any further.");
    }
  };

  this.createContainer = function( container ) {
      var gallery = String()
          + "<div id='gallery'>"
            + "<div class='slides'></div>"
            + "<div class='paddle-nav'>"
              + "<div class='paddle paddle-left'></div>"
              + "<div class='paddle paddle-right'></div>"
            + "</div>"
            + "<div class='dotnav'></div>"
          + "</div>";

      container.innerHTML = gallery;
  };

  return {
    addSlide: this.addSlide, // return addSlide method
    defaultSlideState: this.defaultSlideState, // return defaultSlideState method
    currentSlide: this.currentSlide, // return currentSlide method
    advanceIndex: this.advanceIndex, // advanceIndex
    previousIndex: this.previousIndex, // previousIndex
    createContainer: this.createContainer // createContainer
  };
}

// SAMPLE SESSION FOR DEVELOPMENT PURPOSES
// create new gallery object
var gallery = new Gallery();
gallery.addSlide("slide1", "img1.jpg", slides );
gallery.addSlide("slide2", "img2.jpg", slides );
gallery.addSlide("slide3", "img3.jpg", slides );
gallery.addSlide("slide4", "img4.jpg", slides );
gallery.defaultSlideState( slides ); // on init, this should be set as a promise, to execute asynchronously when a slide object is available


// gallery.addSlide("slide 1", "imgsrc.jpg", slides); // invocation of a new slide
