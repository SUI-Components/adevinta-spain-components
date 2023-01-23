import MoleculeProgressSteps, {
  MoleculeProgressStep,
  STATUSES
} from '@s-ui/react-molecule-progress-steps'

import {BASE_CLASS} from './../config.js'
const StageInfo = () => {
  return (
    <div className={`${BASE_CLASS}-stageInfo`}>
      <div className={`${BASE_CLASS}-stageInfoProgress`}>
        <MoleculeProgressSteps compressed>
          <MoleculeProgressStep
            label="Introduce tu email"
            status={STATUSES.ACTIVE}
          />
          <MoleculeProgressStep />
        </MoleculeProgressSteps>
      </div>
      <h1 className={`${BASE_CLASS}-stageInfoTitle`}>
        ¿Has olvidado tu contraseña?
      </h1>
      <p className={`${BASE_CLASS}-stageInfoMessage`}>
        Escribe tu email de usuario y te enviaremos un correo para poder
        restaurarla. Recuerda que solo es válido durante 24h.
      </p>
    </div>
  )
}

StageInfo.displayName = 'StageInfo'

export default StageInfo
