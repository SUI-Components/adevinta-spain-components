import cx from 'classnames'
import PropTypes from 'prop-types'

import AtomProgressBar from '@s-ui/react-atom-progress-bar'
import MoleculeAccordion, {moleculeAccordionBehavior, MoleculeAccordionItem} from '@s-ui/react-molecule-accordion'

import {TaskManagerProvider} from './components/TaskManagerContext.js'
import useBeforeUnloadEffect from './hooks/useBeforeUnloadEffect.js'
import useContext from './hooks/useContext.js'
import useDevMode from './hooks/useDevMode.js'
export default function ToolTaskManager({
  isVisible = true,
  statusIcons = {},
  taskAmountFilter = 0,
  taskIdsFilter = []
}) {
  const {countWork, countFinishedWork, getState} = useContext()
  const state = getState()
  const {isDevModeEnabled, registerClick} = useDevMode()
  useBeforeUnloadEffect({isVisible})
  const getItems = () => {
    return (
      <>
        {state.tasks.map((task, index) => {
          if (task.visibleWork === 0 && isDevModeEnabled === false) return

          if (
            Array.isArray(taskIdsFilter) &&
            taskIdsFilter.length > 0 &&
            taskIdsFilter.find(id => id === task.id) === undefined
          )
            return

          if (taskAmountFilter !== 0 && taskAmountFilter > index) return

          const Icon = statusIcons[task.status] || ''
          const taskClassName = cx('sui-ToolTaskManager-task', `is-${task.status.toLowerCase()}`)

          const getLabel = () => {
            return (
              <div className={taskClassName}>
                <div className="sui-ToolTaskManager-taskInfo">
                  <div className="sui-ToolTaskManager-taskIcon">{Icon}</div>
                  <div className="sui-ToolTaskManager-taskName">{task.name}</div>
                </div>
                <div className="sui-ToolTaskManager-taskCounter">
                  {countFinishedWork(task.id)} de {countWork(task.id)}
                </div>
              </div>
            )
          }

          return (
            <MoleculeAccordionItem
              key={task.id}
              value={task.id}
              label={getLabel()}
              content={
                <>
                  {task.work.map(work => {
                    if (!work.isVisible && isDevModeEnabled === false) return

                    return (
                      <div className="sui-ToolTaskManager-work">
                        <div className="sui-ToolTaskManager-workInfo">
                          <span className="sui-ToolTaskManager-workInfoText">{work.name}</span>
                          <span>{work.percentage}%</span>
                        </div>

                        <div className="sui-ToolTaskManager-workProgressBar">
                          <AtomProgressBar hideIndicator percentage={work.percentage} type="line" size="medium" />
                        </div>
                      </div>
                    )
                  })}
                </>
              }
            />
          )
        })}
      </>
    )
  }

  if (!isVisible) return null

  // const existingTasks = isDevModeEnabled
  //   ? state.tasks.length
  //   : state.tasks.filter(task => task.visibleWork > 0).length

  return (
    <div className="sui-ToolTaskManager" onClick={registerClick}>
      <div className="sui-ToolTaskManager-container">
        <MoleculeAccordion as="div" behavior={moleculeAccordionBehavior.MULTIPLE}>
          <>{getItems()}</>
        </MoleculeAccordion>
      </div>
    </div>
  )
}

ToolTaskManager.displayName = 'ToolTaskManager'
ToolTaskManager.propTypes = {
  isVisible: PropTypes.bool,
  statusIcons: PropTypes.arrayOf(
    PropTypes.shape({
      CANCELLED: PropTypes.node,
      COMPLETED: PropTypes.node,
      ERROR: PropTypes.node,
      IN_PROGRESS: PropTypes.node,
      QUEUED: PropTypes.node
    })
  ),
  taskAmountFilter: PropTypes.number,
  taskIdsFilter: PropTypes.arrayOf(PropTypes.string)
}

export {TaskManagerProvider, useContext as useTaskManagerContext}
