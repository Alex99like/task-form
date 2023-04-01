import './fieldDate.css'

export class FieldDate {
  constructor() {
    this.container = document.createElement('label')

    this.input = document.createElement('input')
    this.input.type = 'date'
  }

  createField() {
    this.container.classList.add('field-date')

    this.container.append(this.input)
  }

  render(node) {
    this.createField()
    node.append(this.container)
  }
}