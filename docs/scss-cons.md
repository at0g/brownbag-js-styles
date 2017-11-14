# Cons of scss


## Long toolchain

- Ruby sass is slow. Too slow.
- libsass is fast, but requires a C compiler.
 (You probably have one of those though)
- node-sass needs to be rebuilt. This happens so often that [there's
 even a module for it](https://www.npmjs.com/package/rebuild-node-sass).
- You'd be hard pressed to find a css solution with a heavier install
 footprint.

## The good bits exist as postcss plugins

- [variables](https://github.com/postcss/postcss-custom-properties)
- [nesting](https://github.com/postcss/postcss-nested)
- [mixins](https://github.com/postcss/postcss-mixins)
- Post CSS is lighter, faster and more configurable

## Custom Language

- The language lacks portability. Outside of scss, it's useless.
- Files lack context. Imports from parents can be used without
 an explicit import.
- Import file paths (by community convention) access sibling files
 without a relative path (`"foo"` vs `"./foo"`), relying on the
 `include_paths` compiler option. This invariably leads to resolution
 issues when using multiple third party libraries.
- The language lacks functionality, but includes enough custom syntax
 to be complex.
- AFAIK Variables can not be injected into the compiler unless they are
 converted into a scss string literal.
- AFAIK Variables can not be exported from the compiler.

## Times change

- scss is designed around making monolithic sitewide stylesheets.
- it's unnecessary overhead for css modules.
- postcss is lighter, faster, and more configurable.
- css in js solutions work at compile time and run time.
- css in js solutions use a popular programming language.
- turns out some of the "good bits" actually encourage anti-patterns
(nested selector specificity, bloat from mixins, duplicate data URI's)

## Misc

- "Critical render" css is limited to an error prone manual
 implementation.
- I've yet to see a css parser in an automated test suite. No one does
 it because it's too much overhead
