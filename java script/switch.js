const a =document.querySelector("#d");
const btn = document.querySelector("btn");
const res = document.querySelector("#res");
btn.onclick()("click",()=> {
alert()
    switch (a.value) {
        case "1":
            res.innerHTML = "apple";
            break;
        case "2":
            res.innerHTML = "orange";
            break;
        case "3":
            res.innerHTML = "mango";
            break
        default:
            res.innerHTML = "select your choice..";
            break;
    }
})