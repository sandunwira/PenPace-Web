document.addEventListener("contextmenu", function (event) {
	event.preventDefault();
	var menu = document.getElementById("contextMenu");
	menu.style.display = "block";
	if (event.pageX + menu.offsetWidth > window.innerWidth) {
		menu.style.left = (event.pageX - menu.offsetWidth) + "px";
	} else {
		menu.style.left = event.pageX + "px";
	}
	if (event.pageY + menu.offsetHeight > window.innerHeight) {
		menu.style.top = (event.pageY - menu.offsetHeight) + "px";
	} else {
		menu.style.top = event.pageY + "px";
	}
});

document.addEventListener("click", function (event) {
	var menu = document.getElementById("contextMenu");
	menu.style.display = "none";
});