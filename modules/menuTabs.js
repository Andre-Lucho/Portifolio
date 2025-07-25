export default function menuTabs() {
  const mainContent = Array.from(document.querySelectorAll('.content-section'));
  const sections = document.querySelectorAll('.content-section');
  const sideButtons = document.querySelectorAll('.buttons img');
  const sideLinks = document.querySelectorAll('.buttons a');

  sections[0].classList.add('activated');

  if (mainContent) {
    mainContent.forEach((item) => (item.dataset.tab = 'drop-right'));
  }

  if (sideButtons.length === sections.length) {
    function tabActivation(i) {
      sections.forEach((item) => item.classList.remove('activated'));

      const imgPosition = sections[i].dataset.tab;
      sections[i].classList.add('activated', imgPosition);
    }

    sideButtons.forEach((img, i) => {
      img.addEventListener('click', () => tabActivation(i));
    });

    sideLinks.forEach((link, i) => {
      link.addEventListener('click', () => tabActivation(i));
    });
  }
}
