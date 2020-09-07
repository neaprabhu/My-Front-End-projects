//Write-Your-Code-Here
//handleEvent function that is called when a key is pressed
const handleEvent = e => {
    console.log(String.fromCharCode(e.charCode));
    const divElements = Array.from(document.getElementsByTagName("div"));
    divElements.forEach(divElement => {
        switch (String.fromCharCode(e.charCode).toUpperCase()) {
        case 'R':
            divElement.style.backgroundColor = "red";
            break;
        case 'G':
            divElement.style.backgroundColor = "green";
            break;
        case 'B':
            divElement.style.backgroundColor = "blue";
            break;
        case 'Y':
            divElement.style.backgroundColor = "yellow";
            break;
        default:
            console.log("Keypressed is not a valid color key");
            break;
        }
    })
    
}



//Capture the key that is pressed, and then call handleEvent function
const pressedKey = document.addEventListener("keypress", handleEvent);
