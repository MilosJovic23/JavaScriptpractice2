//

for (i = 0; i < 36; i++) {
	let newDiv = document.createElement("div");
	newDiv.setAttribute("class", "grid-item");
	document.getElementById("containerID").appendChild(newDiv);
	const ostatak = i % 2;
	if (ostatak == 0) {
		newDiv.style.backgroundColor = "#F48668";
	} else {
		newDiv.style.backgroundColor = "#111F23";
	}
	document
		.getElementsByClassName("grid-item")
		[i].addEventListener("click", function () {
			this.style.backgroundColor = "white";
			const slika = document.createElement("img");
			slika.setAttribute("src", "slika1.jpg");
			slika.style.width = "50px";
			this.appendChild(slika);
			console.log("nesto");
		});
}

//
