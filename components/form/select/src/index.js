import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function FormSelect({
  className,
  disabled,
  onChange,
  options,
  prominent,
  required,
  title,
  value
}) {
  const selectClassName = cx('sui-FormSelect', className, {
    'is-disabled': disabled,
    [`sui-FormSelect--prominent`]: prominent
  })
  const wrappedOnChange = e => onChange(e, {value: e.target.value})

  return (
    <select
      className={selectClassName}
      disabled={disabled}
      onChange={wrappedOnChange}
      title={title}
      value={value}
      required={required}
    >
      {options.map(({content, key, value}, index) => {
        const optionKey = key || index
        return (
          <option key={optionKey} value={value}>
            {content}
          </option>
        )
      })}
    </select>
  )
}

FormSelect.displayName = 'FormSelect'

// Remove these comments if you need
FormSelect.propTypes = {
  /**
   * Classname to be added along
   */
  className: PropTypes.string,
  /**
   * Indicate if select is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Callback when value is changed
   */
  onChange: PropTypes.func,
  /**
   * Indicates if form select is prominent to be selected
   */
  prominent: PropTypes.bool,
  /**
   * Array of options to fill the select with
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
      content: PropTypes.string
    })
  ),
  /**
   * Title attribute of the select
   */
  title: PropTypes.string,
  /**
   * required attribute for combobox
   */
  required: PropTypes.bool,
  /**
   * Actual value for the select
   */
  value: PropTypes.string
}
