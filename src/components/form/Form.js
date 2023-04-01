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

  render(main) {
    this.createForm()
    this.form.classList.add('form-container')
    main.append(this.form)
  }
}