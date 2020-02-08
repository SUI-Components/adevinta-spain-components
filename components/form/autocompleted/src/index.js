import PropTypes from 'prop-types'
import React, {useState, useEffect, useRef} from 'react'
import {useMount} from '@schibstedspain/sui-react-hooks'
import SuggestsList from './suggests-list'
import cx from 'classnames'

const DELTA_MOVE = 1
const UP = 'ArrowUp'
const DOWN = 'ArrowDown'
const ENTER = 'Enter'
const ESCAPE = 'Escape'

export default function FormAutocompleted(props) {
  const {
    initialValue = '',
    suggests,
    handleChange,
    handleSubmit,
    handleSelect,
    handleFocus,
    handleBlur,
    selectFirstByDefault = true,
    focus = false,
    closeOnOutsideClick = false,
    placeholder,
    submit,
    collapsed
  } = props
  const inputEl = useRef(null)
  const submitEl = useRef(null)
  const suggestList = useRef(null)
  let excludeFromOutsideClick = []
  const defaultPosition = selectFirstByDefault ? 0 : -1
  const [active, setActive] = useState(defaultPosition)
  const [value, setValue] = useState(initialValue)
  const [showSuggestsList, setShowSuggestsList] = useState(false)
  const formAutocompletedClassName = cx('sui-FormAutocompleted', {
    'is-collapsed': submit && collapsed
  })

  const _moveDown = () => {
    const lastPosition = suggests.length - 1

    return active === lastPosition ? active : active + DELTA_MOVE
  }

  const _moveUp = () => {
    return active === defaultPosition ? active : active - DELTA_MOVE
  }

  const _upDownHandler = event => {
    // Never go to negative values or value higher than the list length.
    const active = event.key === DOWN ? _moveDown() : _moveUp()

    setActive(active)
    event.stopPropagation()
    event.preventDefault()
  }

  const _enterHandler = () => {
    const suggest = suggests[active]

    if (suggest) {
      const value = suggest.literal || suggest.content

      setValue(value)
      _handleSelect(suggest)
    } else {
      _handleSubmit()
    }
  }

  const _escapeHandler = () => {
    setShowSuggestsList(false)
    setActive(null)
  }

  const _handleChange = event => {
    const {value} = event.target

    setValue(value)
    setActive(defaultPosition)
    handleChange(value)
  }

  const _handleSubmit = () => {
    handleSubmit(value)
  }

  const _handleClear = () => {
    _handleChange({
      target: {
        value: ''
      }
    })
    _focusInput()
  }

  const _handleSelect = suggest => {
    setValue(suggest.literal || suggest.content)
    handleSelect(suggest)
  }

  const _handleKeyDown = event => {
    setShowSuggestsList(true)

    switch (event.key) {
      case UP:
      case DOWN:
        _upDownHandler(event)
        break
      case ENTER:
        _enterHandler()
        break
      case ESCAPE:
        _escapeHandler()
        break
    }
  }

  const _handleOutsideClick = event =>
    !excludeFromOutsideClick.includes(event.target) &&
    setShowSuggestsList(false)

  const _focusInput = () => {
    inputEl.current.focus()
  }

  const _renderSubmitButton = (
    {text, icon: Icon} // eslint-disable-line
  ) => (
    <button
      className="sui-FormAutocompleted-submit"
      onClick={_handleSubmit}
      ref={submitEl}
    >
      {Icon && <Icon svgClass="sui-FormAutocompleted-submitIcon" />}
      {text}
    </button>
  )

  const _renderSuggestsList = () =>
    suggests && suggests.length > 0 ? (
      <SuggestsList
        {...props}
        handleSelect={_handleSelect}
        active={active}
        ref={suggestList}
      />
    ) : null

  useMount(() => {
    excludeFromOutsideClick = [inputEl, submitEl, suggestList]
    closeOnOutsideClick === true &&
      window.addEventListener('click', _handleOutsideClick, false)

    return () => {
      window.removeEventListener('click', _handleOutsideClick, false)
    }
  })

  useEffect(() => {
    if (focus) _focusInput()
  }, [focus])

  return (
    <div className="sui-FormAutocompleted-wrap">
      <div className={formAutocompletedClassName}>
        <div className="sui-FormAutocompleted-inputWrap">
          <input
            ref={inputEl}
            value={value}
            placeholder={placeholder}
            className="sui-FormAutocompleted-input"
            type="text"
            onChange={_handleChange}
            onKeyDown={_handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {value && (
            <span
              className="sui-FormAutocompleted-clear"
              onClick={_handleClear}
            />
          )}
        </div>
        {submit && _renderSubmitButton(submit)}
      </div>
      {showSuggestsList && _renderSuggestsList()}
    </div>
  )
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

FormAutocompleted.displayName = 'FormAutocompleted'
