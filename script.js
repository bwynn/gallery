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
(function strict() {
  "use strict";
}());

function Slide() {
  this.active = false; // default state - false, this property will act as the
  // state switcher for the current gallery slide in the gallery.
}

function Gallery() {

  function addSlide( name, path, arr ) {
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
    console.log( arr ); // quick double check
  };

  // curSlide takes the gallery array object as a parameter, which controls
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
  };

  // increment/advance to the next array object
  function advanceIndex( arr ) {
    var getIndex = currentSlide( arr ).index(); // get current slides index
    var newIdx = getIndex += 1; // set new index

    // if the index value is less than or equal to the array length value
    if ( currentSlide( arr ).index() < arr.length - 1 ) {
      // clear out current active state
      currentSlide(arr).selected.active = false;

      // assign new active state index
      arr[newIdx].active = true;
      console.log(arr);

      // if idx of arr == newIdx
      if ( currentSlide( arr ).index() == newIdx ) {
        displaySlide( arr );
        dotNavSlides( arr );
      }
      else {
        console.log("conditional switcher inside advance index not working");
      }
    }
    else {
      console.log("Last slide in the array");
    }
  };

  function previousIndex( arr ) {
    var getIndex = currentSlide( arr ).index();

    // if the current index is set to 1 or, select previous slide
    if (getIndex >= 1) {
      // newIdx value set to - 1
      var newIdx = getIndex -= 1;

      // clear out active state
      currentSlide(arr).selected.active = false;

      // new index assigned
      arr[newIdx].active = true;
      console.log(arr);

      if ( currentSlide( arr ).index() == newIdx ) {
        displaySlide( arr );
        dotNavSlides( arr );
      }
      else {
        console.log("something went wrong with the previous index conditional");
      }
    }
    else {
      return console.log("At the first slide, can't go back any further.");
    }
  }

  function createContainer( container, arr ) {
      // if slides are present
      if ( arr.length > 0 ) {
          var gallery = String() +
               "<div id='slidify'>" +
                 "<div id='slides'></div>" +
                 "<div class='paddle-nav'>" +
                   "<a href='#' class='left'><div class='paddle paddle-left'></div></a>" +
                   "<a href='#' class='right'><div class='paddle paddle-right'></div></a>" +
                 "</div>" +
                 "<div class='dotnav'>" +
                  "<ul></ul>" +
                 "</div>" +
               "</div>";

          container.innerHTML = gallery;
      }
      else {
          console.log( "Need to create more slide objects using addSlide() method." );
      }
  };

  // this method invokes the generation of gallery slider, based on the presence
  // of array slide objects.
  function createSlides( arr ) {

    var gal = $("#slidify #slides");

    // array has slides in it?
    if ( arr.length > 0 ) {
      for ( var i = 0; i < arr.length; i++ ) {

        //var fig = $("figure"); // create figure element
        // create new element
        gal.append("<figure/>");
      }

      displaySlide( arr );
    }
    else {
      console.log("createSlides function needs an array to be passed in as param");
    }
  };

  function dotNav( arr ) {
    var getUl = $("#slidify .dotnav > ul");

    if ( getUl ) {
      // create all dotnav elements by looping through the array
      for ( var i = 0; i < arr.length; i++ ) {

        getUl.append("<li>");

      }

      dotNavSlides( arr );
    }
  };

  function dotNavSlides( arr ) {
    var items = $("#slidify .dotnav li");
    items.each(function(i) {
      if ( arr[i].active ) {
        $(this).addClass("active");
      }
      else {
        $(this).removeClass("active");
      }
    })
  }

  function dotNavEvent( arr ) {

    if ( arr ) {
      $(".dotnav ul li").on("click", function() {
        var getIdx = $(".dotnav ul li").index( this );

        $(".dotnav ul li").removeClass("active");

        $(this).addClass("active");

        for (var i = 0; i < arr.length; i++) {
          arr[i].active = false;

          arr[ getIdx ].active = true;
        }

        console.log(arr);

        displaySlide( arr );

      });
    }
    else {
      console.log("pass in the slide array");
    }
  }

  // this is a callback function to determine the slide index after a state change
  // has taken place to display the current slide
  function displaySlide( arr ) {
    var el = $("#slidify #slides > figure");
    // if elements created and variable successful
    if (el) {

      el.removeClass("active");

      el.each(function(i) {
        // set default active state
        if ( arr[i].active ) {
          $(this).addClass("active");
          $(this).velocity({ left: "0%" }, { duration: 500 } );
        }
        else if ( i < currentSlide( arr ).index() ) {
          $(this).velocity({ left: "-100%" }, { duration: 500 } );
        }
        else {
          $(this).velocity({ left: "100%" }, { duration: 500 } );
        }

        el[i].classList.add( arr[i].name, "slide" ); // cycle through array.name values to assign as class to element
        $(this).css("backgroundImage", "url('" + arr[i].src + "')"); // defining gallery slide image via arr.src prop
        $(this).css("backgroundSize", "cover");
        $(this).css("backgroundRepeat", "no-repeat");
        $(this).css("backgroundPosition", "center");
      });
    }
    else {
      console.log("Check el element is assigned to correct querySelectorAll value.");
    }
  }

  function slideEvent( obj ) {
    function next( arr ) {
      obj.advanceIndex.call(this, arr);
    }

    function prev( arr ) {
      obj.previousIndex.call(this, arr);
    }

    return {
      next: next,
      prev: prev
    };
  }

  function paddleHandler( obj, arr ) {
    var rightBtn = document.querySelector(".paddle.paddle-right");
    var leftBtn = document.querySelector(".paddle.paddle-left");

    rightBtn.addEventListener("click", function(e) {
      slideEvent( obj ).next( arr );
    }, false );

    leftBtn.addEventListener("click", function(e) {
      slideEvent( obj ).prev( arr );
    }, false );
  }

  return {
    addSlide: addSlide, // return addSlide method
    defaultSlideState: defaultSlideState, // return defaultSlideState method
    currentSlide: currentSlide, // return currentSlide method
    advanceIndex: advanceIndex, // advanceIndex
    previousIndex: previousIndex, // previousIndex
    createContainer: createContainer, // createContainer
    createSlides: createSlides, // createSlides
    dotNav: dotNav, // generate dotnav elements
    dotNavEvent: dotNavEvent, // register dotNavEvent
    paddleHandler: paddleHandler
  };
}

// SAMPLE SESSION FOR DEVELOPMENT PURPOSES
// create new gallery object
var gallery = new Gallery();
var slides = []; // slides array stores slide objects
// gallery.addSlide("slide 1", "imgsrc.jpg", slides); // invocation of a new slide
gallery.addSlide("slide1", "img/img1.jpg", slides ); // addSlide along with slide name, image path, and project array
gallery.addSlide("slide2", "img/img2.jpg", slides );
gallery.addSlide("slide3", "img/img3.jpg", slides );
gallery.addSlide("slide4", "img/img4.jpg", slides );
gallery.addSlide("slide5", "img/img5.jpg", slides );
gallery.defaultSlideState( slides ); // on init, this should be set as a promise, to execute asynchronously when a slide object is available
var el = document.getElementById("attach"); // set element declaration to with element to append gallery to
gallery.createContainer( el, slides ); // create gallery container
gallery.createSlides( slides ); // create slides
gallery.dotNav( slides ); // create dotnav
gallery.paddleHandler( gallery, slides ); // handle paddle navigation
gallery.dotNavEvent( slides );
