import {useState, useEffect} from 'react'

function useMediaQuery(queryInput, {defaultMatches = false} = {}) {
  const hasSupportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined'
  const matchMedia = hasSupportMatchMedia ? window.matchMedia : null

  const query = queryInput.replace(/^@media( ?)/m, '')

  const [match, setMatch] = useState(() => {
    if (hasSupportMatchMedia) return matchMedia(query).matches
    return defaultMatches
  })

  useEffect(() => {
    let active = true

    if (!hasSupportMatchMedia) return

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
  }, [query, matchMedia, hasSupportMatchMedia])

  return match
}

export default useMediaQuery
