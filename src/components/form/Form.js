import { ErrorForm } from '../../error/ErrorForm'
import { Field } from '../field/Field'
import { FieldDate } from '../fieldDate/FieldData'
import './form.css'

const icons = {
  firstName: '<b class="icon">FN</b>',
  lastName: '<b class="icon">LN</b>',
  email: '<ion-icon class="icon" name="mail"></ion-icon>',
  password: '<ion-icon class="icon" name="lock-closed"></ion-icon>',
}

export class FormElement {
  constructor() {
    this.form = document.createElement('form')
    this.fields = {
      firstName: new Field('first-name', 'First Name', 'text', icons.firstName),
      lastName: new Field('last-name', 'Last Name', 'text', icons.lastName),
      date: new FieldDate(),
      email: new Field('email', 'Email', 'email', icons.email),
      password: new Field('password', 'Password', 'password', icons.password),
      passwordRepeat: new Field('password-repeat', 'Password Repeat', 'password', icons.password)
    }
  }

  createForm() {
    Object.values(this.fields).forEach(el => {
      el.render(this.form)
    })
  }

  handlerChange() {
    Object.values(this.fields).forEach(el => {
      el.input.addEventListener('input', () => {
        this.checkError()
      })
    })
  }

  checkError() {
    ErrorForm.checkFieldText(this.fields.firstName, 2, 25)
    ErrorForm.checkFieldText(this.fields.lastName, 2, 25)
    ErrorForm.checkDateError(this.fields.date)
  }

  render(main) {
    this.createForm()
    this.handlerChange()
    this.form.classList.add('form-container')
    main.append(this.form)
  }
}