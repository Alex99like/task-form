export class ErrorForm {
  static filedRequired(field) {
    const { input } = field
   
    if (input.value.trim().length <= 0) {
      field.addError('this field is required')
    }
  }

  static checkFieldText(field, min, max) {
    const { input } = field
    const value = input.value.trim()

    if (value.length < min) {
      field.addError(`min count of characters ${min}`)
    } else if (value.length > max) {
      field.addError(`max count of characters ${max}`)
    } else {
      field.clearError()
    }

    ErrorForm.filedRequired(field)
  }

  static checkDateError(field) {
    if (Date.now() < new Date(field.input.value).getTime()) {
      field.addError(`No Valid Date `)
    } else {
      field.clearError()
    }
    
    ErrorForm.filedRequired(field)
  }

  static checkEmailError(field) {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (!regex.test(field.input.value)) {
      field.addError(`No Valid Email - format (login@mail.com)`)
    } else {
      field.clearError()
    }

    ErrorForm.filedRequired(field)
  }

  static checkPassword(password) {
    const value = password.input.value
    // const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,}$/
    const regUpperCaseSymbol = /[A-Z]/
    const regCheckNumber = /[1-9]/
    const regSymbol = /[!@#$%]/

    if (value.length < 8) {
      password.addError('min count of characters 8')
    } else if (!regUpperCaseSymbol.test(value)) {
      password.addError('1 character must be uppercase')
    } else if (!regCheckNumber.test(value)) {
      password.addError('must contain at least one digit 1-9')
    } else if (!regSymbol.test(value)) {
      password.addError('must contain at least one character from !@#$%')
    } else {
      password.clearError()
    }

    ErrorForm.filedRequired(password)
  }

  static checkPasswordRepeat(password, repeatPassword) {
    const valPas = password.input.value
    const repPas = repeatPassword.input.value
    if (valPas !== repPas) {
      repeatPassword.addError(`the passwords don't match`);
    } else {
      repeatPassword.clearError()
    }

    ErrorForm.filedRequired(repeatPassword)
  }
}