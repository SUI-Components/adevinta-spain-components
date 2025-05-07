/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

import {fireEvent, render, waitFor} from '@testing-library/react'

import {brand, navCTA, navMain, navUser} from './fixtures.js'

chai.use(chaiDOM)

const Component = props => <TopbarUser brand={brand} navMain={navMain} navUser={navUser} {...props} />

describe('topbar/user', () => {
  it('Render', () => {
    const {getByText} = render(<Component />)

    expect(getByText(/Topbar User/i)).to.exist
  })

  it('The user can see the navigation button when declared', () => {
    const {getByTitle} = render(<Component navCTA={navCTA} />)

    const ctaElement = getByTitle(navCTA.text)
    const anchor = ctaElement.closest('a')
    expect(anchor).to.have.attribute('href', navCTA.url)
  })

  it('The user can see a custom content instead of a navigation button', () => {
    const customContent = <div>custom content</div>
    // we make sure that, if a customContent is passed, even though a navCTA is provided as well
    // the custom content it's rendered instead of the navCTA
    const {getByText, queryByTitle} = render(<Component customContent={customContent} navCTA={navCTA} />)

    expect(getByText(/custom content/i)).to.exist
    expect(queryByTitle(navCTA.text)).not.exist
  })

  it('The user can open toggable menus and see clickable link items', async () => {
    const {queryByText} = render(<Component />)

    const firstNavButtonElement = queryByText(navMain[0].label)

    fireEvent.click(firstNavButtonElement)

    await waitFor(() => {
      const firstLinkItemElement = queryByText(navMain[0].menu[0].links[0].text)
      expect(firstLinkItemElement).to.have.attribute('href', '#link-1')
    })
  })
})
