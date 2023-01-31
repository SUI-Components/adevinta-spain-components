import PropTypes from 'prop-types'

import {BASE_CLASS} from '../../config.js'
import useI18n from '../../hooks/useI18n.js'
import MoleculeHelpContent from '../molecules/HelpContent.js'

const TemplateForm = ({children}) => {
  const i18n = useI18n()
  const title = i18n.t('LOGIN_CROSS.PASSWORD_RESET.REMEMBER_PASSWORD_TITLE')
  return (
    <>
      <div className={`${BASE_CLASS}-form`}>
        <div className={`${BASE_CLASS}-formHeader`}>
          <h1 className={`${BASE_CLASS}-formHeaderTitle`}>{title}</h1>
        </div>
        <div className={`${BASE_CLASS}-formContent`}>{children}</div>
      </div>
      <MoleculeHelpContent />
    </>
  )
}

TemplateForm.displayName = 'TemplateForm'
TemplateForm.propTypes = {
  children: PropTypes.node.isRequired
}

export default TemplateForm
