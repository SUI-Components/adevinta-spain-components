export const setTokenAndExpiration = (token, exp, global) => {
  const url = new URL(global.window.location)
  url.searchParams.set('token', token)
  url.searchParams.set('exp', exp)
  global.window.history.pushState(null, '', url.toString())
}
