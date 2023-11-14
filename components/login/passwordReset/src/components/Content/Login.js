import PropTypes from 'prop-types'

import {BASE_CLASS} from '../../config.js'

import LoginForm from '../Form/LoginForm.js'
import FaceRecognition from '../Info/FaceRecognition.js'
import Form from './Form.js'
import LoginInfo from './LoginInfo.js'

const Login = ({icons}) => {
  return (
    <div className={`${BASE_CLASS} no-padding`}>
      <div className={`${BASE_CLASS}-item`}>
        <LoginInfo />
      </div>
      <div className={`${BASE_CLASS}-item`}>
        <Form icons={icons} isLogin>
          <>
            <LoginForm icons={icons} />
            <FaceRecognition icons={icons} />
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
