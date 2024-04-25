//Transição Menu mobile - responsividade
let btn_menu =  document.querySelector('.btn-menu')
let menu_dropdown = document.getElementsByClassName('dropside-mobile')

btn_menu.addEventListener('click', ()=>{
    menu_dropdown.classList.add('aberto')
});