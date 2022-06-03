import {useState, useEffect} from 'react'

function useMediaQuery(queryInput, {defaultMatches = false} = {}) {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined'
  const matchMedia = supportMatchMedia ? window.matchMedia : null

  const query = queryInput.replace(/^@media( ?)/m, '')

  const [match, setMatch] = useState(() => {
    if (supportMatchMedia) return matchMedia(query).matches
    return defaultMatches
  })

  useEffect(() => {
    let active = true

    if (!supportMatchMedia) return

    const queryList = matchMedia(query)
    const updateMatch = () => {
      if (active) setMatch(queryList.matches)
    }
    updateMatch()
    queryList.addListener(updateMatch)

    return () => {
      active = false
      queryList.removeListener(updateMatch)
    }
  }, [query, matchMedia, supportMatchMedia])

  return match
}

export default useMediaQuery
