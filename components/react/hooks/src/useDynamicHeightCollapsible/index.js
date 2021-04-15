import {useState, useCallback} from 'react'
import useToggle from '../useToggle'

export default function useDynamicHeightCollapsible(getContentHeighFn) {
  const [isCollapsed, toggleCollapsible] = useToggle(true)
  const [contentHeight, setContentHeight] = useState(null)
  const heightRecalculator = useCallback(() => {
    const newContentHeight = getContentHeighFn()
    setContentHeight(newContentHeight)
  }, [getContentHeighFn])

  return [
    isCollapsed,
    contentHeight,
    {toggle: () => toggleCollapsible(), heightRecalculator}
  ]
}
