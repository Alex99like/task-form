import './button.css'

export class Button {
  constructor(type = 'button') {
    this.button = document.createElement('button')
    this.button.type = type
    this.button.classList.add('active')
  }     

  toggleActive(value) {
    if (value) {
      this.button.disabled = true
      this.button.classList.remove('active')
    } else {
      this.button.disabled = false
      this.button.classList.add('active')
    }
  }

  render(node) {
    this.button.textContent = 'SUBMIT'
    this.button.classList.add('submit-form')
    node.append(this.button)
  }
}