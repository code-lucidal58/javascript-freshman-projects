# video-player

Ref: https://freshman.tech/custom-html5-video/

This webpage bypasses <video> tag in HTML to play videos, as each browser implements the video playing functionalities
differently and user may not have a consistent experience through browsers. Hence, this play is a customised interface 
using HTML5. The following will be the features of the video player:
* Video and audio playback
* Native fullscreen
* Picture-in-Picture
* Custom controls
* Keyboard shortcuts


## APIs used
* HTML5 Media API

## JavaScript concepts learnt
* Shorthand to cast a variable to be boolean (!!)
* Events for a video tag. play/pause/loadmetadata
* Toggle (add/remove) class from classlist of an element
* Add simple animations using `animate` object
* Toggling between SVG images

## Changes
* Updated `seek` and `progressBar` value to 0 in `initializeVideo` function.
* Change the event type from `input` to `click` for `seek` while attaching `skipAhead` function.
* The above change works either way.
