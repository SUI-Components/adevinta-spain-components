import {useState} from 'react'
import useMount from '../useMount'

const AXIS_MAP = {
  Y: 'top',
  X: 'left'
}

const isClient = typeof window !== 'undefined' && window.document

export default function useScroll({axis = 'Y'} = {}) {
  const getBoundingClientRect = () =>
    isClient ? document.body.getBoundingClientRect() : 0
  const boundingKey = AXIS_MAP[axis]

  const [scroll, setScroll] = useState({
    position: getBoundingClientRect()[boundingKey],
    scrollDirection: null
  })

  const onScroll = e => {
    const currentBounding = getBoundingClientRect()
    const currentPosition = -currentBounding[boundingKey]

    setScroll(({position: prevPosition}) => ({
      position: currentPosition,
      scrollDirection: prevPosition > currentPosition ? 'DOWN' : 'UP'
    }))
  }

  useMount(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return {
    position: Math.round(scroll.position),
    direction: scroll.scrollDirection
  }
}
