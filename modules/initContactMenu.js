import outsideEvent from "./outsideEvent.js";

export default function initContactMenu() {
  // Variáveis
  const contactSubmenu = document.querySelector("[data-contactMenu]");
  const events = ["touchstart", "click"];

  // Função Callback dos eventos
  function handleClick() {
    this.classList.add("activated");
    outsideEvent(this, events, () => {
      this.classList.remove("activated");
    });
  }

  events.forEach((userEvent) =>
    contactSubmenu.addEventListener(userEvent, handleClick)
  );
}
