export default function light_DarkToggleMode() {
  const moonImg = document.querySelector('.navImg img');
  const bodyNode = document.querySelector('body');
  const liNode = document.querySelector('.navImg');

  const sunImg = document.createElement('img');
  sunImg.setAttribute('src', './Imgs/Icones/header/moon02.png');
  sunImg.setAttribute('alt', 'sun-icon-img');

  function lightModeActivation() {
    liNode.appendChild(sunImg);
    liNode.removeChild(moonImg);
    bodyNode.classList.toggle('activated');
  }

  function darkModeActivation() {
    liNode.appendChild(moonImg);
    liNode.removeChild(sunImg);
    bodyNode.classList.toggle('activated');
  }

  moonImg.addEventListener('click', lightModeActivation);
  sunImg.addEventListener('click', darkModeActivation);
}
