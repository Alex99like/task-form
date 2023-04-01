export class ErrorForm {
  static checkFieldText(field, min, max) {
    const { input } = field
    
    if (input.value.length < min) {
      field.addError(`min count of characters ${min}`)
    } else if (input.value.length > max) {
      field.addError(`max count of characters ${max}`)
    } else {
      field.clearError()
    }
  }

  static checkDateError(field) {
    if (Date.now() < new Date(field.input.value).getTime()) {
      field.addError(`No Valid Date `)
    } else {
      field.clearError()
    }
  }

}