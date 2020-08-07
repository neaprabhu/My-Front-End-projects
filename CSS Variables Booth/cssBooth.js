const root = document.documentElement;
const range = document.querySelector('.booth-slider');

range.addEventListener('input', handleSlider);

function handleSlider(e) {
    let value = e.target.value;
    root.style.setProperty('--slider', value);
}

const inputs = document.querySelectorAll('.color-box > input');

inputs.forEach(input => {
    input.addEventListener('input', handleInputChange);
})

function handleInputChange(e) {
    let value = e.target.value;
    let inputId = e.target.parentNode.id;
    let inputBg = `--bg-${inputId}`;
    root.style.setProperty(inputBg, value);
}