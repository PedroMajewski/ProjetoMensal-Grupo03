//Transição Menu mobile - responsividade
let btn_menu = document.getElementById("btn-menu");
let menu_lateral = document.querySelector(".dropside-mobile");


btn_menu.addEventListener("click",function(){
    menu_lateral.classList.toggle("aberto");
    if(btn_menu.src.includes("menu.svg")) {
        btn_menu.src = "../Assets/cross.svg";
    } else {
        btn_menu.src = "../Assets/menu.svg";
    }
    
})

document.addEventListener("click", fecharMenu);

function fecharMenu(event) {
    if (!menu_lateral.contains(event.target) && !btn_menu.contains(event.target)) {
        menu_lateral.classList.remove("aberto");
        btn_menu.src = "../Assets/menu.svg";
    }
}

let seta = document.getElementById("seta-servicos");
let seta_sair = document.getElementById("seta-servicos_2");
let menu_servicos = document.querySelector(".div-servicos_2")

seta.addEventListener("click", function(){

    menu_servicos.classList.toggle("aberto");
    
})

seta_sair.addEventListener("click", function(){

    menu_servicos.classList.remove("aberto");
    
})
// let btn_menu =  document.querySelector('.btn-menu')
// let menu_dropdown = document.getElementsByClassName('dropside-mobile')

// btn_menu.addEventListener('click', ()=>{
//     menu_dropdown.classList.add('aberto')
// });