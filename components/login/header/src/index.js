import PropTypes from 'prop-types'

import AtomButton, {atomButtonDesigns} from '@s-ui/react-atom-button'

import Logo from './components/Logo.js'
import {BASE_CLASS, DEFAULT_BRAND_LOGO} from './config.js'

const defaultButtonProps = {
  design: atomButtonDesigns.FLAT,
  link: true,
  negative: true,
  target: '_blank',
  rel: 'nofollow noopener'
}

export default function LoginHeader({logo = DEFAULT_BRAND_LOGO, button}) {
  const hasHelpButton = Boolean(button?.text)
  return (
    <header className={`${BASE_CLASS}`}>
      <Logo image={logo} />
      {hasHelpButton && (
        <AtomButton {...defaultButtonProps} {...button.props}>
          {button.text}
        </AtomButton>
      )}
    </header>
  )
}

LoginHeader.displayName = 'LoginHeader'
LoginHeader.propTypes = {
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    props: PropTypes.object
  }),
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
}
