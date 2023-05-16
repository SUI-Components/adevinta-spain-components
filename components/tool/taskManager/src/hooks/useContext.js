import {useContext} from 'react'

import {TaskManagerContext} from '../components/TaskManagerContext.js'

const useTaskManagerContext = () => useContext(TaskManagerContext)

export default useTaskManagerContext
