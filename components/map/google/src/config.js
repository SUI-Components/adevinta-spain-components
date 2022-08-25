export const BASE_CLASS = 'sui-MapGoogle'
export const CONTAINER_CLASSNAME = `${BASE_CLASS}-Container`
export const DEFAULT_CENTER = {lat: 40.416775, lng: -3.70379}
export const DEFAULT_LANGUAGE = 'es'
export const DEFAULT_ZOOM = 7

export const getDefaultMapSize = ({height, width}) => ({
  height: height ?? '100%',
  width: width ?? '100%'
})

export const handle = handler =>
  typeof handler === 'function' ? handler : () => {}
