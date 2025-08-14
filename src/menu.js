import { createElem, addElemClass, addElemText, navContainer } from "./home";
import ajiaco from "./images/Ajiaco-cubano.jpeg";
import tradicional from "./images/cocina_tradicional_cuba_1.jpg";
import yuca from "./images/yuca-con-mojito.jpg";
import ropaVieja from "./images/ropa-vieja-2.jpeg";
import congris from "./images/congris-atun.jpg";
import churros from "./images/churros.jpg";
import cubanFood from "./images/cuban-food-min.jpg";
import sandwish from "./images/sandwish.jpeg";

export function createMenuContent() {
  const body = document.querySelector("body");
  const content = createContainer();

  const heroText = createHeroText();

  const recipes = [
    createDish(ajiaco, "this is some subtext under an ilustration or image"),
    createDish(tradicional, "another one"),
    createDish(yuca, "this is a great dish for sunday"),
    createDish(ropaVieja, "this is a great dish for sunday"),
    createDish(congris, "this is a great dish for sunday"),
    createDish(cubanFood, "this is a great dish for sunday"),
    createDish(churros, "this is a great dish for sunday"),
    createDish(sandwish, "this is a great dish for sunday"),
  ];

  content.append(heroText, navContainer);

  recipes.forEach((recipe) => {
    content.appendChild(recipe);
  });

  body.appendChild(content);
}

function createContainer() {
  const content = createElem("div");
  addElemClass(content, "main-content");
  return content;
}

function createHeroText() {
  const heroText = createElem("h2");
  addElemText(heroText, "Our Dishes");
  return heroText;
}

function createDish(imgUrl, recipe) {
  const recipeImg = createElem("img");
  recipeImg.src = imgUrl;
  const recipeDescript = createElem("p");
  recipeDescript.textContent = recipe;

  const recipeContainer = createElem("div");
  recipeContainer.append(recipeImg, recipeDescript);

  return recipeContainer;
}
