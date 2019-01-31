import { EasterEggElement, ClickElements, KonamiCode } from '/javascript/modules/EasterEggModule.js';

const easterEgg = new EasterEggElement,
      clickElements = new ClickElements,
      konami = new KonamiCode;

clickElements.getValidElements().map(element => {
  element.addEventListener('click', () => {
    easterEgg.getSVG();
  });
});

document.addEventListener('keydown', e => {
  konami.detectPattern(e.code);

  if(konami.successfulMatch()) {
    easterEgg.getSVG();
    konami.resetKeyPattern();
  };
});
