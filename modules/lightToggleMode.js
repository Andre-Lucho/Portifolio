export default function light_DarkToggleMode() {
  // Variáveis
  const moonImg = document.querySelector(".navImg img");
  const bodyNode = document.querySelector("body");
  const liNode = document.querySelector(".navImg");

  const sunImg = document.createElement("img");
  sunImg.setAttribute("src", "./Imgs/Icones/header/lua_pixel2.png");
  sunImg.setAttribute("alt", "sun-icon-img");

  //Função Callback do evento
  function lightModeActivation() {
    liNode.appendChild(sunImg);
    liNode.removeChild(moonImg);
    bodyNode.classList.toggle("activated");
  }

  function darkModeActivation() {
    liNode.appendChild(moonImg);
    liNode.removeChild(sunImg);
    bodyNode.classList.toggle("activated");
  }

  // Eventos
  moonImg.addEventListener("click", lightModeActivation);
  sunImg.addEventListener("click", darkModeActivation);
}
