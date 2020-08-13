Project 4 - Flex Image Project

	• In this project we basically play with the flexbox framework in CSS
	• The structure that is used in this particular wes bos project is that you will have a parent div that will house seveal child divs
	• The concept here is to setup the flexbox on the parent DIV and then apply the various flex features to the children divs
	• So in this project, the parents div is the one with class = panels (plural) and the child div are the ones with class = panel (singular)
	• In the CSS for the parent div .panels we will issue the following:
		○ Display: flex
			§ Note this will horizontally stack the child divs
	• In the CSS for the child divs .panel we need to tell browser to render the divs to take up allocated free space
		○ Flex: 1
	• An element can be both a flex container as well as a flex item
	• So for the contents that are inside each of the column images we want to treat them as well as flexbox items
		○ To do this, we need to setup the "child" divs as flex containers as well
			§ Display: flex
	• In this wes bos project we basically need to add flex to main DIV (which controls the images)
	• Also need to add display flex to each individual image so thatt we can control the boxes within each image
	• And then finally we need to add flexbox to the indivudal boxes inside each image as well, so that we can control the position of the text inside each box
	• So basically a total of of 3 layers
	• Now to basically put the whole thing together we need add JavaScript that will listen for a click and a transitionend event to each panel
		○ On click it will make the flex = 5
  * On 'transitionend' it will bring it the upper text from the top and the lower text from the bottom
