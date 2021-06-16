import {isValidElement, memo, useCallback} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../../prop-types'

import MoleculeSelectField from '@s-ui/react-molecule-select-field'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import IconChevronDown from '../../Icons/IconChevronDown'

const DefaultSelect = ({
  select,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  size,
  errors,
  alerts,
  renderer
}) => {
  const errorMessages = errors[select.id]
  const alertMessages = alerts[select.id]

  const onChangeCallback = useCallback(
    (evt, {value}) => {
      return onChange(select.id, value)
    },
    [onChange, select]
  )

  const onBlurCallback = () => onBlur(select.id)

  const onFocusCallback = () => onFocus(select.id)

  const {datalist = []} = select

  // transform constraints to props
  const constraints = select.constraints || []
  let constraintsProps = {}
  constraintsProps = constraints.reduce((acc, constraint) => {
    if (constraint?.property?.notnull === '') {
      return {
        ...acc,
        required: true
      }
    } else {
      return acc
    }
  }, constraintsProps)

  const selectProps = {
    id: select.id,
    label: select.label,
    name: select.name,
    placeholder: select.hint,
    iconArrowDown: <IconChevronDown />,
    value: select.value || '',
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onFocus: onFocusCallback,
    helpText: select.help,
    tabIndex,
    ...(select.disabled && {
      disabled: true
    }),
    ...(select.hidden && {
      hidden: true
    }),
    ...(!!errorMessages && {
      errorText: errorMessages.join('\n')
    }),
    ...(!!alertMessages && {
      alertText: alertMessages.join('\n')
    }),
    selectSize: size,
    ...constraintsProps
  }

  if (selectProps.hidden) {
    return null
  }

  const rendererResponse = renderer({
    id: select.id,
    innerProps: {...selectProps, datalist}
  })

  // render custom component
  if (isValidElement(rendererResponse)) return rendererResponse

  // render SUI component
  return (
    <div
      className={`sui-FormBuilder-field sui-FormBuilder-DefaultSelect sui-FormBuilder-${selectProps.id}`}
    >
      {selectProps.label && (
        <label className="sui-FormBuilder-label" htmlFor={selectProps.id}>
          {selectProps.label}
        </label>
      )}
      <MoleculeSelectField {...selectProps} {...rendererResponse}>
        {datalist.map(data => (
          <MoleculeSelectOption key={data.value} value={data.value}>
            {data.text}
          </MoleculeSelectOption>
        ))}
      </MoleculeSelectField>
    </div>
  )
}

DefaultSelect.displayName = 'DefaultSelect'
DefaultSelect.propTypes = {
  select: field,
  tabIndex: PropTypes.number,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  errors: PropTypes.object,
  alerts: PropTypes.object,
  renderer: PropTypes.func
}

export default memo(DefaultSelect, createComponentMemo('select'))
