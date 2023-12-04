import useMediaQuery from '../useMediaQuery/index.js'

const usePreCalculatedMediaQuery = queryInput => {
  const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined'
  const query = queryInput.replace(/^@media( ?)/m, '')
  const matchMedia = supportMatchMedia ? window.matchMedia : null

  let matches = true

  if (supportMatchMedia) {
    const queryList = matchMedia(query)
    matches = queryList.matches
  }

  return useMediaQuery(queryInput, {defaultMatches: matches})
}

export default usePreCalculatedMediaQuery
