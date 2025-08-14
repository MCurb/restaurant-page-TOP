import { createElem, addElemClass, addElemText, navContainer } from "./home";
import ajiaco from "./images/Ajiaco-cubano-min.jpeg";
import tradicional from "./images/cocina_tradicional_cuba_1-min.jpg";
import yuca from "./images/yuca-con-mojito-min.jpg";
import ropaVieja from "./images/ropa-vieja-min.jpg";
import congris from "./images/congris-atun-min.jpg";
import churros from "./images/churros.jpg";
import cubanFood from "./images/cuban-food-min-min.jpg";
import sandwish from "./images/sandwish-min.jpeg";

export function createMenuContent() {
  const body = document.querySelector("body");
  const content = createContainer();

  const heroText = createHeroText();

  const recipes = [
    createDish(ajiaco, "A symphony of textures, colors, and irresistible seasoning"),
    createDish(tradicional, "A burst of flavor in every bite, crafted to satisfy your cravings"),
    createDish(yuca, "Rich aromas and vibrant flavors that awaken your senses"),
    createDish(ropaVieja, "Fresh ingredients meet bold seasoning for an unforgettable taste"),
    createDish(congris, "Comfort food with a gourmet twist you’ll keep coming back for"),
    createDish(cubanFood, "Wholesome, hearty, and bursting with flavor in every mouthful"),
    createDish(churros, "Made with love, served with flavor, and enjoyed with a smile"),
    createDish(sandwish, "Perfectly balanced taste, made to please every palate."),
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
  addElemText(heroText, "The Menu");
  return heroText;
}

export function createDish(imgUrl, recipe) {
  const recipeImg = createElem("img");
  recipeImg.src = imgUrl;
  const recipeDescript = createElem("p");
  recipeDescript.textContent = recipe;

  const recipeContainer = createElem("div");
  recipeContainer.append(recipeImg, recipeDescript);

  return recipeContainer;
}
