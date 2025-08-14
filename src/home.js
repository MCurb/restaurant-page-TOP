import headerImg from "./images/cuban-restaurant-min.jpg";
import tradicional from "./images/cocina_tradicional_cuba_1.jpg";
import ropaVieja from "./images/ropa-vieja-2.jpeg";
import congris from "./images/congris-atun.jpg";
import sandwish from "./images/sandwish.jpeg";

import { createDish } from "./menu";

export const navContainer = createNav();

export function createHomeContent() {
  const body = document.querySelector("body");

  const header = createHeaderContainer();

  const mainLogo = createLeftLogo();

  const headerTxt = createTxtSection();

  const imgContainer = createHeaderImg();

  header.append(mainLogo, navContainer, headerTxt, imgContainer);

  const recipes = [
    createDish(tradicional, "another one"),
    createDish(ropaVieja, "this is a great dish for sunday"),
    createDish(congris, "this is a great dish for sunday"),
    createDish(sandwish, "this is a great dish for sunday"),
  ];

  const mainTxt = createMainHeader()

  const main = createMainContent();

  main.appendChild(mainTxt)

  recipes.forEach((recipe) => {
    main.appendChild(recipe);
  });

  body.append(header, main);
}

export function createElem(elemType) {
  return document.createElement(elemType);
}

export function addElemText(element, text) {
  return (element.textContent = text);
}

export function addElemClass(element, className) {
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
  addElemText(mainLogo, "Patria y Vida");

  return mainLogo;
}

function createNav() {
  const homeBtn = createElem("button");
  addElemClass(homeBtn, "home-btn");
  addElemText(homeBtn, "Home");
  const menuBtn = createElem("button");
  addElemClass(menuBtn, "menu-btn");
  addElemText(menuBtn, "Menu");
  const contactBtn = createElem("button");
  addElemClass(contactBtn, "contact-btn");
  addElemText(contactBtn, "Contact");

  const navContainer = createElem("div");
  addElemClass(navContainer, "right-btns");
  navContainer.append(homeBtn, menuBtn, contactBtn);

  return navContainer;
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
  image.width = 550;

  const imgContainer = createElem("div");
  addElemClass(imgContainer, "header-image");
  imgContainer.appendChild(image);

  return imgContainer;
}

function createMainContent() {
  const main = createElem("div");
  addElemClass(main, "main-home")
  return main;
}

function createMainHeader() {
  const mainTxt = createElem("h2");
  addElemText(mainTxt, "Main Dishes")
  return mainTxt;
}