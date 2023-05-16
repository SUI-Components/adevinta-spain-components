import {useRef} from 'react'

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
import useContext from './hooks/useContext.js'

export default function ToolTaskManager() {
  window.taskManager = useContext()
  const {state, toggleTab} = window.taskManager
  const drawerRef = useRef()
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
        {state.tasks.map(task => (
          <MoleculeAccordionItem
            key={task.id}
            value={task.id}
            label={`${task.status} - ${task.name}`}
            content={
              <>
                {task.work.map(work => (
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
                ))}
              </>
            }
          />
        ))}
      </>
    )
  }

  return (
    <div className="sui-ToolTaskManager">
      <MoleculeBadgeCounter
        label={state.tasks.length}
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
ToolTaskManager.propTypes = {}

export {TaskManagerProvider, useContext as useTaskManagerContext}
