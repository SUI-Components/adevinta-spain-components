import {useState, useEffect} from 'react'

export default function useScroll({axis = 'Y'} = {}) {
  const getBoundingClientRect = () =>
    window?.document ? document.body.getBoundingClientRect() : 0

  const AXIS_MAP = {
    Y: 'top',
    X: 'left'
  }
  const boundingKey = AXIS_MAP[axis]

  const [scroll, setScroll] = useState({
    bodyOffset: getBoundingClientRect(),
    position: getBoundingClientRect()[boundingKey],
    scrollDirection: null
  })

  const onScroll = e => {
    const currentBounding = getBoundingClientRect()
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
