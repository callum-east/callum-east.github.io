function hideDir() {
	var dir = document.getElementById("directory");
	var content = document.getElementById("content");
	var topbar = document.getElementById("mutable-topbar");
	if (dir.style.display === "block") {
		dir.style.display = "none";
		content.style.margin = "0% 0% 0% 20%";
		topbar.style.margin = "0% 0% 0% 0%";
		setTimeout(() => {
			dir.style.width = "0%";
		}, 10);
	} 
	else {
		dir.style.display = "block";
		content.style.margin = "0% 0% 0% 30%";
		topbar.style.margin = "0% 0% 0% 20%";
		setTimeout(() => {
			dir.style.width = "20%";
		}, 10);
	}
}
