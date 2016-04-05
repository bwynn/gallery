# gallry.js
## Overview
Gallry.js is a javascript api that generates a responsive image gallery slider with minimal amounts of code needed to implement. Gallry.js also has customizable timing, easing, looping and retina settings. It is fully responsive, with size properties declared by the container element it is appended to. Gallry.js is touch enabled and developed with mobile and touch devices in mind. Adding this script to your project will allow for fully responsive galleries in mobile and desktop settings.

## Installation
Gallry.js is available via GitHub, and is set best installed into a project using Bower. For more information on bower, visit http://bower.io.

Add gallry to your bower.json dependencies, or from the command line, type:

```
bower install gallry
```

## Getting Started
Creating a new gallery is quick and easy to do. Gallry.js relies on one other javascript library, Velocity.js, authored by Julian Shapiro, to handle gallery animations. Your html file should reference the velocity.js script followed by gallry.js and then your script file.
```
<script src="bower_components/velocity/velocity.js"></script>
<script src="bower_components/gallry/gallry.js></script>
<script src="your_script.js></script>
```
Create a new instance of the gallery within your current scope.

```
var getGallery = gallry.gallery(); // instantiate a new gallery
var gallry = getGallery;
```
Create a gallery array variable to add your slides to. You can name it whatever you like, but this array stores the slide objects created using the addSlide method.
```
var slides = [];
```
Get the element you are attaching gallry.js into.
```
var el = document.getElementById("gallery-container");
```
### addSlide(str, str, array)
Next, add your slides. The addSlide method on the Gallery requires several parameters. The first is a string argument with the name of the slide you're adding. Second parameter is defines the image path as a string. The third parameter is the name of the gallery array mentioned above. Using the example above, a slide instantiation would look like:
```
gallry.addSlide("homer", "img/homer.jpg", slides);
```
### init(object, array, element)
After you have added all of your desired slides, you are ready to initialize the gallery. The variables declared earlier will allow us to create the gallery. Using the variables declared above, an example instantiation looks like:
```
gallry.init(gallry, slides, el);
```

### Get the gallry.css file
In your html document, reference the gallry.css file before your main css file.
```
<link rel="stylesheet" href="bower_components/gallry/css/gallry.css"/>
<link rel="stylesheet" href="css/style.css"/>
```

## Customization

### preferences(timing, easing, loop, retina)
Preferences are not required for gallry.js to operate. If you opt out of using the preferences method on your gallery, the gallery will use default settings to handle sliding transitions and timing.

The timing argument accepts a number in milliseconds.

The easing argument accepts a string value. This should match style easing declarations eg. "easeInOut".

The loop argument declares the ability to loop to the first slide from the last slide and vice versa. It takes a boolean value - true will allow looping, false will disable this feature.

The retina argument when enabled, takes the image source string and slices it and adds an underscored 2x to the string. This will require 2x images to be available, and as such, the file name needs to match the format. There is no fallback for the retina feature, so if you declare this argument "true", and no 2x assets are available or are not using the correct file format "image_2x.jpg", for example, the gallery will display blank, and no error is thrown. Default value is set to false. If you leave this argument value as false, the 1x assets will work on both retina and non-retina viewports.

Default values for these arguments listed in example below:
```
gallry.preferences(300, "ease", false, false);
```

### backgroundCtrl(array, index, background-size, background-position)
The backgroundCtrl method takes 4 arguments, and gives you fine grained control of how your images are displayed, similar to how you would control them via css. The first argument is the slides array that you have defined for your gallery. The second argument will be your zero-based index for the slide you would like to modify. The background-size argument takes a string value matching background-size values for css styles. 

The background-position argument takes a string value that matches the background-position values in css, it can take a one word string eg."top", or could take multiple values within one string eg."bottom right".
