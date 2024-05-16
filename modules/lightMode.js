export default function lightMode() {
  const moonImg = document.querySelector(".nav-elements img");
  const bodyNode = document.querySelector("body");

  function lightModeActivation() {
    bodyNode.classList.toggle("activated");
  }

  moonImg.addEventListener("click", lightModeActivation);
}
