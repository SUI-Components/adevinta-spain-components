import MoleculeProgressSteps, {MoleculeProgressStep} from '@s-ui/react-molecule-progress-steps'

import {BASE_CLASS} from '../../config.js'
import useGetStageInfoStep from '../../hooks/components/useGetStageInfoStep.js'
const StageInfo = () => {
  const {getStageInfoData} = useGetStageInfoStep()

  const {title, message, initialStepperState, endStepperState} = getStageInfoData()

  return (
    <div className={`${BASE_CLASS}-stageInfo`}>
      <div className={`${BASE_CLASS}-stageInfoProgress`}>
        <MoleculeProgressSteps compressed>
          <MoleculeProgressStep label={initialStepperState.label} status={initialStepperState.status} />
          <MoleculeProgressStep label={endStepperState.label} status={endStepperState.status} />
        </MoleculeProgressSteps>
      </div>
      <h1 className={`${BASE_CLASS}-stageInfoTitle`}>{title}</h1>
      <p className={`${BASE_CLASS}-stageInfoMessage`}>{message}</p>
    </div>
  )
}

StageInfo.displayName = 'StageInfo'

export default StageInfo
