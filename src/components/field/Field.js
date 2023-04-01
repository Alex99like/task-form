import './field.css'

export class Field {
  constructor(name, placeholderText, type, icon) {
    this.container = document.createElement('label')
    this.input = document.createElement('input')
    this.placeholder = document.createElement('span')
    this.wrapper = document.createElement('div')

    this.icon = icon
    this.name = name
    this.placeholderText = placeholderText
    this.type = type
  }

  checkActive() {
    this.input.addEventListener('focus', () => {
      this.container.classList.add('active')
    })

    this.input.addEventListener('blur', () => {
      if (!this.input.value.length) {
        this.container.classList.remove('active')
      }
    })
  }

  createField() {
    this.input.type = this.type
    this.placeholder.textContent = this.placeholderText
    this.container.classList.add('field')
    this.wrapper.append(this.input)
    this.wrapper.append(this.placeholder)
    
    this.wrapper.insertAdjacentHTML('beforeend', this.icon)
    this.container.append(this.wrapper)
  }

  render(node) {
    this.createField()
    this.checkActive()
    node.append(this.container)
  }
}