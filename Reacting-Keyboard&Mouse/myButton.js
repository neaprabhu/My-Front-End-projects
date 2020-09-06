const showMessage = () => {
    alert("Hello, it's Navin!");
}

const buttonElement = document.getElementById("myButton");
buttonElement.addEventListener("click", showMessage);
buttonElement.addEventListener("click", e => {
    console.log(`Event Type: ${e.type}, target: ${e.target}`);
});

document.addEventListener("keypress", e => {
    console.log(`You pressed the ${String.fromCharCode(e.charCode)} key`);
});

const getMouseButton = code => {
    let button = "unknown";
    switch (code) {
        case 0:
            button = "left";
            break;
        case 1:
            button = "middle";
            break;
        case 2:
            button = "right";
            break;
    }
    return button;
};

const mouseInfo = e => {
    console.log(
        `Mouse event: ${e.type}, button: ${getMouseButton(e.button)}, X: ${e.clientX}, Y: ${e.clientY}`
    );
};

document.addEventListener("click", mouseInfo);
document.addEventListener("mousedown", mouseInfo);
document.addEventListener("mouseup", mouseInfo);
