import {createContext} from 'react'

const experimentContexts = {
  root: createContext()
}

export function getExperimentContext(name = 'root') {
  if (!experimentContexts[name]) {
    // create new context for `name` and store it to `experimentContexts`
    experimentContexts[name] = createContext()
  }
  return experimentContexts[name]
}
