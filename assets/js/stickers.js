const fox = document.querySelector("#fox");
const pig = document.querySelector("#pig");
const dog = document.querySelector("#dog");
const message = document.querySelector("#message");
const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    /* console.log("medisteclick"); */
    const sticker1=+fox.value;
    const sticker2=+pig.value;
    const sticker3=+dog.value;
    const sumaStickers=sticker1+sticker2+sticker3;
    console.log(sumaStickers);

    if (sumaStickers > 10){
        message.innerHTML="Llevas demasiados stickers❗";
        message.style.color="red";
        return;
    }
        message.innerHTML="Llevas " +sumaStickers+ " stickers✔";
        message.style.color="blue";
        return;
})