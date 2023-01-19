import {BASE_CLASS} from '../config.js'
import FormHandler from './FormHandler.js'
import StageInfo from './StageInfo.js'

const PasswordResetHandler = () => {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-item`}>
        <StageInfo />
      </div>
      <div className={`${BASE_CLASS}-item`}>
        <FormHandler />
      </div>
      <div className={`${BASE_CLASS}-item ${BASE_CLASS}-itemFalse`} />
    </div>
  )
}

PasswordResetHandler.displayName = 'PasswordResetHandler'

export default PasswordResetHandler
