import { ErrorForm } from '../../error/ErrorForm'
import { Button } from '../button/Button'
import { Field } from '../field/Field'
import { FieldDate } from '../fieldDate/FieldData'
import { Loader } from '../loader/Loader'
import './form.css'

const icons = {
  firstName: '<ion-icon class="icon" name="person"></ion-icon>',
  lastName: '<ion-icon class="icon" name="people"></ion-icon>',
  email: '<ion-icon class="icon" name="mail"></ion-icon>',
  password: '<ion-icon class="icon" name="lock-closed"></ion-icon>',
  repeatPassword: '<ion-icon class="icon" name="document-lock"></ion-icon>'
}

export class FormElement {
  constructor() {
    this.loader = new Loader()
    this.form = document.createElement('form')
    this.fields = {
      firstName: new Field('first-name', 'First Name', 'text', icons.firstName),
      lastName: new Field('last-name', 'Last Name', 'text', icons.lastName),
      date: new FieldDate('date', 'Date of Birth'),
      email: new Field('email', 'Email', 'email', icons.email),
      password: new Field('password', 'Password', 'password', icons.password),
      passwordRepeat: new Field('password-repeat', 'Password Repeat', 'password', icons.repeatPassword)
    }
    this.button = new Button('submit')
    this.errors = []
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
        this.checkFields(name)

        this.errors = Object.values(this.fields)
          .map(el => el.error)
          .filter(item => !!item)
        
        this.disabledSubmit()
      })
    })
  }

  farmData() {
    const body = {}
    Array.from(this.form.elements)
      .forEach((element) => {
        const { name, value } = element
        if (name) body[name] = value
      })

    return body
  }

  disabledSubmit() {
    if (!!this.errors.length) {
      this.button.toggleActive(true)
    } else {
      this.button.toggleActive(false)
    }
  }

  checkErrors() {
    this.checkFields('', true)
    this.errors = Object.values(this.fields)
      .map(el => el.error)
      .filter(item => !!item)
      
    this.disabledSubmit()
  }

  async submitHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.checkErrors()
      if (!this.errors.length) {
        const data = this.farmData()
        this.sendRequest(data)
      } else {
        this.disabledSubmit()
      }
    })
  }

  async sendRequest(body) {
    try {
      this.loader.render(this.form)
      this.button.toggleActive(true)
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const result = await data.json()
      console.log(result)
      this.loader.successCall()
      this.button.toggleActive(false)
    } catch(e) {
      this.loader.failedCall()
    } 
  }

  checkFields(name, check = false) {
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