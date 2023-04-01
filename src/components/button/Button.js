export class Button {
  constructor() {
    this.button = document.createElement('button')
  }

  render(node) {
    node.append(this.button)
  }
}