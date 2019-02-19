import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {paramsToQueryString} from './querystring'

const BASE_CLASS = 'sui-FormPta'
const CONTENT_CLASS = `${BASE_CLASS}-content`
const IFRAME_ID = `${BASE_CLASS}-iframe`
const SUBMIT_SUCCESS_EVENT_TYPE = 'SUBMIT_FORM_SUCCEEDED'
const SUBMIT_ERROR_EVENT_TYPE = 'SUBMIT_FORM_FAILED'
const MESSAGE_EVENT_TYPE = 'message'
const RESIZE_EVENT_TYPE = 'resize'

class FormPta extends Component {
  constructor(props) {
    super(props)

    const {formUrl: BASE_URL, onSubmit, onError, ...settings} = this.props
    const QUERY = paramsToQueryString(settings)
    const formUrl = `${BASE_URL}?${QUERY}`

    this.handleMessage = ({data: {type, payload}}) => {
      type === SUBMIT_SUCCESS_EVENT_TYPE && onSubmit && onSubmit()
      type === SUBMIT_ERROR_EVENT_TYPE && onError && onError()
      type === RESIZE_EVENT_TYPE && this.doResize(payload)
    }

    this.state = {
      formUrl
    }
  }

  componentWillMount() {
    window.addEventListener(MESSAGE_EVENT_TYPE, this.handleMessage)
  }

  componentWillUnmount() {
    window.removeEventListener(MESSAGE_EVENT_TYPE, this.handleMessage)
  }

  doResize(height) {
    const ptaIframe = document.getElementById(IFRAME_ID)
    ptaIframe.style.height = `${height}px`
  }

  /**
   * Avoid iframe re-rendering
   */
  shouldComponentUpdate() {
    return false
  }

  render() {
    const {
      state: {formUrl}
    } = this

    return (
      <div className={BASE_CLASS}>
        <iframe
          id={IFRAME_ID}
          ref={ref => (this._iframeRef = ref)}
          className={CONTENT_CLASS}
          src={formUrl}
        />
      </div>
    )
  }
}

FormPta.displayName = 'FormPta'

FormPta.propTypes = {
  /**
   * Save current form state in local storage
   */
  enableDraft: PropTypes.bool,
  /**
   * Draft id
   */
  draftId: PropTypes.string,
  /**
   * Form url
   */
  formUrl: PropTypes.string.isRequired,
  /**
   * Redirection url on error
   */
  redirectOnErrorUrl: PropTypes.string,
  /**
   * Redirection url on success
   */
  redirectOnSuccessUrl: PropTypes.string,
  /**
   * OnSubmit callback
   */
  onSubmit: PropTypes.func,
  /**
   * OnError callback
   */
  onError: PropTypes.func
}

FormPta.defaultProps = {
  enableDraft: false
}

export default FormPta
