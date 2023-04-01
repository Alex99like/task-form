import { ErrorForm } from '../../error/ErrorForm'
import { Button } from '../button/Button'
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
    this.button = new Button('submit')
  }

  createForm() {
    Object.values(this.fields).forEach(el => {
      el.render(this.form)
    })
    this.button.render(this.form)
  }

  handlerChange() {
    Object.values(this.fields).forEach(el => {
      el.input.addEventListener('input', (e) => {
        const { name } = e.target
        this.checkError(name)
      })
    })
  }

  

  submitHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.checkError('', true)
      const body = {}
      Array.from(this.form.elements)
        .forEach((element) => {
          const { name, value } = element
          if (name) body[name] = value
        })
    })
  }

  checkError(name, check = false) {
    const { firstName, lastName, email, date, password, passwordRepeat } = this.fields
    const { checkFieldText, checkDateError, checkEmailError, checkPassword, checkPasswordRepeat } = ErrorForm

    if (name === firstName.name || check) checkFieldText(firstName, 2, 25)
    if (name === lastName.name || check) checkFieldText(lastName, 2, 25)
    if (name === date.name || check) checkDateError(date)
    if (name === email.name || check) checkEmailError(email)
    if (name === password.name || check) checkPassword(password)
    if (name === passwordRepeat.name || check) checkPasswordRepeat(password, passwordRepeat)
  }

  render(main) {
    this.createForm()
    this.handlerChange()
    this.submitHandler()
    this.form.classList.add('form-container')
    main.append(this.form)
  }
}