/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import {screen, waitFor} from '@testing-library/react'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import MapGoogle from '../src/index.js'
import MapGoogleImage from '../src/image/index.js'

chai.use(chaiDOM)

describe('MapGoogle', () => {
  const setup = setupEnvironment(MapGoogle)

  it('should render without crashing', () => {
    // Given
    const props = {}

    // When
    const Component = <MapGoogle {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(Component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should not render null', () => {
    // Given
    const props = {}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should not extend classNames', () => {
    // Given
    const props = {className: 'extended-classNames'}
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })

  it('should render loading node and map successfully', async () => {
    // Given
    const onLoad = sinon.spy()
    const props = {
      apiKey: 'AIzaSyDp7wqS1IyRZCvMMsY2LX2V1TXY4Lh8UGA',
      loaderNode: <div>Loading</div>,
      onLoad
    }

    // When
    setup(props)

    // Then
    expect(screen.getByText('Loading')).to.be.visible
    await waitFor(() => expect(onLoad.called).to.be.true)
  })
})

describe('MapGoogleImage', () => {
  const setup = setupEnvironment(MapGoogleImage)

  it('should render without crashing', () => {
    // Given
    const props = {
      children: ({src}) => <img src={src} />
    }

    // When
    const Component = <MapGoogleImage {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(Component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should not render null', () => {
    // Given
    const props = {
      children: ({src}) => <img src={src} />
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should render image with proper src', async () => {
    // Given
    const alt = 'map'
    const props = {
      apiKey: 'AIzaSyDp7wqS1IyRZCvMMsY2LX2V1TXY4Lh8UGA',
      center: '40.714728,-73.998672',
      children: ({src}) => <img alt={alt} src={src} />
    }

    // When
    setup(props)

    // Then
    expect(screen.getByRole('img', {name: alt})).to.have.attr(
      'src',
      'https://maps.googleapis.com/maps/api/staticmap?center=40.714728%2C-73.998672&key=AIzaSyDp7wqS1IyRZCvMMsY2LX2V1TXY4Lh8UGA'
    )
  })
})
