# @intros/eslint-config-intros

An opinionated javascript code style based on airbnb.

## Usage

__general javascript__
``` js
// file: .eslintrc.js

module.exports = {
   extends: ['@brownbag-js-styles/eslint-config-ben']
}
```

__react__
``` js
// file: .eslintrc.js

module.exports = {
   extends: ['@brownbag-js-styles/eslint-config-ben/react']
}
```


## Usage with Webpack

```js
// file: .eslintrc.js
module.exports {
    extends: ['@brownbag-js-styles/eslint-config-ben/react'],
    settings: {
        'import/resolver': 'webpack',
    },
}
```

