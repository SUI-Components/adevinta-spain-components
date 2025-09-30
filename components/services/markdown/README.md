# ServiceMarkdown

Allows you to fetch an external markdown file and show it parsed in your React application. Keep in mind this functionality doesn't offer server-side rendering, so your Markdown content will be loaded only in the client.

For the sake of the performance, it asynchronously loads the needed dependencies in order to be optimized for your bundle.

If you wish to add styling to the parsed markdown, you should wrap this component with another element with a className that will allow you to style it pointing directly to the descendant HTML elements.

## Installation

```sh
$ npm install @s-ui/react-services-markdown --save
```

## Usage

### Basic usage

#### Loading from external URL
```js
import ServiceMarkdown from '@s-ui/react-services-markdown'

return (
  <article className='myMarkdownFile'>
    <ServiceMarkdown src="https://mycdn.com/myfile.md"/>
  </article>
)
```

#### Using markdown content directly
```js
import ServiceMarkdown from '@s-ui/react-services-markdown'

const markdownContent = `
# Hello World
This is **bold** text and this is *italic* text.

- Item 1
- Item 2
- Item 3
`

return (
  <article className='myMarkdownFile'>
    <ServiceMarkdown content={markdownContent}/>
  </article>
)
```

```sass
@import '~@s-ui/theme/lib/index';

.myMarkdownFile {
  padding: $p-l;

  p {
    color: $c-gray;
    font-size: $fz-m;
  }
}
```

> **Find full description and more examples in the [demo page](/workbench/services/markdown/demo).**
