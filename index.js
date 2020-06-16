const menu=document.querySelector(".menu")
const burguerButtom=document.querySelector("#burguer-id")

const ipad=window.matchMedia("screen and (max-width:767px)")

ipad.addListener(validation=(evento)=>{
    if(evento.matches){
        burguerButtom.addEventListener("click",listener)
    }else{
        burguerButtom.removeEventListener("click",listener)
    }
})
validation(ipad)


function listener(){
    // menu.classList.toggle("is-active")
    if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active")
    }else{
        menu.classList.add("is-active")
    }
}