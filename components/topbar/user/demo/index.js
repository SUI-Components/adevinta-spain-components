/* eslint-disable react/prop-types */

import TopbarUser from 'components/topbar/user/src'

const Topbar = props => (
  <TopbarUser brand={brand} navMain={navMain} navUser={navUser} navCTA={navCTA} onToggle={console.log} {...props} />
)

const AudioIcon = ({svgClass}) => (
  <svg width="24" height="24" className={svgClass} viewBox="0 -1 8 8" style={{fill: 'inherit'}}>
    <path d="M1.16 0c-.72.72-1.16 1.71-1.16 2.81s.43 2.12 1.16 2.84l.72-.72c-.54-.54-.88-1.29-.88-2.13 0-.83.33-1.55.88-2.09l-.72-.72zm5.69 0l-.72.72c.54.54.88 1.26.88 2.09 0 .83-.33 1.58-.88 2.13l.72.72c.72-.72 1.16-1.74 1.16-2.84 0-1.1-.43-2.09-1.16-2.81zm-4.25 1.41c-.36.36-.59.86-.59 1.41 0 .55.23 1.08.59 1.44l.69-.72c-.18-.18-.28-.44-.28-.72 0-.28.1-.5.28-.69l-.69-.72zm2.81 0l-.69.72c.18.18.28.41.28.69 0 .28-.1.54-.28.72l.69.72c.36-.36.59-.89.59-1.44 0-.55-.23-1.05-.59-1.41z" />
  </svg>
)

const PencilIcon = ({svgClass}) => (
  <svg className={svgClass} viewBox="0 0 8 8" style={{fill: 'inherit'}}>
    <path d="M6 0l-1 1 2 2 1-1-2-2zm-2 2l-4 4v2h2l4-4-2-2z" />
  </svg>
)

const brand = {
  name: 'Topbar User',
  url: 'https://github.com/SUI-Components/sui-components'
}

const navMain = [
  {
    icon: AudioIcon,
    label: 'Nav 1',
    menu: [
      {
        title: 'Section 1',
        links: [
          {
            text: 'Link 1',
            url: '#link-1'
          },
          {
            text: 'Link 2',
            url: '#link-2'
          }
        ]
      },
      {
        title: 'Section 2',
        links: [
          {
            text: 'Link 3',
            url: '#link-3'
          },
          {
            text: 'Link 4',
            url: '#link-4'
          }
        ]
      }
    ]
  },
  {
    icon: AudioIcon,
    label: 'Nav 2',
    menu: [
      {
        title: 'Section 3',
        links: [
          {
            target: '_blank',
            text: 'Link 5',
            url: '#link-5'
          },
          {
            text: 'Link 6',
            url: '#link-6'
          }
        ]
      },
      {
        title: 'Section 4',
        links: [
          {
            text: 'Link 7',
            url: '#link-7'
          },
          {
            text: 'Link 8',
            url: '#link-8'
          }
        ]
      }
    ]
  }
]

const navUser = {
  avatar: 'https://avatars0.githubusercontent.com/u/179462',
  name: 'Carlos Villu',
  menu: [
    {
      text: 'Link text 1',
      url: '#link-1',
      icon: AudioIcon,
      notifications: 5
    },
    {
      text: 'Link text 2',
      url: '#link-2',
      icon: AudioIcon
    },
    {
      text: 'Link text 3',
      url: '#link-3',
      icon: AudioIcon
    },
    {
      text: 'Link text 4',
      url: '#link-4',
      icon: AudioIcon
    }
  ]
}

const navCTA = {
  url: 'https://github.com/SUI-Components/sui-components',
  icon: PencilIcon,
  text: 'Check our code'
}

const Demo = () => {
  return (
    <>
      <h1>Topbar with CTA</h1>
      <Topbar />

      <h1>Topbar with Custom content</h1>
      <Topbar customContent={<div>custom content</div>} />
    </>
  )
}

export default Demo
