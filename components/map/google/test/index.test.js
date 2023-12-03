/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import sinon from 'sinon'

import {screen, waitFor} from '@testing-library/react'

import MapGoogleImage from '../src/image/index.js'
import MapGoogle from '../src/index.js'

chai.use(chaiDOM)

const REQUIRED_MAPGOOGLEIMAGE_PROPS = {
  height: 600,
  width: 600
}

const TEST_API_KEY = 'testApiKey'

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

  it('should render loading node and map successfully if map is in interactive mode on load', async () => {
    // Given
    const onLoad = sinon.spy()
    const props = {
      apiKey: TEST_API_KEY,
      loaderNode: <div>Loading</div>,
      onLoad,
      isInteractive: true
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
      ...REQUIRED_MAPGOOGLEIMAGE_PROPS,
      staticImageNode: <img />
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
      ...REQUIRED_MAPGOOGLEIMAGE_PROPS
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should render default image when no image component is passed by props', async () => {
    // Given
    const props = {
      ...REQUIRED_MAPGOOGLEIMAGE_PROPS,
      alt: 'mapTest',
      apiKey: TEST_API_KEY,
      center: {lat: 40.714728, lng: -73.998672}
    }

    // When
    setup(props)

    // Then
    expect(screen.getByRole('img', {name: props.alt})).to.have.attr('src')
  })

  it('should render default custom image when prop children is defined', async () => {
    // Given
    const props = {
      ...REQUIRED_MAPGOOGLEIMAGE_PROPS,
      alt: 'mapTest',
      apiKey: TEST_API_KEY,
      center: {lat: 40.714728, lng: -73.998672},
      staticImageNode: <div role="img" />
    }

    // When
    setup(props)

    // Then
    expect(screen.getByRole('img', {name: props.alt})).to.have.attr('src')
  })

  it('should render default custom image when passing a signed url prop', async () => {
    // Given
    const props = {
      ...REQUIRED_MAPGOOGLEIMAGE_PROPS,
      alt: 'mapTest',
      staticImageNode: <div role="img" />,
      signedUrl: 'signedUrl'
    }

    // When
    setup(props)

    // Then
    expect(screen.getByRole('img', {name: props.alt})).to.have.attr('src', props.signedUrl)
  })
})
