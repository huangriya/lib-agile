/*
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量 = 结束值 - 初始值）
 * d: duration（持续时间）
 */

const Tween = {
  Linear: function (t: number, b: number, c: number, d: number) {
    return (c * t) / d + b
  },
  Quad: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c * (t /= d) * t + b
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return -c * (t /= d) * (t - 2) + b
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b
      return (-c / 2) * (--t * (t - 2) - 1) + b
    },
  },
  Cubic: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c * (t /= d) * t * t + b
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b
      return (c / 2) * ((t -= 2) * t * t + 2) + b
    },
  },
  Quart: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c * (t /= d) * t * t * t + b
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b
      return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
    },
  },
  Quint: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c * (t /= d) * t * t * t * t + b
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b
      return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
    },
  },
  Sine: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
    },
    easeOut: function (t, b, c, d) {
      return c * Math.sin((t / d) * (Math.PI / 2)) + b
    },
    easeInOut: function (t, b, c, d) {
      return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
    },
  },
  Expo: {
    easeIn: function (t, b, c, d) {
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOut: function (t, b, c, d) {
      return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
    },
    easeInOut: function (t, b, c, d) {
      if (t == 0) return b
      if (t == d) return b + c
      if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b
    },
  },
  Circ: {
    easeIn: function (t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOut: function (t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOut: function (t, b, c, d) {
      if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
      return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
  },
  Elastic: {
    easeIn: function (t: number, b: number, c: number, d: number, a?: number, p?: number) {
      let s
      if (t == 0) return b
      if ((t /= d) == 1) return b + c
      if (typeof p == 'undefined') p = d * 0.3
      if (!a || a < Math.abs(c)) {
        s = p / 4
        a = c
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a)
      }
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
    },
    easeOut: function (t: number, b: number, c: number, d: number, a?: number, p?: number) {
      let s
      if (t == 0) return b
      if ((t /= d) == 1) return b + c
      if (typeof p == 'undefined') p = d * 0.3
      if (!a || a < Math.abs(c)) {
        a = c
        s = p / 4
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a)
      }
      return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b
    },
    easeInOut: function (t: number, b: number, c: number, d: number, a?: number, p?: number) {
      let s
      if (t == 0) return b
      if ((t /= d / 2) == 2) return b + c
      if (typeof p == 'undefined') p = d * (0.3 * 1.5)
      if (!a || a < Math.abs(c)) {
        a = c
        s = p / 4
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(c / a)
      }
      if (t < 1)
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b
    },
  },
  Back: {
    easeIn: function (t: number, b: number, c: number, d: number, s?: number) {
      if (typeof s == 'undefined') s = 1.70158
      return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOut: function (t: number, b: number, c: number, d: number, s?: number) {
      if (typeof s == 'undefined') s = 1.70158
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOut: function (t: number, b: number, c: number, d: number, s?: number) {
      if (typeof s == 'undefined') s = 1.70158
      if ((t /= d / 2) < 1) return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
      return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },
  },
  Bounce: {
    easeIn: function (t: number, b: number, c: number, d: number) {
      return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b
    },
    easeOut: function (t: number, b: number, c: number, d: number) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
      }
    },
    easeInOut: function (t: number, b: number, c: number, d: number) {
      if (t < d / 2) {
        return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b
      } else {
        return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
      }
    },
  },
}

export const animation = (
  option: {
    duration: number
    from: number
    to: number
    formulaFn?: (t: number, b: number, c: number, d: number) => number
    onStart?: (value: number) => void
    onEnd?: (value: number) => void
    onStop?: (value: number) => void
    onPlay?: (value: number) => void
  },
  fn: (value: number) => void,
) => {
  const opt = Object.assign(
    {
      formulaFn: function (t: number, b: number, c: number, d: number) {
        return (c * t) / d + b
      },
    },
    option,
  )

  let value: number = opt.from
  const startTime = Date.now()

  function _run() {
    const time = Date.now() - startTime
    if (time >= opt.duration) {
      value = opt.to
      fn && fn(value)
      return
    }
    value = opt.formulaFn(time, opt.from, opt.to - opt.from, opt.duration)
    fn && fn(value)
    requestAnimationFrame(_run)
  }

  _run()
}

/**
 *
 */

export default class Animation {
  private startTime: number = Date.now()
  private opt: any
  private value: number
  private stopTime = 0
  private stopStartTime = 0
  private requestAnimationId: any
  isStop = false
  isEnd = false
  onChange?: (value: number) => void
  onStart?: (value: number) => void
  onEnd?: (value: number) => void
  constructor(option: {
    duration: number
    from: number
    to: number
    formulaFn?: (t: number, b: number, c: number, d: number) => number
  }) {
    this.opt = Object.assign(
      {
        formulaFn: function (t: number, b: number, c: number, d: number) {
          return (c * t) / d + b
        },
      },
      option,
    )
    this.value = this.opt.from
    this.onStart && this.onStart(this.value)
    this.run()
  }
  private run() {
    // 结束后不再运行
    if (this.isEnd) return

    // 暂停运行动画
    if (this.isStop) return

    const time = Date.now() - this.startTime - this.stopTime

    if (time >= this.opt.duration) {
      this.value = this.opt.to
      this.change()
      this.onEnd && this.onEnd(this.value)
      this.isEnd = true
      return
    }

    this.value = this.opt.formulaFn(time, this.opt.from, this.opt.to - this.opt.from, this.opt.duration)
    this.change()
    this.requestAnimationId = requestAnimationFrame(() => this.run())
  }

  private change() {
    this.onChange && this.onChange(this.value)
  }

  // 暂停动画
  onStop() {
    this.isStop = true
    this.stopStartTime = Date.now()
  }

  // 继续动画
  onPlay() {
    this.isStop = false
    this.stopTime = this.stopTime + (Date.now() - this.stopStartTime)
    this.run()
  }

  // 销毁
  destroyed() {
    window.cancelAnimationFrame(this.requestAnimationId)
  }
}
