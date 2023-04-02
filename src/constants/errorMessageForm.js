export const ERROR_EMAIL_MESSAGE = `No Valid Email - format (login@mail.com)`
export const ERROR_DATE_MESSAGE = `No Valid Date`
export const ERROR_REQUIRED_MESSAGE = 'this field is required'

export const ERROR_PASSWORD_MESSAGE = {
  MIN: 'min count of characters 8',
  UPPERCASE: '1 character must be uppercase',
  DIGIT: 'must contain at least one digit 1-9',
  SYMBOL: 'must contain at least one character from !@#$%',
  REPEAT: `the passwords don't match`
}

export const ERROR_NAME_MESSAGE = {
  min: (min) => `min count of characters ${min}`,
  max: (max) => `min count of characters ${max}`
}