const CLASS = 'sui-CssTransition'

const TYPES = {
  FADE_OUT_LEFT: 'FADE_OUT_LEFT',
  FADE_IN_RIGHT: 'FADE_IN_RIGHT',
  FADE_OUT: 'FADE_OUT',
  FADE_IN: 'FADE_IN'
}

const CONFIG = {
  FADE_OUT_LEFT: {
    className: `${CLASS}FadeOutLeft`,
    timeout: 500
  },
  FADE_IN_RIGHT: {
    className: `${CLASS}FadeInRight`,
    timeout: 500
  },
  FADE_OUT: {
    className: `${CLASS}FadeOut`,
    timeout: 500
  },
  FADE_IN: {
    className: `${CLASS}FadeIn`,
    timeout: 500
  }
}

export {TYPES, CONFIG}
