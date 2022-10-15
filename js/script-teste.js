//  page elements
const mainBlock = createMain();

const c_blue = createCircle("blue");
const c_red = createCircle("red");
const c_yellow = createCircle("yellow");

function createMain() {
    let mainBlock = document.createElement("div");
    mainBlock.classList.add("main");
    document.body.appendChild(mainBlock);

    return mainBlock;
}

function createCircle(color) {
    const newCircle = document.createElement("div");
 
    newCircle.classList.add("circle");
    newCircle.id = color;
    newCircle.onclick = () => {hide_circle(newCircle)};

    mainBlock.appendChild(newCircle);

    return newCircle;
}

function hide_circle(element){
    element.style.display = "none";
};
