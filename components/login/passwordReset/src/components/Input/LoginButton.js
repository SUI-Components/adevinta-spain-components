import AtomButton, {
  atomButtonDesigns,
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'

import useI18n from '../../hooks/useI18n.js'
import ButtonWrapper from './ButtonWrapper.js'
const LoginButton = () => {
  const i18n = useI18n()
  return (
    <ButtonWrapper>
      <AtomButton
        design={atomButtonDesigns.OUTLINE}
        fullWidth
        link
        // linkFactory={Link}
        shape={atomButtonShapes.CIRCULAR}
        size={atomButtonSizes.LARGE}
        to={i18n.t('LOGIN_CROSS.URLS.LOGIN.ROOT')}
      >
        {i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.RETURN_BUTTON')}
      </AtomButton>
    </ButtonWrapper>
  )
}

LoginButton.displayName = 'LoginButton'

export default LoginButton
