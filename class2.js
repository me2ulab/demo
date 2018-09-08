var item=document.getElementById("item");
var button=document.getElementById("add");
var ul=document.querySelector("ul");
var li=document.querySelector("li");
li.addEventListener("click",function(){
	li.classList.toggle("done");
});
function inputLenght(){
	return item.value.length;
}
function createNewItem()
{
	var li=document.createElement("li");
		li.appendChild(document.createTextNode(item.value));
		ul.appendChild(li);
		item.value="";
}
function addListAfterClick()
{
	if(inputLenght()>0)
	{
		createNewItem();
	}
}
function addListAfterEnter(event){
	if(inputLenght()>0 && event.keyCode===13)
	{
		createNewItem();
	}
	
}
button.addEventListener("click",addListAfterClick);
item.addEventListener("keypress",addListAfterEnter);
var btn=document.getElementsByClassName("btn");
btn.addEventListener("click",function(){
	
});