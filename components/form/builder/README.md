# FormBuilder

## Description
> This component is a form builder, which from a configuration file, generates the different fields of the form and defines their interaction between them.

## Installation

```sh
$ npm install @schibstedspain/sui-form-builder --save
```

### Usage
```js
import FormBuilder from '@schibstedspain/sui-form-builder'

return (
  <FormBuilder
    config={ptaFormSettings}
    onLoad={handleLoad}
    onChange={handleChange}
    onSubmit={handleSubmit}
    submitText={submitText}
  />)
```


### Config
Defines the form items and dependencies between fields.

```javascript
{
  country: {
    type: 'select',
    label: 'Countries',
    placeholder: 'Select a country',
    errorText: 'Required',
    next: 'city'
  },
  city: {
    type: 'select',
    label: 'Cities',
    placeholder: 'Select a city',
    errorText: 'Required',
    next: 'street'
  },
  [...]
}
```

#### Accepted config properties
type: **string** (*Required*)
> select | input | text-area | button-group

next: **string**
> When the user selects an item from this field, the next field refers to the next field from which data will be requested

placeholder: **string**
> Sets input or textarea placeholder

label: **string**
> Sets the formField label

errorText: **string**
> Sets the error text to be displayed in case of error in the field

persists: **boolean**
> Defines whether the field data should persist if the user selects one of the higher-level fields.

inputType: **string**
> text | number

size: **string**
> short | long



### onLoad
The form initializes with the next sequence:

1.- Generates an initial state of the form using the `config` received via props. That means, define the form fields without any value.
2.- Executes the `onLoad` function from props.
3.- Updates the form state with the returned items list received

```javascript
  const onLoad = () => {  
    const fieldItems = {
      country: [
        {id: 0, name: 'Germany'},
        {id: 1, name: 'Italy'}
      ]
    }
    return fieldItems
  }
```
So the `country` form field, will be initalized as a `select`, with Germany and Italy options.

Notice that you can initialize as much items as you need. If you have no dependencies between form fields, you can fill the form completely.


### onChange
Once the user selects an item, `onChange` func will be triggered. This func will receive the `nextField`, and the selected items (`params`)

``` javascript
  const onChange = ({nextField, params}) => {

    console.log(nextField) // city
    console.log(params) // {country: 0}

    const fieldItems = {
      city: [
        {id: 0, name: 'Barcelona'},
        {id: 1, name: 'Madrid'}
      ]
    }
    return fieldItems
  }
```

so the form `formBuilder` will update the state adding the options list to the `city` field.


### onSubmit

```javascript
  const onSubmit = ({params}) => {
    console.log(params) // {country: 0, city: 1}
  }
```


### submitText
Sets the submit button text


### Auto-cleaning the form

When a user selects a field of the form, the default behavior is to clear the following fields that are dependent on the previous one.
For instance, if the `city` field depends on the `country`:

```javascript
{
  country: {
    type: 'select',
    next: 'city'
  },
  city: {
    type: 'select'
  }
}
```

and the user has already selected a country and a city, once the user sets a new country, the form will automatically delete the cities list.

This behavior can be avoided, by setting **persists: true** in the config:

```javascript
{
  country: {
    type: 'select',
    next: 'city'
  },
  city: {
    type: 'select',
    persist: true
  }
}
```