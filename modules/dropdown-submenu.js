export default function initSubMenu() {
  // Variáveis
  const submenu = document.querySelectorAll("[data-submenu]");
  const events = ["touchstart", "click"];
  const active = "activated";

  // Função Callback dos eventos
  function handleClick() {
    this.classList.toggle(active);
  }

  // Eventos
  submenu.forEach((submenu) => {
    events.forEach((link) => {
      submenu.addEventListener(link, handleClick);
    });
  });
}
