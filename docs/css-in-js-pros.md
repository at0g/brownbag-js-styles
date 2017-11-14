# CSS in JS

Some features and shortcomings of CSS in JS solutions.
To provide some context, this document will be referring to what I
 consider as 4th generation solutions.

My 4th gen criteria:

- generated styles are __embedded__ (eg a style element in the head of
 the document)
- css selectors are interpolated verbatim to support current and future
 spec (:before, :after, :hover, :focus, :selection etc)
- media queries are supported (additional style element with either a
 media attribute, or a wrapping `@media` block)
- configurable media query order
- animation support
- vendor prefixing
- node/universal render support and client side hydration

## Cons

### \#1 CSS can not be cached separately

The style definitions are bundled with JavaScript, they are not
 cached independently. While it would be possible to configure a tool
 such as webpack to create a long lived styles bundle, this would be at
 odds with the benefits of a critical render path.

### \#2 Increased bundle size

Side effect of \#1, js + css = more bytes in the bundle.

### \#3 Tooling

While JavaScript tooling is very good, CSS specific tooling such as
 IDE linter integration will not understand the css/js context.
Standard CSS plugins (such as postcss) are typically not an option as
 they must run in the browser. However, there are multiple css in js
 implementations that either support plugins (such as fela), or have
 common functionality built in (such as styletron)
