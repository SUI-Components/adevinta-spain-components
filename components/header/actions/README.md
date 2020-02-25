# HeaderActions

## Installation

```sh
> npm install @s-ui/react-header-actions --save
```

## Usage

### Basic usage

```js
import HeaderActions from '@s-ui/react-header-actions'

return <HeaderActions
  buttonLabel='Accept'
  title='Actions header'
  icon={icon}
  onIconClick={() => alert('icon clicked')}
  onButtonClick={() => alert('button clicked')}
/>
```
