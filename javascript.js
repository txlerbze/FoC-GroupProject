// Track the state of inputs
let isInputOneOn = false;
let isInputTwoOn = false;

// Function to toggle an image based on its ID
function toggleImage(imageId) {
    const imgOff = "https://www.iconsdb.com/icons/preview/red/button-off-xxl.png";
    const imgOn = "https://www.iconsdb.com/icons/preview/green/button-on-xxl.png";
    const imgElement = document.getElementById(imageId);

    if (imgElement) {
        imgElement.src = (imgElement.src === imgOff) ? imgOn : imgOff;
    }
}

// Toggle functions for input states
function toggleInputOne() {
    isInputOneOn = !isInputOneOn;
}

function toggleInputTwo() {
    isInputTwoOn = !isInputTwoOn;
}

// Function to perform the AND operation
function andOperation() {
    const result = isInputOneOn && isInputTwoOn;
    updateAndResultDisplay(result);
}

// Update the display for the AND result
function updateAndResultDisplay(isOn) {
    const resultElement = document.getElementById('andResult');
    if (resultElement) {
        resultElement.textContent = isOn ? 'AND Result: ON' : 'AND Result: OFF';
        resultElement.style.color = isOn ? 'green' : 'red';
    }
}
