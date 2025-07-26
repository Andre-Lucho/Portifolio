import outsideEvent from './outsideEvent.js';

export default function initContactMenu() {
  const contactSubmenu = document.querySelector('[data-contactMenu]');
  const events = ['touchstart', 'click'];

  function handleClick() {
    this.classList.add('activated');
    outsideEvent(this, events, () => {
      this.classList.remove('activated');
    });
  }

  events.forEach((userEvent) =>
    contactSubmenu.addEventListener(userEvent, handleClick),
  );
}
