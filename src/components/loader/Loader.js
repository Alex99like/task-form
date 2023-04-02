import './loader.css'

export class Loader {
  constructor() {
    this.container = document.createElement('div')
    this.loaderContainer = document.createElement('div')

    this.success = document.createElement('div')
    this.failed = document.createElement('div')

    this.points = []
    this.createPoints()
  }

  createPoints() {
    for (let i = 1; i <= 20; i++) {
      const point = document.createElement('span')
      point.style = `--i:${i}`
      this.points.push(point)
      this.loaderContainer.append(point)
    }
  }

  failedCall() {
    this.failed.classList.add('failed-loader')
    this.loaderContainer.remove()
    this.container.append(this.success)
    setTimeout(() => {
      this.failed.remove()
      this.container.remove()
    }, 1300)
  }

  successCall() {
    this.success.classList.add('success-loader')
    this.loaderContainer.remove()
    this.container.append(this.success)
    setTimeout(() => {
      this.success.remove()
      this.container.remove()
    }, 1300)
  }

  createLoader() {
    this.container.classList.add('loader-container', 'no-active')
    this.loaderContainer.classList.add('loader')
    this.container.append(this.loaderContainer)
  }

  callLoader() {}

  render(node) {
    this.createLoader()
    node.append(this.container)
  }
}