# Some patterns are glaringly obvious...

## Simple component with `className`


__vanilla css:__
```js
import React from 'react';
import classNames from 'classnames';
import Button from ‘./Button’;

export default ({ children, className, ...props }) => React.createElement(
   Button,
   {
     className: classNames('Button', className),
     ...props
   },
   children
);
```

__css modules__
```
import React from 'react';
import classNames from 'classnames';
import Button from ‘./Button’;
import styles from '!css-loader?modules=1!./Button.css';

export default ({ children, className, ...props }) => React.createElement(
   Button,
   {
     className: classNames(styles.Button, className),
     ...props
   },
   children
);
```

__fela__
```
import { createComponentWithProxy } from ‘react-fela’;
import Button from ‘./Button’;
import styles from './Button.styles';

export default createComponentWithProxy(
   styles,
   Button
);
```
