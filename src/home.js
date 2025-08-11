import headerImg from "./images/cuban-restaurant-min.jpg";


export const navContainer = createNav().navContainer;

export function createHomeContent() {
  const body = document.querySelector("body");

  const header = createHeaderContainer();

  const mainLogo = createLeftLogo();

  const headerTxt = createTxtSection();

  const imgContainer = createHeaderImg();

  header.append(mainLogo, navContainer, headerTxt, imgContainer);

  body.appendChild(header);
}

function createElem(elemType) {
  return document.createElement(elemType);
}

function addElemText(element, text) {
  return (element.textContent = text);
}

function addElemClass(element, className) {
  return element.classList.add(className);
}

function createHeaderContainer() {
  const header = createElem("div");
  addElemClass(header, "header");
  return header;
}

function createLeftLogo() {
  const mainLogo = createElem("div");
  addElemClass(mainLogo, "left-logo");
  addElemText(mainLogo, "Restaurant Nm");

  return mainLogo;
}

function createNav() {
  const homeBtn = createElem("button");
  addElemClass(homeBtn, "home-btn")
  addElemText(homeBtn, "Home");
  const menuBtn = createElem("button");
  addElemClass(menuBtn, "menu-btn")
  addElemText(menuBtn, "Menu");
  const contactBtn = createElem("button");
  addElemClass(contactBtn, "contact-btn")
  addElemText(contactBtn, "Contact");

  const navContainer = createElem("div");
  addElemClass(navContainer, "right-btns");
  navContainer.append(homeBtn, menuBtn, contactBtn);

  return {navContainer, homeBtn, menuBtn, contactBtn};
}

function createTxtSection() {
  const heroTxt = createElem("h1");
  addElemText(heroTxt, "This website is awesome");

  const para = createElem("p");
  addElemText(
    para,
    "This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast"
  );

  const aboutBtn = createElem("button");
  addElemText(aboutBtn, "About Us");

  const headerTxt = createElem("div");
  addElemClass(headerTxt, "header-text");
  headerTxt.append(heroTxt, para, aboutBtn);

  return headerTxt;
}

function createHeaderImg() {
  const image = createElem("img");
  image.src = headerImg;
  image.alt = "Restaurant Image";
  image.width = 400;

  const imgContainer = createElem("div");
  addElemClass(imgContainer, "header-image");
  imgContainer.appendChild(image);

  return imgContainer;
}