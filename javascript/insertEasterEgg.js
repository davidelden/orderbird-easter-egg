import { EasterEggElement, ClickElements, KonamiCode } from '/javascript/modules/EasterEggModule.js';

const easterEgg = new EasterEggElement,
      clickElements = new ClickElements,
      konami = new KonamiCode;


clickElements.getValidElements().map(element => {
  element.addEventListener('click', () => {
    document.body.appendChild(easterEgg.getDiv());
  });
});

document.addEventListener('keydown', e => {
  konami.detectPattern(e.code);

  if(konami.successfulMatch()) {
    easterEgg.addToDOM();
    konami.resetKeyPattern();
  };
});
