import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe.skip('TcfUi', () => {
  it('Render', () => {
    render(<TcfUi />)
    expect(true).to.be.eql(false)
  })
})
