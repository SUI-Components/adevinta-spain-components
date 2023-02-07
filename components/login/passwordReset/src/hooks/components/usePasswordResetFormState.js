import {useReducer} from 'react'

const usePasswordResetFormState = () => {
  const initialState = {
    defaultDisabledSubmitButton: true,
    email: '',
    isLoading: false,
    errorText: '',
    notification: {
      text: '',
      isError: false
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return {
          ...state,
          defaultDisabledSubmitButton: false,
          email: action.payload.email,
          errorText: action.payload.errorText,
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
  const setEmail = ({email, errorText}) => {
    dispatch({
      type: 'SET_EMAIL',
      payload: {
        email,
        errorText
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
    setEmail,
    setNotification,
    setIsLoading
  }
}

export default usePasswordResetFormState
