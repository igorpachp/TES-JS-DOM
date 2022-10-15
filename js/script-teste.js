//  page elements
const c_blue = createCircle("blue");
const c_red = createCircle("red");
const c_yellow = createCircle("yellow");

function createCircle(color) {
    const newCircle = document.createElement("div");
    newCircle.classList.add("circle");
    newCircle.id = color;
    newCircle.onclick = () => {hide_circle(color)};
    document.body.appendChild(newCircle);

    return newCircle;
}

function hide_circle(color){
    const target = document.getElementById(color);
    target.style.display = "none";
};
