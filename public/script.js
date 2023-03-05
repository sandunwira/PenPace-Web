// CONTEXT MENU START ============================================================================ //
document.addEventListener("contextmenu", function(event) {
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

document.addEventListener("click", function(event) {
	var menu = document.getElementById("contextMenu");
	menu.style.display = "none";
});
// ============================================================================== CONTEXT MENU END //


// SHORTCUT DISABLE START ======================================================================== //
document.addEventListener("keydown", function(event) {
	// Prevent default action for F5, Ctrl+R, and Ctrl+F5
	if (event.keyCode === 116 || (event.ctrlKey && event.keyCode === 82)) {
		event.preventDefault();
	}
	if (event.ctrlKey && event.keyCode === 116) {
		event.preventDefault();
		location.reload(true);
	}
	// Prevent default action for Ctrl+Shift+I
	if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
		event.preventDefault();
	}
});
// ========================================================================== SHORTCUT DISABLE END //