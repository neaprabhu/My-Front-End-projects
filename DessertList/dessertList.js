//Write the JavaScript code that adds a new dessert to the list when the user clicks on the button. The dessert name is chosen by the user.
//Bonus points for adding the possibility of changing a dessert’s name when clicking on it.


//Write-Your-Code-Here
//Event handler function to be called when addButton is clicked
const handleEvent = e => {
    //Prompt the user to enter a Dessert name
    let dessertEntry = prompt("Enter a dessert to add to the list");
    //Create an li elment that can then be added to the ul as a child
    const liElement = document.createElement("li");
    liElement.textContent = dessertEntry;
    liElement.addEventListener("click", () => {
        let dessertEntry = prompt("Enter new dessert name");
        liElement.textContent = dessertEntry;
    });
    document.getElementById("desserts").appendChild(liElement);
}

//Add event handler to the click me button
const buttonElement = document.getElementById("addButton");
buttonElement.addEventListener("click", handleEvent);
