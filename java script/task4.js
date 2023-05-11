const res = document.querySelector(".even");
const odd = document.querySelector(".odd");
const n = document.querySelector(".n");
const num = document.querySelector("#abc");
const btn = document.querySelector("#btn");

btn.onclick = () => { 
   res.innerHTML = "";
   res.style.color = "gray"
   odd.innerHTML = "";
   odd.style.color = "purple"
   n.innerHTML = ""; 
   n.style.color = "blue"
   if (parseInt(num.value) <= 100) {
      for (let i = 1; i <= num.value; i++) {
         if (i % 2 == 0) {
            res.innerHTML += i+ "\n";
         }else {
            odd.innerHTML += i+ "\n";
         }
         n.innerHTML += i+ "\n";
      }
   } else {
      res.innerHTML = "invalid input";
      res.style.color = "red"
      odd.innerHTML = "invalid input";
      odd.style.color = "red"
      n.innerHTML = "invalid input";
      n.style.color = "red"
   }
   num.value = "";
};