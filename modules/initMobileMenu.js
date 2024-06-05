import outsideEvent from "./outsideEvent.js";

export default function iniMobileMenu() {
  // Variáveis
  const sideButton = document.querySelector('[data-menu="side-button"]');
  const sideList = document.querySelector('[data-menu="side-list"]');
  const events = ["touchstart", "click"];

  // Função Callback do evento + Callback ousideEvent
  if (sideButton) {
    function openMenu() {
      sideButton.classList.add("activated");
      sideList.classList.add("activated");
      outsideEvent(sideList, events, () => {
        sideButton.classList.remove("activated");
        sideList.classList.remove("activated");
      });
    }

    events.forEach((userEvent) =>
      sideButton.addEventListener(userEvent, openMenu)
    );
  }
}
