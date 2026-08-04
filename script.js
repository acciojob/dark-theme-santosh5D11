//your code here
function swapTheme(){
	const app = document.getElementById("app");
	const button = document.getElementById("swap");

	app.classList.toggle("day");
	app.classList.toogle("night");

	button.classList.toggle("button_day");
	button.classList.toggle("button_night")
}
