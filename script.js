// array list
var galleryArray = ["img/gallery1.jpg", "img/gallery2.jpg", "img/gallery3.jpg"];
var gallery = document.getElementById("gallery");

function imageUpload() {
  var submit = document.getElementById("btn-upload");
  submit.addEventListener("click", function(e) {
    var getItems = document.getElementById("add-img").value;
    // this will need to integrate html5 local storage properties
  }, false);
}

// create elements and propagate along with array item content
function buildGallery( list, container ) {
  for (var i = 0; i < list.length; i++) {
    // create image element - figure tag
    var img = document.createElement("figure");
    img.classList.add( "img" ); // add class
    img.style.backgroundImage = "url(" + list[i] + ")"; // assign background-image content
    container.appendChild(img);
  }
}

buildGallery( galleryArray, gallery );
