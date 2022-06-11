
function favTutorial() { 
    const drop =document.getElementById('idioma');
    if (drop.options[idioma.selectedIndex].text === 'Español'  ){
        //console.log('si')
        
    }else if (drop.options[idioma.selectedIndex].text === 'Ingles'  ) {
        //console.log('no')
        window.location.href = "en-US/index_en.html" ;
    }
}
function butClick(){
    //document.getElementById('sidebar-link').style.background='white';
    const boton = document.getElementById('sidebar-link');
    const boton2 = document.getElementById('sidebar-but');
    boton.style.visibility= 'visible'
   // window.setTimeout(() => {document.getElementById('sidebar-link').style.visibility= 'visible';}, 5000);
   boton.style.animation= 'sidebarAni 1s';
   boton2.style.animation= 'sidebarAniRev 1s';
   window.setTimeout(() => {boton2.style.visibility= 'hidden'}, 1000);
   window.setTimeout(cahngeOp, 5000);



    if ( document.URL.includes("index.html") ) {
        document.getElementById('index').style.display= 'none'
    }else if ( document.URL.includes("acerca.html") ) {
        document.getElementById('acerca').style.display= 'none'
    }else if ( document.URL.includes("contacto.html") ) {
        document.getElementById('contacto').style.display= 'none'
    }else if ( document.URL.includes("porta.html") ) {
        document.getElementById('portafolio').style.display= 'none'
    }
}

function cahngeOp(){
    const boton = document.getElementById('sidebar-link');
    const boton2 = document.getElementById('sidebar-but');
    boton.style.animation= 'sidebarAniRev 1s';
    boton2.style.visibility= 'visible'
    boton2.style.animation= 'sidebarAni 1s';

   // boton.style.visibility= 'hidden' ;
   window.setTimeout(() => {boton.style.visibility= 'hidden'}, 1000);
  // window.setTimeout(() => {}, 1000);
    



}