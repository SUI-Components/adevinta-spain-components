import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe.skip('GoogleOneTapLoader', () => {
  it('Render', () => {
    render(<GoogleOneTapLoader />)
    expect(true).to.be.eql(true)
  })
})
