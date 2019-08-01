export default props => {
  const {children, ...propsWithoutChildren} = props
  return {
    ...propsWithoutChildren,
    variations: children.map(child => ({
      id: child.props.variationId,
      name: child.props.variationName,
      isDefault: child.props.defaultVariation
    }))
  }
}
