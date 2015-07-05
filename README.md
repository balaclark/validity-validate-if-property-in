# validity-validate-if-property-equals

Validate the current property if another property value is one of a list of values.

## Installation

```
npm install validity-validate-if-property-in-array --save
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , collection = save('author')
  , validateIfPropertyIn = require('validity-validate-if-property-in-array')

var schema = schemata(
    { type:
      { type: String
      }
    , url:
      { type: String
      , validators: { all: [ validateIfPropertyIn('type', [ 'url', 'link' ], validity.url) ] }
      }
    })
```

## Credits
This is a fork of [validity-validate-if-property-equals](https://github.com/microadam/validity-validate-if-property-equals)
by [Adam Duncan](https://github.com/microadam/)
