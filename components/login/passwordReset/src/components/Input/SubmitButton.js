import PropTypes from 'prop-types'

import AtomButton, {atomButtonShapes, atomButtonSizes} from '@s-ui/react-atom-button'

import ButtonWrapper from './ButtonWrapper.js'

const SubmitButton = ({children, isEnabled, isLoading, onClick}) => {
  return (
    <ButtonWrapper>
      <AtomButton
        fullWidth
        disabled={!isEnabled}
        isLoading={isLoading}
        onClick={onClick}
        shape={atomButtonShapes.CIRCULAR}
        size={atomButtonSizes.LARGE}
      >
        {children}
      </AtomButton>
    </ButtonWrapper>
  )
}

SubmitButton.displayName = 'SubmitButton'
SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SubmitButton
