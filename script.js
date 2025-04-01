function dark_light_mode(){
	const background_color = document.body.style.backgroundColor == "black";
	const color = document.body.style.color == "white";
	if(background_color && color){
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
		let link = document.getElementsByClassName("links")
		for(let i=0;i<link.length;i++){
			link[i].style.borderRight = "2.5px black solid";
		}
		document.getElementById("dark_light_mode").value="Dark Mode";
	}
	else{
		document.body.style.backgroundColor = "black";
		document.body.style.color="white";
		document.getElementById("dark_light_mode").value="Light Mode";
		let link = document.getElementsByClassName("links")
		for(let i=0;i<link.length;i++){
			link[i].style.borderRight = "2.5px white solid";
		}

	}
}
