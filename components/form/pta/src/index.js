import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {paramsToQueryString} from './querystring'

const BASE_CLASS = 'sui-FormPta'
const CONTENT_CLASS = `${BASE_CLASS}-content`
const REMOVE_DRAFT = 'REMOVE_DRAFT'
const SUBMIT_SUCCESS_EVENT_TYPE = 'SUBMIT_FORM_SUCCEEDED'
const SUBMIT_ERROR_EVENT_TYPE = 'SUBMIT_FORM_ERROR'
const MESSAGE_EVENT_TYPE = 'message'

class FormPta extends Component {
  constructor(props) {
    super(props)

    const {formUrl: BASE_URL, onSubmit, onError, ...settings} = this.props
    const QUERY = paramsToQueryString(settings)
    const formUrl = `${BASE_URL}?${QUERY}`
    this.handleMessage = this.handleMessage.bind(this)
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

  handleMessage({data: {type}}) {
    const {onSubmit, onError} = this.props
    type === SUBMIT_SUCCESS_EVENT_TYPE && onSubmit()
    type === SUBMIT_ERROR_EVENT_TYPE && onError()
  }

  /**
   * Avoid iframe re-rendering
   */
  shouldComponentUpdate() {
    return false
  }

  removeDraft(draftId) {
    const {formUrl} = this.state
    const {contentWindow} = this._iframeRef

    contentWindow.postMessage(
      {
        type: REMOVE_DRAFT,
        payload: {
          draftId
        }
      },
      formUrl
    )
  }

  render() {
    const {
      state: {formUrl}
    } = this

    return (
      <div className={BASE_CLASS}>
        <iframe
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
