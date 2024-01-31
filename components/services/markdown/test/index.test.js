import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {screen} from '@testing-library/dom'
import {render} from '@testing-library/react'

import ServiceMarkdown from '../src/index.js'

chai.use(chaiDOM)

describe('services/markdown', () => {
  it('Render', async () => {
    render(<ServiceMarkdown src="https://sui-statics-frontend.spain.advgo.net/texts/fotocasa-pro/es/cookies.md" />)

    const text = await screen.findByText('¿Qué es una cookie? ¿Y para qué usamos estas tecnologías?')
    expect(text).not.to.be.null
  })
})
