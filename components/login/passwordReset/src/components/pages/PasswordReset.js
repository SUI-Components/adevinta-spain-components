import {BASE_CLASS, STAGE_PASSWORD_RESET_START} from '../../config.js'
import TemplateForm from '../templates/Form.js'
import OrganismStageInfo from '../organisms/StageInfo.js'
import OrganismPasswordChangeForm from '../organisms/PasswordChangeForm.js'
import OrganismPasswordResetForm from '../organisms/PasswordResetForm.js'
import MoleculeUserAcquisitionText from '../atoms/UserAcquisitionText.js'
import useGetCurrentToken from '../../hooks/useGetCurrentToken.js'

const PagePasswordReset = () => {
  const {getCurrentToken} = useGetCurrentToken()
  const {stage} = getCurrentToken()
  const isInitialStep = stage === STAGE_PASSWORD_RESET_START

  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-item`}>
        <OrganismStageInfo />
      </div>
      <div className={`${BASE_CLASS}-item`}>
        <TemplateForm>
          {isInitialStep ? (
            <>
              <OrganismPasswordResetForm />
              <MoleculeUserAcquisitionText />
            </>
          ) : (
            <>
              <OrganismPasswordChangeForm />
            </>
          )}
        </TemplateForm>
      </div>
      <div className={`${BASE_CLASS}-item ${BASE_CLASS}-itemFalse`} />
    </div>
  )
}

PagePasswordReset.displayName = 'PagePasswordReset'

export default PagePasswordReset
