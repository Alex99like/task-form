import { ERROR_DATE_MESSAGE, ERROR_EMAIL_MESSAGE, ERROR_NAME_MESSAGE, ERROR_PASSWORD_MESSAGE, ERROR_REQUIRED_MESSAGE } from "../constants/errorMessageForm"

export class ErrorForm {
  static filedRequired(field) {
    const { input } = field
   
    if (input.value.trim().length <= 0) {
      field.addError(ERROR_REQUIRED_MESSAGE)
    }
  }

  static checkFieldText(field, min, max) {
    const { input } = field
    const value = input.value.trim()

    if (value.length < min) {
      field.addError(ERROR_NAME_MESSAGE.min(min))
    } else if (value.length > max) {
      field.addError(ERROR_NAME_MESSAGE.max(max))
    } else {
      field.clearError()
    }

    ErrorForm.filedRequired(field)
  }

  static checkDateError(field) {
    if (Date.now() < new Date(field.input.value).getTime()) {
      field.addError(ERROR_DATE_MESSAGE)
    } else {
      field.clearError()
    }
    
    ErrorForm.filedRequired(field)
  }

  static checkEmailError(field) {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (!regex.test(field.input.value)) {
      field.addError(ERROR_EMAIL_MESSAGE)
    } else {
      field.clearError()
    }

    ErrorForm.filedRequired(field)
  }

  static checkPassword(password) {
    const value = password.input.value
    const regUpperCaseSymbol = /[A-Z]/
    const regCheckNumber = /[1-9]/
    const regSymbol = /[!@#$%]/

    if (value.length < 8) {
      password.addError(ERROR_PASSWORD_MESSAGE.MIN)
    } else if (!regUpperCaseSymbol.test(value)) {
      password.addError(ERROR_PASSWORD_MESSAGE.UPPERCASE)
    } else if (!regCheckNumber.test(value)) {
      password.addError(ERROR_PASSWORD_MESSAGE.DIGIT)
    } else if (!regSymbol.test(value)) {
      password.addError(ERROR_PASSWORD_MESSAGE.SYMBOL)
    } else {
      password.clearError()
    }

    ErrorForm.filedRequired(password)
  }

  static checkPasswordRepeat(password, repeatPassword) {
    const valPas = password.input.value
    const repPas = repeatPassword.input.value
    if (valPas !== repPas) {
      repeatPassword.addError(ERROR_PASSWORD_MESSAGE.REPEAT);
    } else {
      repeatPassword.clearError()
    }

    ErrorForm.filedRequired(repeatPassword)
  }
}