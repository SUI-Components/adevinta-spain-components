module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV)

  let defaultConfig = {
    presets: ['babel-preset-sui']
  }

  if (api.env('test')) {
    defaultConfig = {
      ...defaultConfig,
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }

  return defaultConfig
}
