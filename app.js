let tit = document.getElementById("title");
let activate = document.getElementsByClassName("list");
let lists = document.getElementsByClassName("recipe");
let field = document.getElementsByTagName("fieldset");


activate[0].addEventListener("click", function(){
if(lists[0].style.display === "none"){
	lists[0].style.display = "grid";
	lists[0].style.gridTemplateColumns = "repeat(auto-fit,minmax(10rem,1fr))";
	lists[0].style.gridGap = "1rem";
	lists[0].style.gridTemplateAreas = "a img img a";
	fieldset.style.width = "min(100rem, 80%)";
}
else{
	lists[0].style.display = "none";
}

})
