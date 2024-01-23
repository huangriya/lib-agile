const isPlatform = (regexp: RegExp) => {
  return (): boolean => regexp.test(navigator.userAgent)
}

/**
 * 是否为移动设备
 */
export const isMobile = isPlatform(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)

/**
 * 是否为PC设备
 */
export const isPc = () => !isMobile()

// 是否为ios设备
export const isIOS = isPlatform(/\(i[^;]+;( U;)? CPU.+Mac OS X/gi)

export const isIPad = isPlatform(/iPad/gi)

export const isAndroid = isPlatform(/android|adr/gi)

export const isChrome = isPlatform(/Chrome/i)

export const isFirefox = isPlatform(/Firefox/i)

export const isSafari = isPlatform(/Safari/i)

export const isQQ = isPlatform(/qq/gi)

/**
 * 是否为微信浏览器
 */
export const isWeChat = isPlatform(/MicroMessenger/i)

// 是否为微博
export const isWeibo = isPlatform(/weibo/gi)

// 自定义规则验证设备类型
export const isDevice = (regexp: RegExp) => isPlatform(regexp)
