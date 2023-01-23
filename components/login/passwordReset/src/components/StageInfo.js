import MoleculeProgressSteps, {
  MoleculeProgressStep,
  STATUSES
} from '@s-ui/react-molecule-progress-steps'

import {BASE_CLASS} from './../config.js'
import useI18n from './../hooks/useI18n.js'
const StageInfo = () => {
  const i18n = useI18n()
  return (
    <div className={`${BASE_CLASS}-stageInfo`}>
      <div className={`${BASE_CLASS}-stageInfoProgress`}>
        <MoleculeProgressSteps compressed>
          <MoleculeProgressStep
            label={i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.LABEL')}
            status={STATUSES.ACTIVE}
          />
          <MoleculeProgressStep />
        </MoleculeProgressSteps>
      </div>
      <h1 className={`${BASE_CLASS}-stageInfoTitle`}>
        {i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.TITLE')}
      </h1>
      <p className={`${BASE_CLASS}-stageInfoMessage`}>
        {i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.MESSAGE')}
      </p>
    </div>
  )
}

StageInfo.displayName = 'StageInfo'

export default StageInfo
