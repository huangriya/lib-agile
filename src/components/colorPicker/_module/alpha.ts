import { createLinearGradient, createAlphaSquare } from './utils'

class Alpha {
  private el: Element
  private ctx: any
  private width = 16
  private height = 152
  onChange: (rgb: any) => void
  constructor(saturationEl: Element) {
    const canvas: any = saturationEl.querySelector('canvas')
    this.ctx = canvas?.getContext('2d')
    this.el = saturationEl

    this.el.addEventListener('mousedown', (e) => {
      this.onMouseDown(e)
    })
  }
  load(color: any, a: number) {
    const canvasSquare = createAlphaSquare(5)
    this.ctx.fillStyle = this.ctx.createPattern(canvasSquare, 'repeat')
    this.ctx.fillRect(0, 0, this.width, this.height)
    createLinearGradient('p', this.ctx, this.width, this.height, 'rgba(255,255,255,0)', color)
    this.renderSlide(a * this.height - 2)
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

      const a = parseFloat((y / this.height).toFixed(2))

      this.renderSlide(a * this.height - 2)

      this.onChange && this.onChange(a)
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

export default Alpha
