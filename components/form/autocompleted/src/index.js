import PropTypes from 'prop-types'
import React, {useRef, useState}  from 'react'
import SuggestsList from './suggests-list'
import cx from 'classnames'

const DELTA_MOVE = 1
const UP = 'ArrowUp'
const DOWN = 'ArrowDown'
const ENTER = 'Enter'
const ESCAPE = 'Escape'

export default function FormAutocompleted ({
  selectFirstByDefault,
  initialValue,
  handleSelect: onSelect,
  handleSubmit: onSubmit,
  focus,
  suggests}) {
  const defaultPosition = selectFirstByDefault ? 0 : -1
  const [active, setActive] = useState(defaultPosition)
  const [value, setValue] = useState(initialValue)
  const [showSuggestsList, setShowSuggestsList] = useState(false)
  const [focus, setFocus] = useState(focus)

  const inputDOMEl = useRef()
  const submitDOMEl = useRef()
  const suggestListDOMEl = useRef()

  const moveDown = () => {
    const lastPosition = suggests.length - 1
    return active === lastPosition ? active : active + DELTA_MOVE
  }

  const moveUp = () => {
    return active === defaultPosition ? active : active - DELTA_MOVE
  }

  const upDownHandler = event => {
    event.stopPropagation()
    event.preventDefault()
    // Never go to negative values or value higher than the list length
    const active = event.key === DOWN ? moveDown() : moveUp()
    setActive(active)
  }

  const enterHandler = () => {
    const suggest = suggests[active]

    if (suggest) {
      const value = suggest.literal || suggest.content
      setValue(value)
      handleSelect(suggest)
    } else {
      handleSubmit()
    }
  }

  const escapeHandler = () => {
    setActive(null)
    setShowSuggestsList(false)
  }

  const focusInput = () => {
    inputDOMEl.current.focus()
  }

  const handleChange = event => {
    const {value} = event.target
    setValue(value)
    setActive(defaultPosition)
    onChange(value)
  }

  const handleSubmit = () => {
    onSubmit(value)
  }

  const handleClear = () => {
    handleChange({
      target: {
        value: ''
      }
    })
    focusInput()
  }

  const handleSelect = suggest => {
    setValue(suggest.literal || suggest.content)
    onSelect(suggest)
  }

  const handleKeyDown = event => {
    setShowSuggestsList(true)

    switch (event.key) {
      case UP:
      case DOWN:
        upDownHandler(event)
        break
      case ENTER:
        enterHandler()
        break
      case ESCAPE:
        escapeHandler()
        break
    }
  }

  const renderSubmitButton = ({text, icon: Icon}) => (
    <button
      className="sui-FormAutocompleted-submit"
      onClick={this._handleSubmit}
      ref={submitDOMEl}
    >
      {Icon && <Icon svgClass="sui-FormAutocompleted-submitIcon" />}
      {text}
    </button>
  )

  const renderSuggestsList = () => {
    return suggests && suggests.length > 0 ? (
      <SuggestsList
        {...props}
        handleSelect={handleSelect}
        active={active}
        ref={suggestListDOMEl}
      />
    ) : null
  }

  _handleOutsideClick = event =>
    !this.excludeFromOutsideClick.includes(event.target) &&
    this.setState({
      showSuggestsList: false
    })

  componentDidMount() {
    if (this.state.focus) {
      this.focusInput()
    }
    this.excludeFromOutsideClick = [this.input, this.submit, this.suggestList]
    this.props.closeOnOutsideClick === true &&
      window.addEventListener('click', this._handleOutsideClick, false)
  }

  UNSAFE_componentWillReceiveProps({focus}) { // eslint-disable-line
    if (this.state.focus !== focus) {
      this.setState({focus})
    }
  }

  UNSAFE_componentWillUpdate(nextProps, {focus}) { // eslint-disable-line
    if (focus) {
      this.focusInput()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleOutsideClick, false)
  }

  render() {
    const {placeholder, handleFocus, handleBlur, submit, collapsed} = this.props
    const {value, showSuggestsList} = this.state
    const formAutocompletedClassName = cx('sui-FormAutocompleted', {
      'is-collapsed': submit && collapsed
    })
    return (
      <div className="sui-FormAutocompleted-wrap">
        <div className={formAutocompletedClassName}>
          <div className="sui-FormAutocompleted-inputWrap">
            <input
              ref={node => {
                this.input = node
              }}
              value={value}
              placeholder={placeholder}
              className="sui-FormAutocompleted-input"
              type="text"
              onChange={this._handleChange}
              onKeyDown={this._handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {value && (
              <span
                className="sui-FormAutocompleted-clear"
                onClick={this._handleClear}
              />
            )}
          </div>
          {submit && this._renderSubmitButton(submit)}
        </div>
        {showSuggestsList && this._renderSuggestsList()}
      </div>
    )
  }
}

FormAutocompleted.propTypes = {
  /**
   * This function is called everytime user exits the input
   */
  handleBlur: PropTypes.func,

  /**
   * This function is called everytime user change the input field value
   */
  handleChange: PropTypes.func.isRequired,

  /**
   * This function is called everytime user focus on the input
   */
  handleFocus: PropTypes.func,

  /**
   * This function is called everytime user click on clear icon
   */
  handleClear: PropTypes.func,

  /**
   * This function is called when one suggestion is selected (via click or
   * enter pressed)
   */
  handleSelect: PropTypes.func.isRequired,

  /**
   * This function is called everytime user click the submit button
   */
  handleSubmit: PropTypes.func,

  /**
   * Close suggestions on click ouside the form
   */
  closeOnOutsideClick: PropTypes.bool,

  /**
   * Inicial input value
   */
  initialValue: PropTypes.string,

  /**
   * Input placeholder
   */
  placeholder: PropTypes.string,

  /**
   * Suggest content
   */
  suggests: PropTypes.array.isRequired,

  /**
   * Auto select first suggested item
   */
  selectFirstByDefault: PropTypes.bool,

  /**
   * Input focus state
   */
  focus: PropTypes.bool,

  /**
   * Stick input and button
   */
  collapsed: PropTypes.bool,

  /**
   * Submit button
   */
  submit: PropTypes.shape({
    icon: PropTypes.func,
    text: PropTypes.string
  })
}

FormAutocompleted.defaultProps = {
  initialValue: '',
  selectFirstByDefault: true,
  focus: false,
  closeOnOutsideClick: false
}

FormAutocompleted.displayName = 'FormAutocompleted'
