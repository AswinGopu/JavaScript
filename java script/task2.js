function CheckItem(){
    var numinput = parseInt(document.getElementById("num").value)

    if (numinput %2==0) {
        document.getElementById("as").innerText = "number is even";
        document.getElementById("num").value ="";
    } else {
        document.getElementById("as").innerText = "number is odd";
        document.getElementById("num").value ="";
    }
}