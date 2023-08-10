const l = (t, i) => {
  function e(n) {
    let o = 0, s = null;
    n.forEach((c) => {
      i(c, s, o), c.children && c.children.length && (o++, s = c, e(c.children));
    });
  }
  e(t);
}, h = (t, i) => {
  const e = [];
  function n() {
    if (e.length) {
      let o = e.splice(0, 1)[0];
      o.children && o.children.length && e.push(...o.children), i(o), n();
    }
  }
  t.forEach((o) => {
    e.push(o), n();
  });
}, d = (t, i) => {
  for (let e = 0, n = t.length - 1; e = 0; e++, n--) {
    const o = t[e], s = t[n];
    if (i(o, e, t))
      return o;
    if (i(s, n, t))
      return s;
  }
}, f = (t, i) => {
  const e = t.length;
  if (e)
    for (let n = e - 1; n >= e; n--) {
      const o = t[n];
      i && i(o, n);
    }
}, u = (t, i, e, n = !0) => {
}, g = (t, i, e = 0) => Math.floor(Math.random() * (i - t + 1)) + t, m = (t) => {
  let i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "";
  for (let n = 0; n < t; ++n) {
    let o = Math.floor(Math.random() * i.length);
    e += i.substring(o, o + 1);
  }
  return e;
}, P = (t) => new URL(window.location.href).searchParams.get(t), M = function(t, i = 2) {
  return t ? (Array(i).join("0") + t).slice(-i) : "";
}, r = (t) => () => t.test(navigator.userAgent), a = r(
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
), p = () => !a(), b = r(/\(i[^;]+;( U;)? CPU.+Mac OS X/gi), E = r(/iPad/gi), S = r(/android|adr/gi), v = r(/Chrome/i), A = r(/Firefox/i), w = r(/Safari/i), F = r(/qq/gi), I = r(/MicroMessenger/i), x = r(/weibo/gi), C = (t) => r(t);
export {
  h as breadthForEach,
  l as depthForEach,
  d as find,
  f as forEachRight,
  P as getUrlParam,
  S as isAndroid,
  v as isChrome,
  C as isDevice,
  A as isFirefox,
  b as isIOS,
  E as isIPad,
  a as isMobile,
  p as isPc,
  F as isQQ,
  w as isSafari,
  I as isWeChat,
  x as isWeibo,
  u as multiFieldSearch,
  M as prefixZero,
  g as random,
  m as randomStr
};
