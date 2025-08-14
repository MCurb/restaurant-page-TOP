import { createElem, addElemClass, addElemText, navContainer } from "./home";

export function createContactContent() {
  const body = document.querySelector("body");
  const heroText = createHeroText();
  const contactCard = createCard();
  body.append(heroText, navContainer, contactCard);
}

function createHeroText() {
  const heroTxt = createElem("h1");
  addElemText(heroTxt, "Reserve Now");
  return heroTxt;
}

function createCard() {
  const phone = createElem("p");
  addElemText(phone, "962-458-6589");
  const email = createElem("p");
  addElemClass(email, "varadero@gmail.com");
  const address = createElem("p");
  addElemText(address, "Calle 60 y 3ra ave,, Varadero, Cuba");
  const reserveNow = createElem("button");
  addElemText(reserveNow, "Book Table");

  const container = createElem("div");
  addElemClass(container, "contact-card-container");
  container.append(phone, email, address, reserveNow);

  return container;
}
