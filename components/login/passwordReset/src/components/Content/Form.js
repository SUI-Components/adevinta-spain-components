import PropTypes from 'prop-types'

import {BASE_CLASS} from '../../config.js'
import HelpContent from '../Info/HelpContent.js'

import UserAcquisitionText from '../Info/UserAcquisitionText.js'
import useI18n from '../../hooks/useI18n.js'

const Form = ({children, icons, isLogin = false, title}) => {
  const i18n = useI18n()

  return (
    <>
      <div className={`${BASE_CLASS}-form`}>
        {title ? (
          <div className={`${BASE_CLASS}-formHeader`}>
            <h1 className={`${BASE_CLASS}-formHeaderTitle`}>{title}</h1>
          </div>
        ) : null}
        <div className={`${BASE_CLASS}-formContent`}>{children}</div>
      </div>
      {isLogin ? (
        <div className={`${BASE_CLASS}-textContent`}>
          <UserAcquisitionText />
        </div>
      ) : null}

      <HelpContent icons={icons} />
    </>
  )
}

Form.displayName = 'Form'
Form.propTypes = {
  children: PropTypes.node.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object),
  isLogin: PropTypes.bool,
  title: PropTypes.string
}

export default Form
