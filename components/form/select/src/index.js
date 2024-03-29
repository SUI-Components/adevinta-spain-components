import cx from 'classnames'
import PropTypes from 'prop-types'

export default function FormSelect({
  ariaLabel,
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
      aria-label={ariaLabel}
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
   * Aria label to be added
   */
  ariaLabel: PropTypes.string,
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
