class EasterEggElement {
  constructor() {
    this.div = document.createElement('div');
    this.div.setAttribute('id', 'easter-egg');
  }

  getDiv() {
    return this.div;
  }
}

export default EasterEggElement;
