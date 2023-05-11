const num = document.querySelector("#abc");
const btn = document.querySelector("#btn");
const res = document.querySelector(".res");
btn.onclick = () => {
    res.innerHTML = "";
    let i = 1;
    while (i <= 10) {
        res.innerHTML += "" + i + "x" + num.value + "=" + eval(i * parseInt(num.value)) + "<br>";
        i++;
    }

//     for (var i = 1; i <= 10; i++); {
//         res.append("" + i + "x" + num.value + "=" +(i * parseInt(num.value)) + "\n");
//     }
// }

}