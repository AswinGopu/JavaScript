const div = document.querySelector("#a");

document.querySelector('body').onload = () => 
{
    let s ="";
    for(let i = 1;i<9;i++){
        for(let j =1; j<=8; j++){
            if(i%2==0){
                if(j%2==0){
                    s += "<div class='b'></div>";
                }else{
                    s += "<div class='w'></div>";
                }
            }else{
                if(j%2==0){
                    s += "<div class='w'></div>";
                }else{
                    s += "<div class='b'></div>";
                }
            }
        }
        s += "<br>";
    }
    div.innerHTML += s;
}