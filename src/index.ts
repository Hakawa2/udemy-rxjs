function component() {
    const element = document.createElement('div');

    element.innerHTML = 'a';

    return element;
  }

  document.body.appendChild(component());