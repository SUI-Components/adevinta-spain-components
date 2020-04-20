import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe('TcfUi', () => {
  it('Render', () => {
    render(<TcfUi />)
    expect(true).to.be.eql(false)
  })
})
