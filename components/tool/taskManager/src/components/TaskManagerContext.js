import {createContext} from 'react'

import PropTypes from 'prop-types'

import useState from '../hooks/useState.js'

export const TaskManagerContext = createContext()

export const TaskManagerProvider = ({children}) => {
  const exposedApi = useState()
  return (
    <TaskManagerContext.Provider value={exposedApi}>
      {children}
    </TaskManagerContext.Provider>
  )
}

TaskManagerProvider.propTypes = {
  children: PropTypes.node.isRequired
}
