const storage = ({type = 'sessionStorage', method = 'getItem', key, value}) => {
  try {
    return window[type][method](key, value)
  } catch (e) {
    console.error(e)
  }
}

export {storage}
