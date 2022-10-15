// container divs
const buttonsBlock = createButtonsBlock();
const mainBlock = createMainBlock();

// buttons
const incButton = createIncButton();
const resetButton = createResetButton();
const decButton =  createDecButton();

// variables
let numberOfCircles = 0;
let hiddenStack = []; // stack keeping hidden circles

// creating container divs
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

// creating buttons
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

function createDecButton() {
    const decButton = document.createElement("button");
    decButton.innerHTML = "-1 circle";
    decButton.onclick = () => {decreaseCircleCount()};

    buttonsBlock.appendChild(decButton);

    return decButton;
}

// interactive functions
// this function adds a circle to the total count
function increaseCircleCount(){
    createCircle();
    numberOfCircles++;
};

// this function is responsible for 
// actually creating the new circle
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

// this function removes a circle from the screen
// by changing it's display to 'none'
// the element is not removed from DOM,
// instead it is moved to a stack with
// other hidden circles
function hide_circle(element) {
    element.style.display = "none";
    hiddenStack.push(element);
};

// this function removes all circles from the 
// stack of hidden elements, making them visible again
function resetCirclesDisplay() {
    while (hiddenStack.length > 0) {
        element = hiddenStack.pop();
        element.style.display = 'block';
    }
}

// this function decreases the number of circles
// and actually deletes it from DOM
function decreaseCircleCount(){
    element = null;

    // if there are hidden circles,
    // they will be deleted first
    if (hiddenStack.length > 0) {
        element = hiddenStack.pop();
    } else {
    	// elements are deleted first to last created
        if (numberOfCircles > 0) {
            element = mainBlock.firstChild;
        }
    }

    if (element != null) {
        mainBlock.removeChild(element);
        numberOfCircles--;
    }
};