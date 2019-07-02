const CLASS = 'sui-CssTransition'

const TYPES = {
  FADE_OUT_LEFT: 'FADE_OUT_LEFT',
  FADE_IN_RIGHT: 'FADE_IN_RIGHT'
}

const CONFIG = {
  FADE_OUT_LEFT: {
    className: `${CLASS}FadeOutLeft`,
    timeout: 500
  },
  FADE_IN_RIGHT: {
    className: `${CLASS}FadeInRight`,
    timeout: 500
  }
}

export {TYPES, CONFIG}
