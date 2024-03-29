import FormRangeDatepicker from '../src/index.js'

export default () => {
  function handleClick(range) {
    console.log('handleClick', range)
  }

  const getArrowIcon = ({svgClass}) => (
    <svg className={svgClass} transform="rotate(90)" viewBox="0 0 24 24">
      <path d="M16.6,12l-8.2,8.2c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L15,12L7.6,4.6C7.4,4.4,7.4,4,7.6,3.8 c0.2-0.2,0.6-0.2,0.8,0L16.6,12z" />
    </svg>
  )

  function handleChange(range) {
    console.log('handleChange', range)
  }

  return (
    <FormRangeDatepicker
      buttonLabel="Test"
      handleClickButton={handleClick}
      handleChange={handleChange}
      icon={getArrowIcon}
      showModal
    />
  )
}
