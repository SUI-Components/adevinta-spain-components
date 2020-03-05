import React, {PureComponent} from 'react'
import FormCheckbox from '@s-ui/react-form-checkbox'
import PropTypes from 'prop-types'

const BASE_CLASS = 'sui-FormCheckboxesWithParent'

class FormCheckboxesWithParent extends PureComponent {
  state = {
    childrenCheckbox: [...this.props.initialChildrenCheckbox]
  }

  _createHandleChangeParent = checked => () => {
    const newChildrenCheckbox = this.state.childrenCheckbox.map(checkbox => {
      return {...checkbox, checked: !checked}
    })

    this.setState({childrenCheckbox: newChildrenCheckbox})
  }

  _createHandleChangeChildren = index => () => {
    const {childrenCheckbox} = this.state

    const newChildrenCheckbox = childrenCheckbox.map(
      (checkbox, checkboxIndex) => {
        if (checkboxIndex === index) {
          return {...checkbox, checked: !checkbox.checked}
        }
        return checkbox
      }
    )

    this.setState({childrenCheckbox: newChildrenCheckbox})
  }

  componentDidUpdate() {
    this.props.handleUpdateCheckboxes(this.state.childrenCheckbox)
  }

  render() {
    const {parentCheckbox} = this.props
    const {childrenCheckbox} = this.state

    const checked = childrenCheckbox.every(checkbox => checkbox.checked)

    return (
      <div className={BASE_CLASS}>
        <FormCheckbox
          name={parentCheckbox.name}
          checked={checked}
          onChange={this._createHandleChangeParent(checked)}
          label={parentCheckbox.label}
        />

        <div className={`${BASE_CLASS}-children`}>
          {childrenCheckbox.map((checkbox, index) => (
            <FormCheckbox
              name={checkbox.name}
              checked={checkbox.checked}
              onChange={this._createHandleChangeChildren(index)}
              label={checkbox.label}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

FormCheckboxesWithParent.displayName = 'FormCheckboxesWithParent'

FormCheckboxesWithParent.defaultProps = {
  handleUpdateCheckboxes: () => {}
}

FormCheckboxesWithParent.propTypes = {
  parentCheckbox: PropTypes.object.isRequired,
  initialChildrenCheckbox: PropTypes.array.isRequired,
  handleUpdateCheckboxes: PropTypes.func
}

export default FormCheckboxesWithParent
