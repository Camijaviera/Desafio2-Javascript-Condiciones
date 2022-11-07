const border = document.querySelector("#border");


border.addEventListener("click", ()=>{

    if (border.style.borderStyle === "solid"){

        border.style.border = "none";
        return;
    }
    /* console.log("medisteclick"); */
    border.style.border= "red 2px solid";
   
})