export default function menuTabs() {
  const mainContent = Array.from(
    document.querySelectorAll(".main-content section")
  );

  mainContent.forEach((item, i) => {
    const counter = mainContent.length - i;
    counter % 2 == 0
      ? (item.dataset.tab = "drop-right")
      : (item.dataset.tab = "drop-down");
  });

  // Variaveis

  const sideButtons = document.querySelectorAll(".buttons img");

  const sections = document.querySelectorAll(
    "[data-section='section'] section"
  );

  const sideLinks = document.querySelectorAll(".buttons a");

  const active = "activated";

  sections[0].classList.add(active);

  // Verificação e Função Callback do evento

  if (sideButtons.length === sections.length) {
    function tabActivation(i) {
      sections.forEach((item) => {
        item.classList.remove(active);
      });

      const imgPosition = sections[i].dataset.tab;
      const imgActive = sections[i].classList.add(active, imgPosition);
      const linksPosition = sideLinks[i].dataset.tab;
      const linkActive = sideLinks[i].classList.add(active, linksPosition);
    }

    sideButtons.forEach((img, i) => {
      img.addEventListener("click", () => tabActivation(i));
    });

    sideLinks.forEach((link, i) => {
      link.addEventListener("click", () => tabActivation(i));
    });
  }
}