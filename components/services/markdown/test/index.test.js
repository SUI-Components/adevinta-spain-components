import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {screen} from '@testing-library/dom'
import {render} from '@testing-library/react'

import ServiceMarkdown from '../src/index.js'

chai.use(chaiDOM)

describe('services/markdown', () => {
  it('Render with src prop', async () => {
    render(<ServiceMarkdown src="https://sui-statics-frontend.spain.advgo.net/texts/fotocasa-pro/es/cookies.md" />)

    const text = await screen.findByText('¿Qué es una cookie? ¿Y para qué usamos estas tecnologías?')
    expect(text).not.to.be.null
  })

  it('Render with content prop', async () => {
    const markdownContent = '# Test Title\nThis is a **bold** test.'
    render(<ServiceMarkdown content={markdownContent} />)

    const title = await screen.findByText('Test Title')
    const boldText = await screen.findByText('bold')
    expect(title).not.to.be.null
    expect(boldText).not.to.be.null
  })

  it('Prioritizes content prop over src prop when both are provided', async () => {
    const markdownContent = '# Content Prop Title'
    render(<ServiceMarkdown content={markdownContent} src="https://example.com/test.md" />)

    const title = await screen.findByText('Content Prop Title')
    expect(title).not.to.be.null
  })
})
