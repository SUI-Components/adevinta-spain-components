import React, {useState} from 'react'
import PropTypes from 'prop-types'
import CssTransition, {TYPES} from '../../../../components/css/transition/src'

const ExampleContent = ({text, backgroundColor}) => {
  const styles = {
    width: '300px',
    height: '300px',
    backgroundColor,
    margin: '20px'
  }
  return <div style={styles}>{text}</div>
}

ExampleContent.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string
}

const TransitionFadeExcample = () => {
  const [isFirstStep, toggleFirstStep] = useState(true)

  return (
    <div>
      <button type="button" onClick={() => toggleFirstStep(!isFirstStep)}>
        Toggle
      </button>

      <CssTransition type={TYPES.FADE_OUT_LEFT} in={isFirstStep} unmountOnExit>
        <ExampleContent text="Step 1" backgroundColor="aliceblue" />
      </CssTransition>

      <CssTransition type={TYPES.FADE_IN_RIGHT} in={!isFirstStep} unmountOnExit>
        <ExampleContent text="Step 2" backgroundColor="antiquewhite" />
      </CssTransition>
    </div>
  )
}

export default TransitionFadeExcample
