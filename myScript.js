// INICIALIZA VARIAVEIS 


// CAPTURA ELEMENTOS DA DIV - EMPRESAS LADO ESQUERDO - TODA A DIV
const sectionDivs = document.getElementsByName('divClick');

// CAPTURA ELEMENTOS DA DIV  - EMPRESAS LADO ESQUERDO - TEXTOS
const sectionEmpresasText = document.getElementsByName('section_text');

// CAPTURA ELEMENTOS SPAN - EMPRESAS LADO ESQUERDO - SPAN
const classRotate = document.getElementsByClassName('section_rotate');

// CAPTURA - EMPRESAS LADO ESQUERDO - ICONES
const image = document.getElementsByName('imagem');

// ---------------------------------------||--------------------------------------


// CAPTURA ELEMENTOS DA TEXTBOX - DESCRIÇÃO DE AFAZERES -- PARAGRAFO
const textBoxp = document.querySelectorAll('.text_box p');

// CAPTURA ELEMENTOS  - EMPRESAS LADO DIREITO - SECTION
const sectionPtext = document.getElementsByName('textBoxHide');

// CAPTURA ELEMENTOS  - ICONE HOME
const iconMove = document.getElementsByName('iconeHome')

// CAPTURA ELEMENTOS  - SETORES DA PAGINA
const menuItens = document.querySelectorAll('.main_menu a'); //0-bio, 1-xp, 2-formação, 3-jobs, 4-contato
const pages = document.querySelectorAll('[data-container]');


// CAPTURA ELEMENTOS  - ICONES SOCIALMEDIA

const iconsSocialMedia = document.querySelectorAll('div.icons_social_media img');
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';


// ---------------------------------------||--------------------------------------


// CARREGAMENTO MENU

function scrolarMenu(obj) {
    obj.scrollIntoView({ behavior: "smooth" })
}

for (let element of menuItens) {

    let objeto = element.firstChild.nodeValue

    element.addEventListener('click', function() {

        for (let pagina of pages) {

            if (objeto != undefined) {

                console.log(pagina)
            }


        }

        // if (objeto === '- bio') {

        //     scrolarMenu(pages[1])
        // }
        // if (objeto === '- experiencia') {

        //     scrolarMenu(pages[2])
        // }
        // if (objeto === '- formação') {

        //     scrolarMenu(pages[3])
        // }
        // if (objeto === '- trabalhos') {

        //     scrolarMenu(pages[4])
        // }
        // if (objeto === '- contato') {
        //     scrolarMenu(pages[5])
        // } else {

        //     console.log(objeto)

        // }
    })
}




// SCROLLING ANIMATION

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);;
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 60));
}

// SCROLLING ANIMATION - END




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

// ANIMAÇÃO ICONES SOCIAL MEDIA

for (let element of iconsSocialMedia) {
    element.addEventListener('mouseover', function(event) {
        event.target.style.width = '4vw'
    })
    element.addEventListener('mouseleave', function(event) {
        event.target.style.width = ''
    })
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


// MOSTRA TEXTOS SELECIONADOS NO CAMPO ONCLICK


for (let i = 0; i <= sectionPtext.length; i++) {

    sectionDivs[i].onclick = function() {
        if (sectionPtext[i].style.display === 'none') {
            sectionPtext[i].style.display = 'block'
        } else {
            sectionPtext[i].style.display = 'none'
        }
    }
}