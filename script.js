let btn = document.getElementById("btn");
let body = document.body ;

btn.addEventListener("click" , ()=>{
    if(body.style.backgroundColor === "black"){
         body.style.backgroundColor = "white";
         body.style.color = "black";
         btn.style.left = "10px";

    }

    else{
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btn.style.left = "126px";
    }
})