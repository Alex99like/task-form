import './index.html'; 
import './style.css';

class FormHandler {
  constructor() {
    this.feilds = document.querySelectorAll('.field')
    //this.firstName = document.querySelector('#first-name')
    this.setActive()
  }

  setActive() {
    console.log(this.feilds)
    this.feilds.forEach((el) => {
      const input = document.querySelector('input')
      input.addEventListener('focus', () => {
        el.classList.add('active')
      })
      input.addEventListener('blur', () => {
        el.classList.remove('active')
      })
    })
  }
}

const form = new FormHandler()