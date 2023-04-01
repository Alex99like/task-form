import './button.css'

export class Button {
  constructor(type = 'button') {
    this.button = document.createElement('button')
    this.button.type = type
  }

  render(node) {
    this.button.textContent = 'SUBMIT'
    this.button.classList.add('submit-form')
    node.append(this.button)
  }
}