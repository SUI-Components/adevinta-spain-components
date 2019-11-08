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

const TransitionFadeExample = () => {
  const [isFirstStep, toggleFirstStep] = useState(true)
  const [isFirstStepFadeIn, toggleFirstStepFadeIn] = useState(true)

  return (
    <>
      <div>
        <button type="button" onClick={() => toggleFirstStep(!isFirstStep)}>
          Toggle Fade Out Left / In Right
        </button>

        <CssTransition
          type={TYPES.FADE_OUT_LEFT}
          in={isFirstStep}
          unmountOnExit
        >
          <ExampleContent text="Step 1" backgroundColor="aliceblue" />
        </CssTransition>

        <CssTransition
          type={TYPES.FADE_IN_RIGHT}
          in={!isFirstStep}
          unmountOnExit
        >
          <ExampleContent text="Step 2" backgroundColor="antiquewhite" />
        </CssTransition>
      </div>
      <div>
        <button
          type="button"
          onClick={() => toggleFirstStepFadeIn(!isFirstStepFadeIn)}
        >
          Toggle Fade In / Out
        </button>

        <CssTransition
          type={TYPES.FADE_IN}
          in={isFirstStepFadeIn}
          unmountOnExit
        >
          <ExampleContent text="Step 1" backgroundColor="aliceblue" />
        </CssTransition>

        <CssTransition
          type={TYPES.FADE_OUT}
          in={!isFirstStepFadeIn}
          unmountOnExit
        >
          <ExampleContent text="Step 2" backgroundColor="antiquewhite" />
        </CssTransition>
      </div>
    </>
  )
}

export default TransitionFadeExample
