import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {render} from '@testing-library/react'

import ServiceMarkdown from '../src/index.js'

chai.use(chaiDOM)

describe('services/markdown', () => {
  it('Render', () => {
    const {getByText} = render(
      <ServiceMarkdown src="https://sui-statics-frontend.spain.advgo.net/texts/fotocasa-pro/es/cookies.md" />
    )

    const text = getByText('Política de cookies de Fotocasa Pro')
    expect(text).not.to.be.null
  })
})
