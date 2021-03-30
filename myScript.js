// INICIALIZA VARIAVEIS 


// CAPTURA ELEMENTOS DA DIV - EMPRESAS LADO ESQUERDO - TODA A DIV
var sectionDivs = document.getElementsByName('divClick');


// CAPTURA ELEMENTOS DA DIV  - EMPRESAS LADO ESQUERDO - TEXTOS
var sectionEmpresasText = document.getElementsByName('section_text');

// CAPTURA ELEMENTOS SPAN - EMPRESAS LADO ESQUERDO - SPAN
const classRotate = document.getElementsByClassName('section_rotate');

// CAPTURA - EMPRESAS LADO ESQUERDO - ICONES
let image = document.getElementsByName('imagem');

// ---------------------------------------||--------------------------------------


// CAPTURA ELEMENTOS DA TEXTBOX - DESCRIÇÃO DE AFAZERES -- PARAGRAFO
var textBoxp = document.querySelectorAll('.text_box p');

// CAPTURA ELEMENTOS  - EMPRESAS LADO DIREITO - SECTION
var sectionPtext = document.getElementsByName('textBoxHide');



// ---------------------------------------||--------------------------------------


// ANIMAÇÃO ICONES

for (let i = 0; i < image.length; i++) {
    classRotate[i].addEventListener('click', function() {
            if (image[i].style.transform != 'rotate(90deg)') {
                image[i].style.transition = '0.5s';
                image[i].style.transform = 'rotate(90deg)';
            } else {
                image[i].style.transform = 'rotate(0deg)';
            }
        }) // FUNÇÃO FIM
}

// RECOLHE TEXTOS EXIBIDOS

function recolher() {

    var listseq = document.querySelectorAll('section');
    const sequeCheck = [listseq[5], listseq[7], listseq[9], listseq[11]];

    for (let i = 0; i < 4; i++) {

        if (sequeCheck[i].style.display === 'block') {
            sequeCheck[i].style.display = 'none';
        }
        console.log(sequeCheck[i]);
    }
}

// MOSTRA TEXTOS SELECIONADOS

function showText(event) {

    const section = event.querySelectorAll('section');
    if (section[1].style.display === 'none') {
        section[1].style.display = 'block';

    } else {
        section[1].style.display = 'none';
    };

    //Animação 

    section[0].animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-10px)' }
    ], {
        // timing options
        duration: 200,
        iterations: 1,

    });

}

function rec(a) {

    for (let i = 0; i <= a.length; i++) {

        if (a[i].style.display === 'block') {
            a[i].style.display = 'none';
        }
        console.log(a);
    }
}