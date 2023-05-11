const username =document.querySelector("#name");
const age =document.querySelector("#age");
const date =document.querySelector("#date");
const email =document.querySelector("#email");
const mob =document.querySelector("#mob");
const btn = document.querySelector("#btn");
const res =document.querySelector(".res");
details={}
btn.onsubmit = (e)=>{
    e.preventDefault();
    details['name'] = username.value;
    details['age'] = age.value;
    details['date'] = date.value;
    details['email'] = email.value;
    details['mob'] = mob.value;
}



