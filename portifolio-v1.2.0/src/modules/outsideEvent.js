export default function outsideEvent(element, events, callback) {
  const html = document.documentElement;
  const dataOutside = "data-outside";

  if (!element.hasAttribute(dataOutside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideEvent));
    });
    element.setAttribute(dataOutside, "");
  }

  function handleOutsideEvent(event) {
    if (!element.contains(event.target)) {
      callback();
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideEvent);
      });
      element.removeAttribute(dataOutside);
    }
  }
}
