import React from 'react'
import PropTypes from 'prop-types'

import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'
import AtomButtom from '@schibstedspain/sui-atom-button'
import MoleculeField from '@s-ui/react-molecule-field'

const ButtonGroup = ({errorText, label, id, value, items, onChange}) => {
  return (
    <MoleculeField label={label} name={id} errorText={errorText}>
      <MoleculeButtonGroup type="secondary" fullWidth>
        {items.map(({name}, i) => {
          const isSelected = name === value
          return (
            <AtomButtom
              key={i}
              onClick={() => onChange(name)}
              focused={isSelected}
              isButton
            >
              {name}
            </AtomButtom>
          )
        })}
      </MoleculeButtonGroup>
    </MoleculeField>
  )
}

ButtonGroup.displayName = 'ButtonGroup'

ButtonGroup.propTypes = {
  errorText: PropTypes.string,
  value: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.obj),
  onChange: PropTypes.func
}

export default ButtonGroup
