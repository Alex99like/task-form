import './field.css'

export class Field {
  constructor(name, placeholderText, type, icon) {
    this.container = document.createElement('label')
    this.input = document.createElement('input')
    this.placeholder = document.createElement('span')
    this.wrapper = document.createElement('div')

    this.success = document.createElement('div')
    this.failed = document.createElement('div')

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
      this.container.classList.add('focus')
    })

    this.input.addEventListener('blur', () => {
      this.container.classList.remove('focus')
      if (!this.input.value.length) {
        this.placeholder.classList.remove('active')
      }
    })
  }

  createField() {
    this.input.type = this.type
    this.placeholder.textContent = this.placeholderText
    this.container.htmlFor = this.name
    this.input.id = this.name
    this.container.classList.add('field')
    this.wrapper.classList.add('wrapper')
    this.placeholder.classList.add('placeholder')

    this.wrapper.append(this.input)
    this.wrapper.append(this.placeholder)

    this.input.name = this.name

    this.success.classList.add('success')
    this.container.append(this.success)

    this.failed.classList.add('failed')
    this.container.append(this.failed)
    
    this.wrapper.insertAdjacentHTML('beforeend', this.icon)
    this.container.append(this.wrapper)
  }

  addError(text) {
    this.errorField.textContent = text
    this.error = text
    this.failed.classList.add('active')
    this.success.classList.remove('active')
    this.errorField.classList.add('active')
  }

  clearError() {
    this.errorField.textContent = ''
    this.error = ''
    this.success.classList.add('active')
    this.failed.classList.remove('active')
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