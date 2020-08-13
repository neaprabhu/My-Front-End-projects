Creating a simple clock using JavaScript and CSS

Project 2 - JavaScript Clock

	• Important topics and concepts covered:
		○ Use of the transform-origin CSS property to make sure that the hand div will rotate around the center of the clock
		○ Use of the transform CSS property to rotate the div from its default horizontal/flat position to a vertical position so that its starts at the "12 o clock" position (this is important to make sure that 0 seconds, 0 minutes, etc. correspond to the 12 o clock position)
		○ We added a cool CSS property called transition-timing-function and used a cubic-bezier function to give it a cool non-linear transition effect as the hand moves around the face of the clock
		○ I had 2 buttons to the page called "Mute Me" and "Unmute Me" to control the volume setting of a wav file that is playing (tick tick)
			§ For this I added an audio html tag to the DOM
		○ I also made both the buttons and the main clock div as flexbox objects so that I could align the items to the center of the screen
			§ For this I set the flex-direction: column in the body CSS section of style
		○ Given the formula used for seconds/minutes/hour to Degree conversion
			§ Based on percentage of 360 degrees
			§ There is an issue when the seconds (or any other hand) reaches the 0 mark again, there is a blip on the clock
      § Currently investigating how to handle this so that there is a smooth and continuous flow on the clock face

![Interface](UI.PNG)
