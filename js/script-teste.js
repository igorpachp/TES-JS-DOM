//  page elements
const c_blue = createCircle("blue");
const c_red = createCircle("red");
const c_yellow = createCircle("yellow");

function createCircle(color) {
    let newCircle = document.createElement("div");
    newCircle.classList.add("circle", color);
    document.body.appendChild(newCircle);

    return newCircle;
}
