
// var y=document.getElementById("data");

// y.addEventListener("keydown",function(){
// 	var p=y.keyCode;
// 	document.getElementById("generatedcode").innerHTML=p;
// });

document.body.addEventListener("keydown",function(event){
	document.getElementsByClassName('text-display')[0].style.visibility = 'hidden';
	var x = event.keyCode;
	document.getElementById('generatedcode').innerHTML=" " + x + " ";
	// document.getElementById("data").value="";                                               //To backspace the key after each press
})