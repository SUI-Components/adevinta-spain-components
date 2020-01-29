export const clean = arr => arr.filter(Boolean)
export const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))
export const head = arr => arr[0]
export const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))
