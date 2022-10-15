// container divs
const buttonsBlock = createButtonsBlock();
const mainBlock = createMainBlock();

// buttons
const incButton = createIncButton();

// variables
let numberOfCircles = 0;

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

function hide_circle(element){
    element.style.display = "none";
};
