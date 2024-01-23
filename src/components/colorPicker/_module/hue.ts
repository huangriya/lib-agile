class Hue {
  private el: Element
  private ctx: any
  private width = 16
  private height = 152
  onChange: (rgb: object) => void
  constructor(saturationEl: Element) {
    const canvas: any = saturationEl.querySelector('canvas')
    this.ctx = canvas?.getContext('2d')
    this.el = saturationEl

    this.el.addEventListener('mousedown', (e) => {
      this.onMouseDown(e)
    })
  }
  load(hsv: any) {
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height)
    gradient.addColorStop(0, '#FF0000') // red
    gradient.addColorStop(0.17 * 1, '#FF00FF') // purple
    gradient.addColorStop(0.17 * 2, '#0000FF') // blue
    gradient.addColorStop(0.17 * 3, '#00FFFF') // green
    gradient.addColorStop(0.17 * 4, '#00FF00') // green
    gradient.addColorStop(0.17 * 5, '#FFFF00') // yellow
    gradient.addColorStop(1, '#FF0000') // red
    this.ctx.fillStyle = gradient
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.renderSlide((1 - hsv.h / 360) * this.height - 2)
  }
  unload() {
    this.el.removeEventListener('mousedown', this.onMouseDown)
  }
  renderSlide(top: number) {
    const slide = this.el.querySelector('.slide')
    slide.style.top = top + 'px'
  }

  private onMouseDown(e: any) {
    const { top: hueTop } = this.el.getBoundingClientRect()

    const mousemove = (e: any) => {
      let y = e.clientY - hueTop

      if (y < 0) {
        y = 0
      }
      if (y > this.height) {
        y = this.height
      }

      this.renderSlide(y - 2)

      // If you use the maximum value, the selected pixel will be empty, and the empty default is black
      const imgData = this.ctx.getImageData(0, Math.min(y, this.height - 1), 1, 1)
      const [r, g, b] = imgData.data

      this.onChange && this.onChange({ r, g, b })
    }

    mousemove(e)

    const mouseup = () => {
      document.removeEventListener('mousemove', mousemove)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)
  }
}

export default Hue
