const ACTIONS = {
  TOGGLE_MENU: 'toggle_menu',
  MOUSE_HOVER: 'mouse_hover',
  MOUSE_OUT: 'mouse_out'
}

const INITIAL_STATE = {expanded: false, collapseByTouch: false}

const reducer = (state, {type}) => {
  switch (type) {
    case ACTIONS.TOGGLE_MENU:
      return {
        ...state,
        expanded: !state.expanded
      }
    case ACTIONS.MOUSE_HOVER:
      return {
        ...state,
        expanded: true,
        collapseByTouch: true
      }
    case ACTIONS.MOUSE_OUT:
      return {
        ...state,
        expanded: false,
        collapseByTouch: false
      }
    default:
      return state
  }
}

export {ACTIONS as reducerActions, INITIAL_STATE as reducerInitialState, reducer}
