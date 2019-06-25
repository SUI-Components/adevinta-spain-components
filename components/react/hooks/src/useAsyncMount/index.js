import {useEffect} from 'react'

export default function useAsyncMount(effect) {
  useEffect(() => {
    effect()
  }, []) // eslint-disable-line
}
