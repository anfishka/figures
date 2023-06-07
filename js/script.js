var circle = document.getElementById("circle");
const colors = ["var(--red)", "var(--orange)", "var(--green)", "var(--purple)"];

for (let i = 0; i <= colors.length; i++){
    var circleEl = document.createElement("div");
    circleEl.className = "circle_el_" + (i + 1)
    circleEl.style.backgroundColor = colors[i];
    circle.appendChild(circleEl);
}


