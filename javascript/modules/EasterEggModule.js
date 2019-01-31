class EasterEggElement {
  constructor() {
    this.div = document.createElement('div');
    this.div.setAttribute('id', 'easter-egg');
  }

  getDiv() {
    return this.div;
  }
}

class ClickElements {
  constructor() {
    this.eggyClass = document.getElementsByClassName('eggy');
    this.dataEggy = document.querySelectorAll('[data-eggy]');
  }

  removeInvalidElements(elements) {
    let validElements = [];

    for(let item of elements) {
      let classes = item.classList;

      if(classes.contains('disable') || item.disabled) {
        continue;
      }
      validElements.push(item);
    }
    return validElements;
  }

  getValidElements() {
    let arr1 = this.removeInvalidElements(this.eggyClass),
        arr2 = this.removeInvalidElements(this.dataEggy);

    return arr1.concat(arr2);
  }
}

class KonamiCode {
  constructor() {
    this.konamiPattern = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'KeyB',
      'KeyA'
    ];
    this.keyPattern = [];
  }

  getKonamiPattern() {
    return this.konamiPattern;
  }

  getKeyPattern() {
    return this.keyPattern;
  }

  getFirstThreeKonami() {
    return this.konamiPattern.slice(0,3);
  }

  addKeyCode(keyCode) {
    this.keyPattern.push(keyCode);
  }

  removeFirstKeyPattern() {
    this.keyPattern.shift();
  }

  firstThreeMatch() {
    return this.getKeyPattern().join() == this.getFirstThreeKonami().join() ? true : false;
  }

  successfulMatch() {
    return this.getKeyPattern().join() == this.getKonamiPattern().join() ? true : false;
  }

  resetKeyPattern() {
    this.keyPattern.length = 0;
  }

  detectPattern(keyCode) {
    this.addKeyCode(keyCode);

    if(!this.firstThreeMatch() && this.getKeyPattern().length == 3) {
      this.removeFirstKeyPattern();
    }

    if(this.successfulMatch()) {
      console.log('success: ', this.getKeyPattern());
    } else if(this.getKeyPattern().length == this.getKonamiPattern().length) {
      console.log('failed: ', this.getKeyPattern());
      this.resetKeyPattern();
    }
  }
}

export { EasterEggElement, ClickElements, KonamiCode };
