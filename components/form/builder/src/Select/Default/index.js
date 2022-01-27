import {isValidElement, memo, useCallback} from 'react'

import PropTypes from 'prop-types'
import {field, createComponentMemo} from '../../prop-types'

import MoleculeSelectField from '@s-ui/react-molecule-select-field'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import IconChevronDown from '../../Icons/IconChevronDown'
import IconCloseTag from '../../Icons/IconCloseTag'

const DefaultSelect = ({
  select,
  tabIndex,
  onChange,
  onFocus,
  onBlur,
  size,
  errors,
  alerts,
  renderer,
  multiselection = false
}) => {
  const errorMessages = errors[select.id]
  const alertMessages = alerts[select.id]

  const onChangeCallback = useCallback(
    (evt, {value}) => {
      return onChange(select.id, value)
    },
    [onChange, select]
  )

  const blurFocusParams = {
    type: select.type,
    display: select.display,
    label: select.label
  }

  const onBlurCallback = () => onBlur(select.id, blurFocusParams)

  const onFocusCallback = () => onFocus(select.id, blurFocusParams)

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

  const DEFAULT_SELECT_VALUE = multiselection ? [] : ''

  const selectProps = {
    id: select.id,
    label: select.label,
    name: select.name,
    placeholder: select.hint,
    iconArrowDown: <IconChevronDown />,
    iconCloseTag: <IconCloseTag />,
    value: select.value || DEFAULT_SELECT_VALUE,
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
    innerProps: {...selectProps, datalist, display: select.display}
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
      <MoleculeSelectField
        {...selectProps}
        {...rendererResponse}
        multiselection={multiselection}
      >
        {datalist.map(data => (
          <MoleculeSelectOption
            key={data.value}
            value={data.value}
            description={data.description}
          >
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
  renderer: PropTypes.func,
  multiselection: PropTypes.bool
}

export default memo(DefaultSelect, createComponentMemo('select'))
