//Transição Menu mobile - responsividade
var btn_icone = document.getElementById("btn-menu");
var menu = document.getElementById("dropside-mobile");

document.getElementById("btn-menu").addEventListener("click", Menu_mobile);

function Menu_mobile(){
    var menu = document.getElementById("dropside-mobile");
    menu.classList.add("aberto");
}

// let btn_menu =  document.querySelector('.btn-menu')
// let menu_dropdown = document.getElementsByClassName('dropside-mobile')

// btn_menu.addEventListener('click', ()=>{
//     menu_dropdown.classList.add('aberto')
// });