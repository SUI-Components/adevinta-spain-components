import PropTypes from 'prop-types'

import AtomButton, {
  atomButtonShapes,
  atomButtonSizes
} from '@s-ui/react-atom-button'

import ButtonWrapper from './ButtonWrapper.js'

const SubmitButton = ({children, isLoading, onClick}) => {
  return (
    <ButtonWrapper>
      <AtomButton
        fullWidth
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
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SubmitButton
