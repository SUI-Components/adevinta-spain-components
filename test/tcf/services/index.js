import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe.skip('TcfServices', () => {
  it('Render', () => {
    render(<TcfServices />)
    expect(true).to.be.eql(false)
  })
})
