import {createContext} from 'react'

import PropTypes from 'prop-types'

import useState from '../hooks/useState.js'

const NO_OP = () => null

export const TaskManagerContext = createContext()

export const TaskManagerProvider = ({children, onCompleteAllTasks = NO_OP, forceDevMode = false}) => {
  const exposedApi = useState({onCompleteAllTasks, forceDevMode})
  return <TaskManagerContext.Provider value={exposedApi}>{children}</TaskManagerContext.Provider>
}

TaskManagerProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onCompleteAllTasks: PropTypes.func,
  forceDevMode: PropTypes.bool
}
