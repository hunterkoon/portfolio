const burguerDivs = document.querySelectorAll('[data-name="spanBurguer"]')[0];
const spanBurguer = document.getElementById("spanID");
const spanMenuHide = document.querySelector("#spanMenuID");

// CLICAR FORA ANULA MENU

const itemNew = spanBurguer.querySelectorAll("div");

const destroiClick = () => {
  itemNew.forEach(() => {
    window.onclick = function (event) {
      if (event.target.nodeName != "DIV") {
        spanMenuHide.style.display = "none";
      }
    };
  });
};
destroiClick();

// MOSTRA MENU ESCONDIDO E SE CLICADO NOVAMENTE REVERTE ESTADO

const clickFunction = (obj, obj2) => {
  obj.onclick = () => {
    if (obj2.style.display != "block") {
      obj2.style.display = "block";
    } else {
      obj2.style.display = "none";
    }
  };
};
clickFunction(spanBurguer, spanMenuHide);

// FUNÇÃO CAPTA MOUSE OVER E MOUSE LEAVE PARA ALTERAR COR DO ICONE MENU.

const mouseFunc = (param_1) => {
  let param = param_1.querySelectorAll("div");

  for (let obj of param) {
    obj.addEventListener("mouseenter", () => mouseOver());
    obj.addEventListener("mouseleave", () => mouseleave());
  }

  const mouseOver = () => {
    for (let obj of param) {
      obj.style.backgroundColor = "grey";
    }
  };
  const mouseleave = () => {
    for (let obj of param) {
      obj.style.backgroundColor = "#6c68ac";
    }
  };
};
mouseFunc(burguerDivs);

// FUNÇÃO ADAPTA MENU PARA SCROLLING.

const windowBurguer = document.querySelector(".burguer-divs");
const windowConst = document.querySelector(".burguer-menu");
const menuConst = document.querySelector(".menu");
window.onscroll = () => {
  console.log("click"),
    this.scrollY > 5
      ? windowConst.classList.add("action")
      : windowConst.classList.remove("action");
  this.scrollY > 5
    ? windowBurguer.classList.add("action")
    : windowBurguer.classList.remove("action");
  this.scrollY > 32
    ? menuConst.classList.add("action")
    : menuConst.classList.remove("action");
};
