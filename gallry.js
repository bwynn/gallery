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
//      - add slides elements to gallery
//      - add class values to slides
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

function Slide() {
  this.active = false; // default state - false, this property will act as the
  // state switcher for the current gallery slide in the gallery.
}

function Gallery() {

  "use strict";

  var prefs = {
    timing: 300,
    easing: "ease",
    loop: false
  };

  function addSlide( name, path, arr ) {
    // check parameters passed in are - string, string, array object
    if ( typeof name == "string" && typeof path == "string" && Array.isArray( arr )) {

      var slide = new Slide(); // invoke new slide object

      slide.name = name; // get name as a string

      slide.src = path; // get url path as a string

      arr.push( slide ); // push the slide object into the slides array

    }
    else {
      console.log("Ensure parameters passed in are: string, string, array"); // go fish
    }
  }

  // implemented as Gallery.defaultState.call(this, arr);
  function defaultSlideState( arr ) {
    // check to see that the array has values assigned - slide objects
    if ( arr.length > 0 ) {

      // set all active state values to false, clearing out any current assignments
      for ( var i = 0; i < arr.length; i++ ) {
        arr[i].active = false;
      }
      // return with the first slide as active
      arr[0].active = true; // sets the first gallery object with the active state
    }
  }

  // currentSlide is a utility function that takes the gallery array object as a parameter, which controls
  // session states and changes
  function currentSlide( arr ) {
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
  }

  // increment/advance to the next array object
  function advanceIndex( arr, container ) {
    var getIndex = currentSlide( arr ).index(); // get current slides index
    var newIdx = getIndex += 1; // set new index

    // if the index value is less than or equal to the array length value
    if ( currentSlide( arr ).index() < arr.length - 1 ) {
      // clear out current active state
      currentSlide(arr).selected.active = false;

      // assign new active state index
      arr[newIdx].active = true;
      //console.log(arr);

      // if idx of arr == newIdx
      if ( currentSlide( arr ).index() == newIdx ) {
        displaySlide( arr, container );
        dotNavSlides( arr, container );
      }
      else {
        console.log("conditional switcher inside advance index not working");
      }
    }
    // set loop properties
    else if ( prefs.loop === true ) {
      currentSlide( arr ).selected.active = false;
      arr[0].active = true;

      displaySlide( arr, container );
      dotNavSlides( arr, container );
    }
    else {
      console.log("Last slide in the array");
    }
  }

  function previousIndex( arr, container ) {
    var getIndex = currentSlide( arr ).index();

    // if the current index is set to 1 or, select previous slide
    if (getIndex >= 1) {
      // newIdx value set to - 1
      var newIdx = getIndex -= 1;

      // clear out active state
      currentSlide(arr).selected.active = false;

      // new index assigned
      arr[newIdx].active = true;
      //console.log(arr);

      if ( currentSlide( arr ).index() == newIdx ) {
        displaySlide( arr, container );
        dotNavSlides( arr, container );
      }
      else {
        console.log("something went wrong with the previous index conditional");
      }
    }
    // set loop properties
    else if ( prefs.loop === true ) {
      // set index to end of slide
      var curIdx = arr.length - 1;
      // set current slide active state to false
      currentSlide( arr ).selected.active = false;
      // set new index value
      arr[curIdx].active = true;

      displaySlide( arr, container ); // invoke
      dotNavSlides( arr, container ); // invoke
    }
    else {
      return console.log("At the first slide, can't go back any further.");
    }
  }

  function createContainer( container, arr ) {
      // if slides are present
      if ( arr.length > 0 ) {
          var gallry = String() +
               "<div class='gallry'>" +
                 "<div class='slides'></div>" +
                 "<div class='paddle-nav'>" +
                   "<a href='#' class='left'><div class='paddle paddle-left'></div></a>" +
                   "<a href='#' class='right'><div class='paddle paddle-right'></div></a>" +
                 "</div>" +
                 "<div class='dotnav'>" +
                  "<ul></ul>" +
                 "</div>" +
               "</div>";

          container.innerHTML = gallry;
      }
      else {
          console.log( "Need to create more slide objects using addSlide() method." );
      }
  }

  // this method invokes the generation of gallery slider, based on the presence
  // of array slide objects.
  function createSlides( arr, container ) {

    var gal = container.querySelector(".gallry > .slides");

    // array has slides in it?
    if ( arr.length > 0 ) {
      for ( var i = 0; i < arr.length; i++ ) {

        var fig = document.createElement("FIGURE"); // create figure element
        // create new element
        gal.appendChild( fig );
      }
      displaySlide( arr, container );
    }
    else {
      console.log("createSlides function needs an array to be passed in as param");
    }
  }

  function dotNav( arr, container ) {
    var getUl = container.querySelector(".gallry .dotnav > ul");
    if ( getUl ) {
      // create all dotnav elements by looping through the array
      for ( var i = 0; i < arr.length; i++ ) {

        var li = document.createElement("li");

        getUl.appendChild( li );
      }
      dotNavSlides( arr, getUl );
    }
  }

  function dotNavSlides( arr, container ) {
    var items = container.querySelectorAll(".gallry .dotnav li");
    for (var i = 0; i < arr.length; i++) {
      if ( arr[i].active ) {
        items[i].classList.add("active");
      }
      else {
        items[i].classList.remove("active");
      }
    }
  }

  // this is a callback function to determine the slide index after a state change
  // has taken place to display the current slide
  function displaySlide( arr, container ) {
    //console.log(container);
    var el = container.querySelectorAll(".gallry .slides > figure");

    // if elements created and variable successful
    if (el) {
      for ( var i = 0; i < arr.length; i++ ) {
        // clear out all active class assignments
        el[i].classList.remove("active");
        // set default active state
        if ( arr[i].active ) {
          el[i].classList.add("active");
          Velocity( el[i], { left: "0%" }, { display: "block" }, { duration: prefs.timing, easing: prefs.easing });
        }
        else if ( i < currentSlide( arr ).index() ) {
          Velocity( el[i], { left: "-100%" }, { display: "none" }, { duration: prefs.timing, easing: prefs.easing });
        }
        else {
          Velocity( el[i], { left: "100%" }, { display: "none" }, { duration: prefs.timing, easing: prefs.easing });
        }

        el[i].classList.add( arr[i].name, "slide" ); // cycle through array.name values to assign as class to element
        el[i].style.backgroundImage = "url(" + arr[i].src + ")"; // defining gallery slide image via arr.src prop
        el[i].style.backgroundSize = "cover";
        el[i].style.backgroundRepeat = "no-repeat";
        el[i].style.backgroundPosition = "center";
        el[i].style.height = "100%";
        el[i].style.margin = "0";
      }
    }
    else {
      console.log("Check el element is assigned to correct querySelectorAll value.");
    }
  }

  function slideEvent( obj ) {
    function next( arr, container ) {
      advanceIndex( arr, container );
    }

    function prev( arr, container ) {
      previousIndex( arr, container );
    }

    return {
      next: next,
      prev: prev
    };
  }

  function paddleHandler( obj, arr, container ) {
    var rightBtn = container.querySelector(".paddle.paddle-right");
    var leftBtn = container.querySelector(".paddle.paddle-left");

    rightBtn.addEventListener("click", function(e) {
      e.preventDefault();

      slideEvent( obj ).next( arr, container );
    }, false );

    leftBtn.addEventListener("click", function(e) {
      e.preventDefault();

      slideEvent( obj ).prev( arr, container );
    }, false );
  }

  function activeClassState( el, target, arr ) {
    //var navlink = document.querySelectorAll(".dotnav ul li");
    for (var i = 0; i < el.length; i++) {
      el[i].classList.remove("active");
    }

    target.classList.add("active");

    //var getIdx = $(".dotnav ul li").index( this );
    var indexes = Array.prototype.slice.call( el );
    var getIdx = indexes.indexOf( target );


    for (i = 0; i < arr.length; i++) {
      arr[i].active = false;

      arr[ getIdx ].active = true;
    }

    //console.log(arr);
  }

  function dotNavEvent( arr, container ) {
    var navlink = container.querySelectorAll(".dotnav ul li");

    if ( arr ) {
      for ( var i = 0; i < arr.length; i++ ) {
        navlink[i].addEventListener("click", function( e ) {

          activeClassState( navlink, this, arr ); // callback function

          displaySlide( arr, container );
        });

        navlink[i].addEventListener("touchstart", function(e) {
          activeClassState(navlink, this, arr);
          displaySlide(arr, container);
        });
      }
    }
    else {
      console.log("pass in the slide array");
    }
  }

  function swipeEvents( arr, container ) {
    var cont = container.querySelector(".gallry");

    var start = 0;
    var dist = [];

    cont.addEventListener("touchstart", function( e ) {
      var touchObj = e.changedTouches[0];
      var start = parseInt(touchObj.clientX);

      e.preventDefault();
    });

    cont.addEventListener("touchmove", function( e ) {
      var touchObj = e.changedTouches[0];
      var traveled = parseInt(touchObj.clientX) - start;

      e.preventDefault();
      
      // push all touchmove positions into the distance array
      dist.push( traveled );
    });

    cont.addEventListener("touchend", function(e) {
      var touchObj = e.changedTouches[0];
      //var  = parseInt( touchObj.clientX ) - start;
      var lastItem = dist.length - 1;
      var pos1 = dist[0];
      var pos2 = dist[ lastItem ];

      e.preventDefault();

      // if pos1 is less than position2 by less than -30
      if ( pos1 - pos2 < -30 ) {
        //console.log( pos1 - pos2 );
        previousIndex( arr, container );
      }
      // if pos1 is less than pos2 by more than 30
      else if ( pos1 - pos2 > 30 ) {
        //console.log( pos1 - pos2 );
        advanceIndex( arr, container );
      }
      else {
        return;
      }

      dist = []; // reset distance array
    });
  }

  // customize gallery characteristics
  function preferences( timing, easing, loop ) {
    if ( timing ) {
      prefs.timing = timing;
    }

    if ( easing && typeof easing === "string" ) {
      prefs.easing = easing;
    }

    if ( loop && typeof loop === "boolean" ) {
      prefs.loop = loop;
    }
  }

  function init( obj, arr, el ) {
    defaultSlideState( arr ); // on init, this should be set as a promise, to execute asynchronously when a slide object is available
    createContainer( el, arr ); // create gallery container
    createSlides( arr, el ); // create slides
    paddleHandler( obj, arr, el ); // handle paddle navigation
    dotNav( arr, el ); // create dotnav
    dotNavEvent( arr, el ); // handle dotNavEvent
    swipeEvents( arr, el ); // handle touchEvents
  }

  return {
    preferences: preferences, // preferences object to control timing, easing and loops
    addSlide: addSlide, // return addSlide method
    advanceIndex: advanceIndex, // advanceIndex
    previousIndex: previousIndex, // previousIndex
    init: init, // initialize gallery - takes new Gallery object, array and element to attach arguments.
    defaultSlideState: defaultSlideState, // on init, this should be set as a promise, to execute asynchronously when a slide object is available
    createContainer: createContainer, // create gallery container
    createSlides: createSlides, // create slides
    paddleHandler: paddleHandler, // handle paddle navigation
    dotNav: dotNav, // create dotnav
    dotNavEvent: dotNavEvent, // handle dotNavEvent
    swipeEvents: swipeEvents, // handle touchEvents
    currentSlide: currentSlide,
  };
}

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
