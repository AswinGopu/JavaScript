const input = document.querySelector("#input");
const res = document.querySelector(".res");
const myfun = document.querySelector("#myfun");

myfun.onsubmit = (e) => {
    e.preventDefault();
    let num = parseInt(input.value);
    res.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        res.innerHTML += "" + i + "x" + num + "=" + i * num + "<br>";
    }
    input.value = "";
}

