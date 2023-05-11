const a = document.querySelector("#num1");
const b = document.querySelector("#num2");
const c = document.querySelector("#num3");
const abd = document.querySelector("#abd");
const res = document.querySelector("#res");

abd.addEventListener("click", () => {
    if (a.value > b.value && a.value > c.value) {
        res.innerHTML = a.value + "is large number";
        a.value = "";
        b.value = "";
        c.value = "";
    } else if (b.value > a.value && b.value > c.value) {
        res.innerHTML = b.value + "is large number";
        a.value = "";
        b.value = "";
        c.value = "";
    } else {
        res.innerHTML = c.value + "is large number";
        a.value = "";
        b.value = "";
        c.value = "";
    }
});