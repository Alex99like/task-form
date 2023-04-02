import './loader.css'

export class Loader {
  constructor() {
    this.container = document.createElement('div')
    this.loaderContainer = document.createElement('div')
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