document.querySelector('#t1').textContent = 'javaScript - Introdução';

// comentario 
/*
function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`olá ${nome}! Seja bem-vindo!`);
    document.getElementById('formularioLogin').style.display = 'none';
}
*/
function mudaCorFundo(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}