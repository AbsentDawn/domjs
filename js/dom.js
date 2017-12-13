function doc() {
	var myName = document.getElementsByClassName("lorem");
	
	console.log(myName);
	myName[0].innerHTML = "<p>Change in Text</p>";
}

