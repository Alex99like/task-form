import './loader.css'

export class Loader {
  constructor() {
    this.container = document.createElement('div')
    // this.loaderContainer = document.createElement('div')
    this.ring = document.createElement('div')
    this.content = document.createElement('span')
  }

  createLoader() {
    this.container.classList.add('loader-container')
  
    // this.loaderContainer.classList.add('center')
    this.ring.classList.add('ring')

    this.content.textContent = 'LOADING...'
    this.container.append(this.ring)
    this.container.append(this.content)
    
  
    // this.container.append(this.loaderContainer)
  }

  callLoader() {}

  render(node) {
    this.createLoader()
    node.append(this.container)
  }
}