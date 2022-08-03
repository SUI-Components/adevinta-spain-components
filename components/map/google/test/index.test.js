/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import Component from '../src/index.js'

chai.use(chaiDOM)

describe('MapGoogle', () => {
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should NOT render null', () => {
    // Given
    const props = {}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should NOT extend classNames', () => {
    // Given
    const props = {className: 'extended-classNames'}
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })

  it('should render loading state and map successfully', async () => {
    // Given
    const spy = sinon.spy()
    const props = {
      apiKey: '',
      loaderNode: <div>Loading</div>,
      onLoad: spy
    }

    // When
    setup(props)

    // Then

    sinon.assert.callCount(spy, 1)
  })
})
