# Comparison of common approaches to styling react components


## global CSS

### Pros
- web standards css
- very well understood
- minimal tool chain
- theoretically easy to overwrite with replacement stylesheet

## Cons
- dependency graph is absent or at best, unclear
- presentation depends on order/precedence and heirarchy
- limited by css features and browser support
- fragile
- in practice many changes cannot be made with css alone


## CSS modules ([post]css)

### Pros
- web standards css
- many of the practical features of preprocessors are provided via plugins
- styles can be co-located with components
- styles can be extracted into a seperate css file
- fairly well understood
- issues with precedence when combining rules

### Cons
- limited by css features and browser support
- co-location is rarely atomic, being influenced by global styles
- limited support for theming
- automated testing is difficult (anyone run a css parser to test rules?)
- extraction does not scale with bundle splitting
- dynamic, vendor prefixed styles are tough
- requires additional build tooling


## CSS modules (scss)

### Pros
- as above (postcss modules)
- psudeo programming language
- widely used

### Cons
- esoteric language and features
- dated
- encourages bloated output
- considerable toolchain overhead


## Inline styles

### Pros
- atomic
- no additional build chain steps
- support for dynamic styles

### Cons
- many features are not supported (psuedo elements, media queries, animations etc)
- poor render performance
- adds bloat to universal render
- cannot be cached seperately
- difficult to override due to precendence


## Fela

### Pros
- styles are written in JavaScript (testable, operators, extensibility etc)
- works very well with co-location to build atomic components
- animations and fonts can be intelligently co-located
- reduces effects of css precedence
- deduplicates style rules
- works very well with universal rendering to create critical render path
- works very well with bundle splitting
- dynamic autoprefixing
- excellent for theming
- does not require webpack compilation

### Cons
- css can not be cached seperately from JS
- styles are written in JavaScript (issues with IDE's, css linting etc)
- no css sourcemaps
- more runtime code
- different approach / shock of the new / change resistance
- issues combining css shorthand and longhand (favor longhand)
- theming via react context imposes restrictions on shouldComponentUpdate optimisations
