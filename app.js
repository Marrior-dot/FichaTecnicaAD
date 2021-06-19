let tit = document.getElementById("title");
let activate = document.getElementsByClassName("list");
let lists = document.getElementsByClassName("recipe");

activate[0].addEventListener("click", function(){
	lists[0].style.display = "flex";
	lists[0].style.flexDirection = "column";
	lists[0].style.width = "60%";
	lists[0].style.alignItems = "start";
})
