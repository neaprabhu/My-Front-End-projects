This project is all about the concept of persistent and event delegation 

* So basically when you refresh a page items that were previously added or changes will still stay the same and NOT reset 

* Event delegation is basically writing code for events on items that have not yet been created or are part of the DOM just yet 

  * Basically what you are doing here, is adding an event listener on a parent element that DOES exist in the DOM 

  * Then within the event handler you check for the actual child item that you are really interested in 

* We start off the JavaScript by listening for a submit event on the form element 

  * What we will notice is that once we click the add item button, any console logs in the event handler functtion will display to the console but will immediately be removed as the page refreshes 

  * This is a property of form submission 

  * This needs to be explicitly disabled within the JavaScript code 

  * We use the event.pageDefault() method that will prevent the page from reloading 

  * Form elements have a reset method that you can call to reset the entire form 

  * The next part of this project is creating a function that will display the list each time an item is added to the form 

    * For this we need to save all items entered in to an array 

    * Each item will be an object wil contain 

      * Item name 

      * Display flag (true/false) 

    * This function will basically return HTML that we will add to the <ul> innerHMTL so that the function will render the list with required HTML 

    * One thing to watch for in the code is that the <input> and <label> are bound together with the "for = " attribute in the label 

      * <label for="item${i} " - this line will match the id of the input to the for of the label 

<img src="preview.png">
