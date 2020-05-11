/* eslint react/jsx-no-undef:0 */

import React from 'react'
import {render} from '@testing-library/react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('form/builder', () => {
  it('Render', () => {
    const json = {
      form: {
        id: 'test',
        type: 'group',
        fields: [
          {
            id: 'precio',
            type: 'numeric',
            label: 'Precio *',
            display: 'money',
            required: true
          }
        ]
      }
    }
    render(<FormBuilder json={json} />)
    // expect(getByRole('button')).to.have.text('HOLA')
    expect(true).to.be.eql(false)
  })
})
