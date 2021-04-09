// INICIALIZA VARIAVEIS 


// CAPTURA ELEMENTOS DA DIV  - EMPRESAS LADO ESQUERDO - TEXTOS
const sectionEmpresasText = document.getElementsByName('section_text');

// CAPTURA ELEMENTOS SPAN - EMPRESAS LADO ESQUERDO - SPAN
const classRotate = document.getElementsByClassName('section_rotate');

// CAPTURA - EMPRESAS LADO ESQUERDO - ICONES
const image = document.getElementsByName('imagem');

// ---------------------------------------||--------------------------------------


// CAPTURA ELEMENTOS DA TEXTBOX - DESCRIÇÃO DE AFAZERES -- PARAGRAFO
const textBoxp = document.querySelectorAll('.text_box p');

// CAPTURA ELEMENTOS  - ICONE HOME
const iconMove = document.getElementsByName('iconeHome')

// CAPTURA ELEMENTOS  - ICONES SOCIALMEDIA
const iconsSocialMedia = document.querySelectorAll('div.icons_social_media img');

// ---------------------------------------||--------------------------------------


// CARREGAMENTO MENU
// CAPTURA ELEMENTOS  - SETORES DA PAGINA
const menuItens = document.querySelectorAll('.main_menu a');
const pages = document.querySelectorAll('[data-container]');

function scrolarMenu(obj) {
    obj.scrollIntoView({ behavior: "smooth" })
}

for (let element of menuItens) {

    let objeto = element.firstChild.nodeValue

    element.addEventListener('click', function() {

        if (objeto === '- bio') {

            scrolarMenu(pages[1])
        }
        if (objeto === '- experiencia') {

            scrolarMenu(pages[2])
        }
        if (objeto === '- formação') {

            scrolarMenu(pages[3])
        }
        if (objeto === '- trabalhos') {

            scrolarMenu(pages[4])
        }
        if (objeto === '- contato') {
            scrolarMenu(pages[5])
        } else {

            console.log(objeto)

        }
    })
}

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

// SCROLLING ANIMATION
// debounce code web;

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
        event.target.style.width = '4vw'
    })
    element.addEventListener('mouseleave', function(event) {
        event.target.style.width = ''
    })
}

// MOSTRA TEXTOS SELECIONADOS

function RotateButton(event) {
    const section = event.querySelectorAll('section');

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
const sectionPtext = document.querySelectorAll('[name = textBoxHide]');
// CAPTURA ELEMENTOS DA DIV - EMPRESAS LADO ESQUERDO - TODA A DIV
const sectionDivs = document.querySelectorAll('[name = divClick]');


// FUNÇÃO RECOLHE TODOS OS TEXTOS DENTRO DE UM FOR OF DENTRO DE UM EVENTLISTENER.

const hideAll = () => {

    const sectionDivsAllP = document.querySelectorAll('[name = section_names]')[0].querySelectorAll('p');
    for (let obj of sectionDivsAllP) {

        obj.style.display = 'none';
    }

}

// FUNÇÃO EXIBE TEXTO CASO O MESMO ESTEJA EM ESTADO OCULTO.

function mostrar(obj) {

    if (obj.style.display === 'none') {
        obj.style.display = 'block',
            console.log(obj);
    } else {

        obj.style.display = 'none';
        console.log(obj);
    }

}

// FUNÇÃO RECOLHE TODOS OS TEXTOS DENTRO DE UM FOR OF.

const recolher = (obj) => {
    obj.style.display = 'none';
}

// RECOLHE TAGS 'P' E DEPOIS QUE CLICADO EXIBE;

for (let abs of sectionDivs) {

    let paragraph = abs.querySelector('p');
    recolher(paragraph);

    abs.addEventListener('click', () => {
        hideAll(),
            mostrar(paragraph);
    })

}