export default function menuTabs() {
  // Variáveis
  const mainContent = Array.from(
    document.querySelectorAll(".main-content section")
  );
  const sideButtons = document.querySelectorAll(".buttons img");
  const sections = document.querySelectorAll(
    "[data-section='section'] section"
  );
  const sideLinks = document.querySelectorAll(".buttons a");
  const active = "activated";

  mainContent.forEach((item, i) => {
    const counter = mainContent.length - i;
    counter % 2 == 0
      ? (item.dataset.tab = "drop-right")
      : (item.dataset.tab = "drop-down");
  });

  sections[0].classList.add(active);

  // Verificação e Função Callback do evento
  if (sideButtons.length === sections.length) {
    function tabActivation(i) {
      sections.forEach((item) => {
        item.classList.remove(active);
      });

      const imgPosition = sections[i].dataset.tab;
      sections[i].classList.add(active, imgPosition);
      const linksPosition = sideLinks[i].dataset.tab;
      sideLinks[i].classList.add(active, linksPosition);
    }

    sideButtons.forEach((img, i) => {
      img.addEventListener("click", () => tabActivation(i));
    });

    sideLinks.forEach((link, i) => {
      link.addEventListener("click", () => tabActivation(i));
    });
  }
}
