# gallry.js
## Overview
Gallry.js is a javascript api that generates a responsive image gallery slider with minimal amounts of code needed to implement. Gallry.js also has customizable timing and easing abilities, along with the ability to change navigation colors* based on project specifications as well as loop functionality. It is fully responsive, with size properties declared by the container element it is appended to. Gallry.js is touch enabled and developed with mobile and touch devices in mind. Adding this script to your project will allow for fully responsive galleries in mobile and desktop settings.

## Implementation

### Javascript 
Creating a new gallery is quick and easy to do. Gallry.js relies on one other javascript library, Velocity.js, authored by Julian Shapiro, to handle gallery animations. Your html file should reference the velocity.js script followed by gallry.js and your script file.

```
<script src="velocity.js"></script>
<script src="gallry.js></script>
<script src="your_script.js></script>
```

Within your script, create a new instance of the Gallery object.

```
var gallry = new Gallery();
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
Next, add your slides. The addSlide method on the Gallery requires several parameters. The first is a string argument with the name of the slide you're adding. Second parameter is currently disabled, but requires a string regardless for successful implementation. The last parameter is the name of the gallery array mentioned above. Using the example above, a slide instantiation would look like:
```
gallry.addSlide("homer", "img/homer.jpg", slides);
```
### init(object, array, element)
After you have added all of your desired slides, you are ready to initialize the gallery. The variables declared earlier will allow us to create the gallery. Using the variables declared above, an example instantiation looks like:
```
gallry.init(gallry, slides, el);
```
### preferences(timing, easing, loop)
Preferences are not required for gallry.js to operate. If you opt out of using the preferences method on your gallery, the gallery will use default settings to handle sliding transitions and timing. The timing argument accepts a number, as detailed in javascript standards, milliseconds. The easing argument accepts an easing string property. These follow the javascript standard for style easing declarations eg. "easeInOut". The loop argument declares the ability to loop to the first slide from the last slide and vice versa. It takes a boolean value - true will allow looping, false will disable this feature.
Default values for these arguments listed in example below:
```
gallry.preferences(300, "ease", false);
```

## CSS
### Get the gallry.css file
In your html document, reference the gallry.css file before your main css file. 
```
<link rel="stylesheet" href="css/gallry.css"/>
<link rel="stylesheet" href="css/style.css"/>
```
### Define your css backgrounds
Target the slide name class defined in the addSlide method detailed above using css to declare your background image styles. Default settings will be applied to the .slide class which can be modified in your declared class. 
```
#gallry .slides .homer {
  background-image: url("img/homer.jpg");
}
```
Default settings will be applied to the .slide class which can be modified in your declared class. 
```
#gallry .slides .homer {
  background-image: url("img/homer.jpg");
  background-position: left top;
}
```

## Considerations 
You may be asking, "Will gallry.js work with jQuery?" While you can add this script into a page using jQuery, this library needs declarations to instantiate written in vanilla javascript. 






