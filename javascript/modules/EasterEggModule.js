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

export { EasterEggElement, ClickElements };
