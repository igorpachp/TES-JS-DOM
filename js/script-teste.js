// container divs
const buttonsBlock = createButtonsBlock();
const mainBlock = createMainBlock();

// buttons
const incButton = createIncButton();
const resetButton = createResetButton();

// variables
let numberOfCircles = 0;
let hiddenStack = []; // stack keeping hidden circles

function createMainBlock() {
    const mainBlock = document.createElement("div");

    mainBlock.id = "main";
    document.body.appendChild(mainBlock);

    return mainBlock;
}

function createButtonsBlock() {
    const buttonsDiv = document.createElement("div");

    buttonsDiv.id = "buttons";
    document.body.appendChild(buttonsDiv);

    return buttonsDiv;
}

function createIncButton() {
    const incButton = document.createElement("button");
    incButton.innerHTML = "+1 circle";
    incButton.onclick = () => {increaseCircleCount()};

    buttonsBlock.appendChild(incButton);

    return incButton;
}

function createResetButton() {
    const rButton = document.createElement("button");
    rButton.innerHTML = "reset circles";
    rButton.onclick = () => {resetCirclesDisplay()};

    buttonsBlock.appendChild(rButton);

    return rButton;
}

function increaseCircleCount(){
    createCircle();
    numberOfCircles++;
};

function createCircle() {
    const newCircle = document.createElement("div");

    newCircle.classList.add("circle");
    newCircle.onclick = () => {hide_circle(newCircle)};
    if (numberOfCircles % 3 == 0) {
        color = 'red';
    } else if (numberOfCircles % 3 == 1) {
        color = 'blue';
    } else  {
        color = 'yellow';
    }
    newCircle.id = color;

    mainBlock.appendChild(newCircle);

    return newCircle;
}

function hide_circle(element) {
    element.style.display = "none";
    hiddenStack.push(element);
};

function resetCirclesDisplay() {
    while (hiddenStack.length > 0) {
        element = hiddenStack.pop();
        element.style.display = 'block';
    }
}
