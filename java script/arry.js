const input = document.querySelector("#input");
const myfun = document.querySelector("#myfun");
const res = document.querySelector(".res");


let arr = [];
myfun.addEventListener("submit",(e)=>{
    e.preventDefault();
    res.innerHTML = "";
    arr.push(input.value)
    for(let i =1 ; i<= arr.length;i++){
        res.innerHTML(arr[i])
    }
}
)

