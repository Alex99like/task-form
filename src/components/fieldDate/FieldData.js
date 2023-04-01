import './fieldDate.css'

export class FieldDate {
  constructor(name) {
    this.container = document.createElement('label')

    this.input = document.createElement('input')
    this.input.type = 'date'
    this.name = name
    this.input.name = name
    this.errorField = document.createElement('span')
    this.error = ''
  }

  createField() {
    this.container.classList.add('field-date')

    this.container.append(this.input)
  }

  addError(text) {
    this.errorField.textContent = text
    this.error = text
    this.errorField.classList.add('active')
  }

  clearError() {
    this.errorField.textContent = ''
    this.error = ''
    this.errorField.classList.remove('active')
  }

  errorHandler() {
    this.errorField.classList.add('error-field')
    this.container.append(this.errorField)
  }


  render(node) {
    this.errorHandler()
    this.createField()
    node.append(this.container)
  }
}