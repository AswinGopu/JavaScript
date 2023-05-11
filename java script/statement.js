function checkItem(){
    var textinput = document.getElementById("txt").value;

    if (textinput == "aswin") {
       document.getElementById("res").innerText = "welcome aswin";
       document.getElementById("txt").value =""; 
    } else {
        document.getElementById("res").innerText = "invalid input.... ";
        document.getElementById("txt").value =""; 
    }
}