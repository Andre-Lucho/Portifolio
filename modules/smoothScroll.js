export default function initsmoothScroll() {
  // Variáveis
  const sideNavlinks = document.querySelectorAll(
    "[data-menu='buttons'] a[href^='#']"
  );
  const sideNavimgs = document.querySelectorAll("[data-menu='buttons'] img");

  // Funções CallBack
  function linkSmoothScroll(e) {
    e.preventDefault();
    const getNavAttrib = this.getAttribute("href");
    const section = document.querySelector(getNavAttrib);

    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  function imgSmoothScroll() {
    const getImgData = this.getAttribute("data-img");
    const section = document.querySelector(getImgData);

    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  // Eventos DOM
  sideNavlinks.forEach((link) => {
    link.addEventListener("click", linkSmoothScroll);
  });
  sideNavimgs.forEach((link) => {
    link.addEventListener("click", imgSmoothScroll);
  });
}
