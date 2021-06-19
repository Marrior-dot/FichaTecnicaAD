let tit = document.getElementById("title");
let activate = document.getElementsByClassName("list");
let lists = document.getElementsByClassName("recipe");

activate[0].addEventListener("click", function(){
	lists[0].style.display = "grid";
	lists[0].style.backgroundColor = "#8C8C8C";
	lists[0].style.margin = "0 auto";
	lists[0].style.width = "20%";
	lists[0].style.alignItems = "center";
})
