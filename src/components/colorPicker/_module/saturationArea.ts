import { createLinearGradient } from './utils'

class SaturationArea {
  private el: Element
  private ctx: any
  private width = 152
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
  load(color: string, hsv: any) {
    this.ctx.fillStyle = color
    this.ctx.fillRect(0, 0, this.width, this.height)
    createLinearGradient('l', this.ctx, this.width, this.height, '#FFFFFF', 'rgba(255,255,255,0)')
    createLinearGradient('p', this.ctx, this.width, this.height, 'rgba(0,0,0,0)', '#000000')
    this.renderSlide(hsv.s * this.width - 5, (1 - hsv.v) * this.height - 5)
  }
  unload() {
    this.el.removeEventListener('mousedown', this.onMouseDown)
  }
  renderSlide(left: number, top: number) {
    const slide = this.el.querySelector('.slide')
    slide.style.left = left + 'px'
    slide.style.top = top + 'px'
  }

  private onMouseDown(e: any) {
    const { top: saturationTop, left: saturationLeft } = this.el.getBoundingClientRect()

    const mousemove = (e: any) => {
      let x = e.clientX - saturationLeft
      let y = e.clientY - saturationTop

      if (x < 0) {
        x = 0
      }
      if (y < 0) {
        y = 0
      }
      if (x > this.width) {
        x = this.width
      }
      if (y > this.height) {
        y = this.height
      }

      this.renderSlide(x - 5, y - 5)

      // 如果用最大值，选择的像素会是空的，空的默认是黑色
      const imgData = this.ctx.getImageData(Math.min(x, this.width - 1), Math.min(y, this.height - 1), 1, 1)
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

export default SaturationArea
