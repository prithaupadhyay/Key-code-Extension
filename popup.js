
// var y=document.getElementById("data");

// y.addEventListener("keydown",function(){
// 	var p=y.keyCode;
// 	document.getElementById("generatedcode").innerHTML=p;
// });

document.getElementById("data").addEventListener("keydown",function(event){
	var x=event.keyCode;
	document.getElementById('generatedcode').innerHTML=" "+ x+" ";
	document.getElementById("data").value="";                                               //To backspace the key after each press

})