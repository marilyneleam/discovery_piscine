const colors = ['red', 'orange', 'yellow', 'green', 'blue']
let colorIndex = 0;

function changeColor(color) {
	document.body.style.background = colors[colorIndex];
	colorIndex = (colorIndex + 1) % colors.length;
}