const container = document.createElement("div");
container.classList.add("container");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("btns");

const reset = document.createElement("button");
reset.textContent = "Clear sketch";

const reso = document.createElement("button");
reso.textContent = "Press to change resolution";

document.body.appendChild(buttonContainer);
buttonContainer.appendChild(reset);
buttonContainer.appendChild(reso);
document.body.appendChild(container);

//Utility and helper Functions

// Draw Canvas
function drawCanvas() {
	container.style.cssText = `grid-template-columns: repeat(${resolution}, auto); grid-template-rows: repeat(${resolution}, auto);`;

	for (let i = 0; i < resolution * resolution; i++) {
		var div = document.createElement("div");
		div.classList.add("grid-item");
		div.style.textAlign = "center";
		//div.textContent = i + 1;
		container.appendChild(div);
	}
}

// Reset canvas cells
function removeNodes(dadNode) {
	while (dadNode.hasChildNodes()) {
		dadNode.removeChild(dadNode.firstChild);
	}
}

function resetSketch() {
	removeNodes(container);
	drawCanvas();
}

function sketchDraw(e) {
	if (e.target.className == "grid-item") {
		e.target.style.backgroundColor = `rgb(${e.clientX / 3 + 25}
            ,${e.clientY / 3}
			,0${(e.clientX % e.clientY) % 225}`;
		e.target.style.opacity -= "-0.19";
	}
}

function setResolution() {
	resolution = prompt("Enter new resolution");
}
// Initial canvas on Load
let resolution = 64;
let opacity = 0.3;
drawCanvas();
// Event Listeners
reso.addEventListener("click", () => {
	setResolution();
	resetSketch();
});
reset.addEventListener("click", resetSketch);
window.addEventListener("mouseover", sketchDraw);
