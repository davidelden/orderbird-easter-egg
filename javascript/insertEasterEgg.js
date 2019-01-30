import { EasterEggElement, ClickElements } from '/javascript/modules/EasterEggModule.js';

const easterEgg = new EasterEggElement;
const clickElements = new ClickElements;

clickElements.getValidElements().map(element => {
  element.addEventListener('click', () => {
    document.body.appendChild(easterEgg.getDiv());
  });
});
