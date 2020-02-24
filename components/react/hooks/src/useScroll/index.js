import {useState, useEffect} from 'react'

export default function useScroll({axis = 'Y'} = {}) {
  const getBounding = () =>
    typeof window === 'undefined' || !window.document
      ? 0
      : document.body.getBoundingClientRect()

  const AXIS_MAP = {
    Y: 'top',
    X: 'left'
  }
  const boundingKey = AXIS_MAP[axis]

  const [scroll, setScroll] = useState({
    bodyOffset: getBounding(),
    position: getBounding()[boundingKey],
    scrollDirection: null
  })

  const onScroll = e => {
    const currentBounding = getBounding()
    const currentPosition = -currentBounding[boundingKey]

    setScroll(({position: prevPosition}) => ({
      bodyOffset: currentBounding,
      position: currentPosition,
      scrollDirection: prevPosition > currentPosition ? 'DOWN' : 'UP'
    }))
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, []) // eslint-disable-line

  return {
    position: Math.round(scroll.position),
    direction: scroll.scrollDirection
  }
}
