let tit = document.getElementById("title");
let activate = document.getElementsByClassName("list");
let lists = document.getElementsByClassName("recipe");

activate[0].addEventListener("click", function(){
if(lists[0].style.display === "none"){
	lists[0].style.display = "grid";
	lists[0].style.justifyContent = "center";
	lists[0].style.gridTemplateColumns = "12rem 12rem 12rem 12rem";
	lists[0].style.margin = "0 auto";
	lists[0].style.width = "100%";
	
}
else{
	lists[0].style.display = "none";
}

})
