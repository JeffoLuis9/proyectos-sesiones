console.log("12")
//Menu Hamburguesa
function llamar(){
    var botonera=document.querySelector('.botonera');
        botonera.classList.toggle('click');
    var btnmenu=document.querySelector('.btn-menu');
        btnmenu.querySelector('.btn-menu .close').classList.toggle('fa-times');
}