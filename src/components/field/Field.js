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

    this.errorField = document.createElement('span')
    this.error = ''
  }

  checkActive() {
    this.input.addEventListener('focus', () => {
      this.placeholder.classList.add('active')
    })

    this.input.addEventListener('blur', () => {
      if (!this.input.value.length) {
        this.placeholder.classList.remove('active')
      }
    })
  }

  createField() {
    this.input.type = this.type
    this.placeholder.textContent = this.placeholderText
    this.container.classList.add('field')
    this.wrapper.append(this.input)
    this.wrapper.append(this.placeholder)

    this.input.name = this.name
    
    this.wrapper.insertAdjacentHTML('beforeend', this.icon)
    this.container.append(this.wrapper)
  }

  addError(text) {
    this.errorField.textContent = text
    this.errorField.classList.add('active')
  }

  clearError() {
    this.errorField.textContent = ''
    this.errorField.classList.remove('active')
  }

  errorHandler() {
    this.errorField.classList.add('error-field')
    this.container.append(this.errorField)
  }

  render(node) {
    this.createField()
    this.checkActive()
    this.errorHandler()
    node.append(this.container)
  }
}