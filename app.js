let tit = document.getElementById("title");
let activate = document.getElementsByClassName("list");
let lists = document.getElementsByClassName("recipe");


activate[0].addEventListener("click", function(){
if(lists[0].style.display === "none"){
	lists[0].style.display = "grid";
	lists[0].style.gridTemplateColumns = "repeat(auto-fit,minmax(10rem,1fr))";
	lists[0].style.gridGap = "1rem";
	lists[0].style.marginTop = "1rem";
	lists[0].style.paddig = "0 1rem";
}
else{
	lists[0].style.display = "none";
}

})
