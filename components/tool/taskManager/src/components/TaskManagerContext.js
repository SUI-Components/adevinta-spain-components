import {createContext} from 'react'

import PropTypes from 'prop-types'

import useState from '../hooks/useState.js'

const NO_OP = () => null

export const TaskManagerContext = createContext()

export const TaskManagerProvider = ({children, onCompleteAllTasks = NO_OP}) => {
  const exposedApi = useState({onCompleteAllTasks})
  return (
    <TaskManagerContext.Provider value={exposedApi}>
      {children}
    </TaskManagerContext.Provider>
  )
}

TaskManagerProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onCompleteAllTasks: PropTypes.func
}
