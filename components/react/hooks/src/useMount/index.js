import {useEffect} from 'react'

export default function useMount(effect) {
  useEffect(() => {
    let clean = () => {}
    async function doEffect() {
      clean = await effect()
    }
    doEffect()
    return () => clean()
  }, []) // eslint-disable-line
}
