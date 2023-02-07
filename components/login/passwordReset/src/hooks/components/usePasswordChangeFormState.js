import {useReducer} from 'react'

const usePasswordChangeFormState = () => {
  const initialState = {
    defaultDisabledSubmitButton: true,
    newPassword: '',
    repeatPassword: '',
    isLoading: false,
    newPasswordErrorText: '',
    repeatPasswordErrorText: '',
    notification: {
      text: '',
      isError: false
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_NEW_PASSWORD':
        return {
          ...state,
          defaultDisabledSubmitButton: false,
          newPassword: action.payload.newPassword,
          newPasswordErrorText: action.payload.newPasswordErrorText,
          repeatPasswordErrorText: action.payload.repeatPasswordErrorText,
          isLoading: false
        }

      case 'SET_REPEAT_PASSWORD':
        return {
          ...state,
          defaultDisabledSubmitButton: false,
          repeatPassword: action.payload.repeatPassword,
          newPasswordErrorText: action.payload.newPasswordErrorText,
          repeatPasswordErrorText: action.payload.repeatPasswordErrorText,
          isLoading: false
        }

      case 'SET_NOTIFICATION':
        return {
          ...state,
          notification: {
            text: action.payload.text,
            isError: action.payload.isError
          },
          isLoading: false
        }

      case 'SET_LOADING':
        return {
          ...state,
          isLoading: action.payload
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // Action for each of the above
  const setNewPassword = ({
    newPassword,
    newPasswordErrorText,
    repeatPasswordErrorText
  }) => {
    dispatch({
      type: 'SET_NEW_PASSWORD',
      payload: {
        newPassword,
        newPasswordErrorText,
        repeatPasswordErrorText
      }
    })
  }

  const setRepeatPassword = ({
    repeatPassword,
    repeatPasswordErrorText,
    newPasswordErrorText
  }) => {
    dispatch({
      type: 'SET_REPEAT_PASSWORD',
      payload: {
        repeatPassword,
        repeatPasswordErrorText,
        newPasswordErrorText
      }
    })
  }

  const setNotification = ({text, isError}) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      payload: {
        text,
        isError
      }
    })
  }

  const setIsLoading = isLoading => {
    dispatch({
      type: 'SET_LOADING',
      payload: isLoading
    })
  }

  return {
    state,
    setNewPassword,
    setRepeatPassword,
    setNotification,
    setIsLoading
  }
}

export default usePasswordChangeFormState
