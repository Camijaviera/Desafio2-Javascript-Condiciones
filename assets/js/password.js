const pass1=document.querySelector("#pass1");
const pass2=document.querySelector("#pass2");
const pass3=document.querySelector("#pass3");
const message=document.querySelector("#message");
const btn=document.querySelector("#btn");
btn.addEventListener("click", ()=>{
    /* console.log("medisteclick"); */
    const select1=pass1.value;
    const select2=pass2.value;
    const select3=pass3.value;

    if (select1==="9" && select2==="1" && select3==="1"){
        message.innerHTML="Password 1 es correcto ✅";
        message.style.color= "blue";
        return;  
    }
        if (select1==="7" && select2==="1" && select3==="4"){
            message.innerHTML="Password 2 es correcto ✅";
            message.style.color= "blue";
            return;
        }
    
        message.innerHTML="Password incorrecto ❌";
        message.style.color= "red";
        return;

        
})