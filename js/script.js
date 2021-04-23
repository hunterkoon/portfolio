// INICIALIZA VARIAVEIS

// CAPTURA ELEMENTOS DA DIV  - EMPRESAS LADO ESQUERDO - TEXTOS
const sectionEmpresasText = document.getElementsByName("section_text");

// CAPTURA ELEMENTOS SPAN - EMPRESAS LADO ESQUERDO - SPAN
const classRotate = document.querySelectorAll(".section_rotate");

// CAPTURA - EMPRESAS LADO ESQUERDO - ICONES
const image = document.getElementsByName("imagem");

// ---------------------------------------||--------------------------------------

// CAPTURA ELEMENTOS DA TEXTBOX - DESCRIÇÃO DE AFAZERES -- PARAGRAFO
const textBoxp = document.querySelectorAll(".text_box p");

// CAPTURA ELEMENTOS  - ICONE HOME
const iconMove = document.getElementsByName("iconeHome");

// CAPTURA ELEMENTOS  - ICONES SOCIALMEDIA
const iconsSocialMedia = document.querySelectorAll(
  "div.icons_social_media img"
);

// CAPTURA ELEMENTOS DA DIV - EMPRESAS LADO ESQUERDO - TODA A DIV
const sectionDivs = document.querySelectorAll("[name = divClick]");

// CAPTURA TEXTOS SELECIONADOS NO CAMPO ONCLICK
const sectionPtext = document.querySelectorAll(".text_box section");

// CAPTURA DIV BIO
const bioId = document.getElementById("bio_id");
// CAPTURA DIV EXP
const expId = document.getElementById("exp_id");
// CAPTURA DIV skills
const formId = document.getElementById("form_Id");

// CAPTURA TEXTOS SELECIONADOS NO CAMPO ONCLICK DIV P EXPERIENCIAS
const sectionDivsAllP = document
  .querySelectorAll("[name = section_names]")[0]
  .querySelectorAll("p");

// ---------------------------------------||--------------------------------------

// CARREGAMENTO MENU
// CAPTURA ELEMENTOS  - SETORES DA PAGINA
const menuItensFlu = document.querySelectorAll(".spanMenu a");
const menuItens = document.querySelectorAll(".main_menu a");
const pages = document.querySelectorAll("[data-container]");

function scrolarMenu(obj) {
  obj.scrollIntoView({ behavior: "smooth", block: "start" });
}

const initScrollMenu = (itens, obj2) => {
  for (let element of itens) {
    let objeto = element.firstChild.nodeValue;

    element.addEventListener("click", function () {
      if (objeto === "- home") {
        scrolarMenu(obj2[0]);
      }
      if (objeto === "- bio") {
        scrolarMenu(obj2[1]);
      }
      if (objeto === "- experiencia") {
        scrolarMenu(obj2[2]);
      }
      if (objeto === "- formação") {
        scrolarMenu(obj2[3]);
      }
      if (objeto === "- trabalhos") {
        scrolarMenu(obj2[4]);
      }
      if (objeto === "- contato") {
        scrolarMenu(obj2[5]);
      } else {
        console.log(objeto);
      }
    });
  }
};

// SCROLLING ANIMATION
// debounce code web;

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 30)
  );
}

// ANIMAÇÃO ICONES

const animationIcon = () => {
  for (let i = 0; i < image.length; i++) {
    classRotate[i].addEventListener("click", function () {
      if (image[i].style.transform != "rotate(90deg)") {
        image[i].style.transition = "0.5s";
        image[i].style.transform = "rotate(90deg)";
      } else {
        image[i].style.transform = "rotate(0deg)";
      }

      sectionDivs[i].animate(
        [
          // keyframes
          { transform: "translateY(0px)" },
          { transform: "translateY(-10px)" },
        ],
        {
          // timing options
          duration: 200,
          iterations: 1,
        }
      );
    }); // FUNÇÃO FIM
  }
};

// INVERTE ANIMAÇÃO DOS ICONES

const destrAnimation = () => {
  classRotate.forEach((objeto) => {
    objeto.addEventListener("click", () => {
      for (let i = 0; i < image.length; i++) {
        image[i].style.transform = "rotate(0deg)";
      }
    });
  });
};

// ANIMAÇÃO ICONES SOCIAL MEDIA

const hoverSocial = () => {
  for (let element of iconsSocialMedia) {
    element.addEventListener("mouseover", function (event) {
      event.target.style.width = "4vw";
      event.target.style.width = "4vw";
    });
    element.addEventListener("mouseleave", function (event) {
      event.target.style.width = "";
    });
  }
};

// FUNÇÃO RECOLHE TODOS OS TEXTOS DENTRO DE UM FOR OF DENTRO DE UM EVENTLISTENER.

const hideAllP = (element) => {
  for (let obj of element) {
    obj.style.display = "none";
  }
};

// RECOLHE TAGS 'P' E DEPOIS QUE CLICADO EXIBE;

const showTextHidden = () => {
  for (let abs of sectionDivs) {
    let paragraph = abs.querySelector("p");

    abs.addEventListener("click", () => {
      hideAllP(sectionDivsAllP);

      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
      } else {
        paragraph.style.display = "none";
      }
    });
  }
};

const swithCase = (a, obj) => {
  const transictionText = () => {
    for (let abs of obj) {
      abs.childNodes[1].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  switch (a) {
    case 0:
      obj[0].style.display = "block";
      transictionText();

      break;
    case 1:
      obj[1].style.display = "block";
      transictionText();

      break;
    case 2:
      obj[2].style.display = "block";
      transictionText();

      break;
    case 3:
      obj[3].style.display = "block";
      transictionText();

      break;

    default:
      alert("Alguma coisa Errada!");
  }
};

// ESCONDE TEXTO DO PAINEL DIREITO
const hideTextRight = (leftPanel, rightPanel) => {
  leftPanel.forEach((item, index) => {
    item.addEventListener("click", () => {
      hideAllP(rightPanel);
    });
  });
};

// MOSTRA TEXTO DO PAINEL DIREITO
const unhideTextRight = (leftPanel, rightPanel) => {
  hideTextRight(sectionDivs, sectionPtext);

  leftPanel.forEach((item, index) => {
    item.addEventListener("click", () => {
      scrolarMenu(leftPanel[index]);
      swithCase(index, rightPanel);
    });
  });
};

//SHOW STATUS OF NIVEL OF FORMATION..

const barStatus = document.querySelectorAll(".skills span a");

const checkStatusBar = (a) => {

  let b = a.style.width;
  let numberPercent = parseInt(b);

  if (numberPercent <= 10){   
    console.log(`${numberPercent} nivel Básico`);

  }else if (numberPercent >= 11 && numberPercent <= 29){
    console.log(`${numberPercent} nivel Intermediario`);

  }else if (numberPercent >= 30 && numberPercent <= 35){
    console.log(`${numberPercent} nivel Avançado`);

  }else if (numberPercent >= 36){
    console.log(`${numberPercent} nivel Profissional`);
  }
};

const eventOnBars = (item) => {
  for (let obj of item) {
    obj.addEventListener("mouseover", function () {
      checkStatusBar(obj);
    });
  }
};

// INICIALIZAÇÃO DE FUNÇÃO
const init = () => {
  eventOnBars(barStatus);
  initScrollMenu(menuItensFlu, pages);
  initScrollMenu(menuItens, pages);
  unhideTextRight(sectionDivs, sectionPtext);
  hoverSocial();
  animeScroll();
  destrAnimation();
  animationIcon();
  showTextHidden();
};
init();
