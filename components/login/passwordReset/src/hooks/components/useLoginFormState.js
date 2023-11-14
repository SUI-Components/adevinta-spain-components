import {useReducer} from 'react'

const useLoginFormState = () => {
  const initialState = {
    defaultDisabledSubmitButton: true,
    email: '',
    password: '',
    isLoading: false,
    emailErrorText: '',
    passwordErrorText: '',
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
          emailErrorText: action.payload.emailErrorText,
          passwordErrorText: action.payload.passwordErrorText,
          isLoading: false
        }

      case 'SET_PASSWORD':
        return {
          ...state,
          defaultDisabledSubmitButton: false,
          password: action.payload.password,
          emailErrorText: action.payload.emailErrorText,
          passwordErrorText: action.payload.passwordErrorText,
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
  const setEmail = ({email, emailErrorText, passwordErrorText}) => {
    dispatch({
      type: 'SET_EMAIL',
      payload: {
        email,
        emailErrorText,
        passwordErrorText
      }
    })
  }

  const setPassword = ({password, passwordErrorText, emailErrorText}) => {
    dispatch({
      type: 'SET_PASSWORD',
      payload: {
        password,
        passwordErrorText,
        emailErrorText
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
    setPassword,
    setNotification,
    setIsLoading
  }
}

export default useLoginFormState
