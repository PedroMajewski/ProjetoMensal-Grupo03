//Transição Menu mobile - responsividade
let btn_menu = document.getElementById("btn-menu");
let menu_lateral = document.querySelector(".dropside-mobile");

let imagem_nova = "../Assets/Menu.svg";
let imagem_cruz = "../Assets/Bigode.svg";


btn_menu.addEventListener("click", function(){
    
    if (menu_lateral.classList.contains("aberto")) {
        btn_menu.src = imagem_cruz;
    } else {
        btn_menu.src = imagem_nova;
    }

    menu_lateral.classList.toggle("aberto");
    
})


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