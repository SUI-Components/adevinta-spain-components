import {useRef} from 'react'

import PropTypes from 'prop-types'

import AtomProgressBar from '@s-ui/react-atom-progress-bar'
import MoleculeAccordion, {
  moleculeAccordionBehavior,
  MoleculeAccordionItem
} from '@s-ui/react-molecule-accordion'
import MoleculeBadgeCounter, {
  moleculeBadgeCounterSizes
} from '@s-ui/react-molecule-badge-counter'
import MoleculeDrawer, {
  MoleculeDrawerOverlay,
  moleculeDrawerPlacements,
  moleculeDrawerSizes
} from '@s-ui/react-molecule-drawer'

import {TaskManagerProvider} from './components/TaskManagerContext.js'
import useBeforeUnloadEffect from './hooks/useBeforeUnloadEffect.js'
import useContext from './hooks/useContext.js'
import useDevMode from './hooks/useDevMode.js'

export default function ToolTaskManager({isVisible = true}) {
  window.taskManager = useContext()
  const {getState, toggleTab} = window.taskManager
  const state = getState()
  const drawerRef = useRef()
  const {isDevModeEnabled, registerClick} = useDevMode()
  useBeforeUnloadEffect({isVisible})

  const _onClick = () => {
    toggleTab()
  }

  const getDrawer = () => {
    return (
      <>
        <MoleculeDrawerOverlay isVisible={state.toggleTab} />
        <MoleculeDrawer
          closeOnOutsideClick
          isOpen={state.toggleTab}
          onClose={_onClick}
          placement={moleculeDrawerPlacements.BOTTOM}
          ref={drawerRef}
          size={moleculeDrawerSizes.AUTO}
        >
          <div className="sui-ToolTaskManager-container">
            <MoleculeAccordion
              as="div"
              behavior={moleculeAccordionBehavior.MULTIPLE}
            >
              <>{getItems()}</>
            </MoleculeAccordion>
          </div>
        </MoleculeDrawer>
      </>
    )
  }

  const getItems = () => {
    return (
      <>
        {state.tasks.map(task => {
          if (task.visibleWork === 0 && isDevModeEnabled === false) return

          return (
            <MoleculeAccordionItem
              key={task.id}
              value={task.id}
              label={`${task.status} - ${task.name}`}
              content={
                <>
                  {task.work.map(work => {
                    if (!work.isVisible && isDevModeEnabled === false) return

                    return (
                      <div className="sui-ToolTaskManager-work">
                        <div className="sui-ToolTaskManager-workInfo">
                          {work.status} - {work.name} - {work.percentage}%
                          {work.percentage === 100 && '✅'}
                        </div>
                        {work.percentage !== 100 ? (
                          <div className="sui-ToolTaskManager-workProgressBar">
                            <AtomProgressBar
                              hideIndicator
                              percentage={work.percentage}
                              type="line"
                              size="small"
                            />
                          </div>
                        ) : null}
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

  const existingTasks = isDevModeEnabled
    ? state.tasks.length
    : state.tasks.filter(task => task.visibleWork > 0).length

  return (
    <div className="sui-ToolTaskManager" onClick={registerClick}>
      <MoleculeBadgeCounter
        label={existingTasks}
        size={moleculeBadgeCounterSizes.LARGE}
      >
        <div className="sui-ToolTaskManager-tab" onClick={_onClick}>
          🤩 TaskManager 🤩
        </div>
      </MoleculeBadgeCounter>
      {getDrawer()}
    </div>
  )
}

ToolTaskManager.displayName = 'ToolTaskManager'
ToolTaskManager.propTypes = {
  isVisible: PropTypes.bool
}

export {TaskManagerProvider, useContext as useTaskManagerContext}
