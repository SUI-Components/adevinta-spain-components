import {useReducer} from 'react'

const usePasswordResetFormState = () => {
  const initialState = {
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
          email: action.payload.email,
          errorText: '',
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

      case 'SET_ERROR_TEXT':
        return {
          ...state,
          errorText: action.payload.errorText,
          isLoading: false
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // Action for each of the above
  const setEmail = ({email}) => {
    dispatch({
      type: 'SET_EMAIL',
      payload: {
        email
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

  const setErrorText = ({errorText}) => {
    dispatch({
      type: 'SET_ERROR_TEXT',
      payload: {
        errorText
      }
    })
  }

  return {
    state,
    setEmail,
    setErrorText,
    setNotification,
    setIsLoading
  }
}

export default usePasswordResetFormState
