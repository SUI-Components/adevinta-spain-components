import PropTypes from 'prop-types'

import {BASE_CLASS} from '../../config.js'

import useI18n from '../../hooks/useI18n.js'

import LoginForm from '../Form/LoginForm.js'
import UserAcquisitionText from '../Info/UserAcquisitionText.js'
import Form from './Form.js'
import LoginInfo from './LoginInfo.js'

const Login = ({icons}) => {
  const i18n = useI18n()

  const title = i18n.t('LOGIN_CROSS.LOGIN.TITLE')
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}-item`}>
        <LoginInfo />
      </div>
      <div className={`${BASE_CLASS}-item`}>
        <Form icons={icons} title={title}>
          <>
            <LoginForm icons={icons} />
            <UserAcquisitionText />
          </>
        </Form>
      </div>
    </div>
  )
}

Login.displayName = 'Login'

Login.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object)
}

export default Login
