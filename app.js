let tit = document.getElementById("title");
let activate = document.getElementsByClassName("list");
let lists = document.getElementsByClassName("recipe");

activate[0].addEventListener("click", function(){
if(lists[0].style.display === "none"){
	lists[0].style.display = "grid";
	lists[0].style.gridTemplateColumns = "8rem 8rem"
	lists[0].style.margin = "0 auto";
	lists[0].style.marginTop = "0.5rem";
	lists[0].style.width = "70%";
	
}
else{
	lists[0].style.display = "none";
}

})
