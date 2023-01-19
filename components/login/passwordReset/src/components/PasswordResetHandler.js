import FormHandler from './FormHandler.js'
import StageInfo from './StageInfo.js'

const PasswordResetHandler = () => {
  return (
    <div className="sui-LoginPasswordReset">
      <StageInfo />
      <FormHandler />
    </div>
  )
}

PasswordResetHandler.displayName = 'PasswordResetHandler'

export default PasswordResetHandler
