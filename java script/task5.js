const reg = document.querySelector("#range");
const arch = document.querySelector("#arch");
const abc = document.querySelector("#abc");
// reg.addEventListener("change", () => {
// abc.style.borderRadius = reg.value + "%";
let i = 0;
setInterval(() => {
    abc.style.width = arch.value+"px";
    abc.style.height = arch.value+"px";
    if (i % 2 == 0) {
        abc.style.transform = "rotate(" + i * 5 + "deg)";
    } else {
        abc.style.borderRadius = reg.value + "%";
    }
    i++;
}, 1)