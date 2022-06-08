import {useEffect, useState} from 'react'

const supportMatchMedia =
  typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined'

function useMediaQuery(queryInput, {defaultMatches = false} = {}) {
  const query = queryInput.replace(/^@media( ?)/m, '')
  const matchMedia = supportMatchMedia ? window.matchMedia : null

  const [match, setMatch] = useState(defaultMatches)

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
  }, [query, matchMedia])

  return match
}

export default useMediaQuery
