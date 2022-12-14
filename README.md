# ModernDash

## Removed Functions because of trivial native alternatives
Look at [You-Dont-Need-Lodash](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) for native replacements.

- compact
- concat
- differenceBy property shorthand
- drop
- dropRight
- fill
- findIndex
- findLastIndex
- first/head
- flatten
- flattenDeep
- flattenDepth
- fromPairs
- initial
- join
- last
- lastIndexOf
- nth
- without
- reverse
- slice
- sortedIndexOf
- tail
- take
- takeRight

Functions are not considered trivial if they:
 - include reduce methods
 - include multiple nested function calls

## Might be added later (open for discussion)
- dropRightWhile shorthands
- dropWhile shorthands
- pull functions (pull, pullAll, pullAllBy, pullAllWith, pullAt)
- remove
- sorted functions (sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy)
  - if performance is better than native alternatives (testing needed)
