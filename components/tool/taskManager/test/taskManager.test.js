/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {TaskManagerProvider} from 'components/tool/taskManager/src/index.js'

import ToolTaskManager from '../src/index.js'

chai.use(chaiDOM)

describe('ToolTaskManager', () => {
  const setup = setupEnvironment(() => (
    <TaskManagerProvider>
      <ToolTaskManager />
    </TaskManagerProvider>
  ))

  it('should render without crashing', () => {
    // Given
    const props = {}

    // When
    const component = (
      <TaskManagerProvider>
        <ToolTaskManager {...props} />
      </TaskManagerProvider>
    )

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

  it.skip('should NOT extend classNames', () => {
    // Given
    const props = {className: 'extended-classNames'}
    const findSentence = str => string => string.match(new RegExp(`S*${str}S*`))

    // When
    const {container} = setup(props)
    const findClassName = findSentence(props.className)

    // Then
    expect(findClassName(container.innerHTML)).to.be.null
  })
})
