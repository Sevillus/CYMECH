const btn = document.querySelector("#more-menu")
const menu = document.querySelector("#menu")




window.addEventListener("click", (e)=>{
    if(e.target !== menu && e.target !== btn  && menu.classList.contains("show")){
        menu.classList.remove("show")

    }
    if(e.target === btn){
        menu.classList.toggle("show")
    }
})