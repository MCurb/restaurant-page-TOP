import "./styles.css";

import { createHomeContent, navContainer } from "./home";

createHomeContent();

function cleanPage() {
  const body = document.querySelector("body");
  do {
    body.removeChild(body.firstChild);
  } while (body.firstChild);
}

navContainer.addEventListener("click", handleBtnClick);

function handleBtnClick(event) {
    if(event.target.matches(".home-btn")) {
        cleanPage()
        createHomeContent();
    } else if (event.target.matches(".menu-btn")) {
        cleanPage()
    }
}
