import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe.skip('TcfSecondLayer', () => {
  it('Render', () => {
    render(<TcfSecondLayer />)
    expect(true).to.be.eql(false)
  })
})
