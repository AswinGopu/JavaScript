const myfun = document.querySelector("#myfun");
const input =document.querySelector("input");
const res = document.querySelector("#res");

myfun.addEventListener("submit", (event)=>{
    event.preventDefault();
    res.innerHTML="ashwin";
    let num= parseInt(input.value);
    if(num <=50){
        let i=1;
        while (i<=num) {
            res.innerText+= i +"<br>";
            i++
        }
    }else{
        res.innerHTML+= "invalid input...";
        
    }
})