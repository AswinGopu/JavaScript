function checkItem(){
var a = parseInt(document.getElementById('num1').value)
var b = parseInt(document.getElementById('num2').value)
var c = parseInt(document.getElementById('num3').value)

if (a>b && a>c) {
    document.getElementById("res").innerText = a+"is large";
    document.getElementById("num1").value =""; 
    document.getElementById("num2").value =""; 
    document.getElementById("num3").value =""; 
}else if (b>a && b>c) {
    document.getElementById("res").innerText = b+"is large";
    document.getElementById("num1").value =""; 
    document.getElementById("num2").value =""; 
    document.getElementById("num3").value =""; 
}else{
    document.getElementById("res").innerText = c+"is large";
    document.getElementById("num1").value =""; 
    document.getElementById("num2").value =""; 
    document.getElementById("num3").value =""; 
}
}