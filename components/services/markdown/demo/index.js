import ServicesMarkdown from 'components/services/markdown/src/index'

const handleOnLoad = ({html, setHtml}) => {
  console.log('markdown content loaded', {html})
  setHtml('<h1>Hello World</h1><p>This content was injected after the markdown was loaded</p>')
}

const markdownStyles = {
  backgroundColor: 'white',
  borderRadius: '24px',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  margin: '24px',
  padding: '16px'
}
const MARKDOWN_URL =
  'https://raw.githubusercontent.com/SUI-Components/adevinta-spain-components/master/components/services/markdown/demo/example.md'

const MARKDOWN_CONTENT = `
# Demo with Direct Content
This markdown is passed as a **content prop** instead of loading from an external URL.

## Features
- Direct parsing of markdown strings
- No network requests needed
- Instant rendering

### Code Example
\`\`\`javascript
const content = "# Hello World"
<ServiceMarkdown content={content} />
\`\`\`

> This is a quote block to demonstrate styling
`

const DemoServicesMarkdownGroup = () => {
  return (
    <>
      <h1>ServiceMarkdown component loading contents from an external source</h1>
      <div style={markdownStyles}>
        <ServicesMarkdown src={MARKDOWN_URL} />
      </div>
      <h1>ServiceMarkdown component with direct markdown content</h1>
      <div style={markdownStyles}>
        <ServicesMarkdown content={MARKDOWN_CONTENT} />
      </div>
      <h1>ServiceMarkdown component loading contents from an external source and overriding it when loaded</h1>
      <div style={markdownStyles}>
        <ServicesMarkdown src={MARKDOWN_URL} onLoad={handleOnLoad} />
      </div>
    </>
  )
}

export default DemoServicesMarkdownGroup
