import './fieldDate.css'

export class FieldDate {
  constructor(name, placeholder) {
    this.container = document.createElement('label')

    this.input = document.createElement('input')
    this.placeholder = document.createElement('span')
    this.input.type = 'date'
    this.name = name
    this.input.name = name
    this.errorField = document.createElement('span')
    this.error = ''

    this.placeholderText = placeholder

    this.success = document.createElement('div')
    this.failed = document.createElement('div')
  }

  createField() {
    this.container.classList.add('field-date')

    this.placeholder.textContent = this.placeholderText
    this.container.append(this.placeholder)
    this.success.classList.add('success')
    this.container.append(this.success)

    this.failed.classList.add('failed')
    this.container.append(this.failed)

    this.container.append(this.input)
  }

  checkActive() {
    this.input.addEventListener('focus', () => {
      this.placeholder.classList.add('active')
      this.input.classList.add('focus')
    })

    this.input.addEventListener('blur', () => {
      this.input.classList.remove('focus')
      this.placeholder.classList.remove('active')  
    })
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
    this.errorHandler()
    this.createField()
    this.checkActive()
    node.append(this.container)
  }
}