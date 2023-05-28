---
sidebar_position: 3
---

# Short-Intuitive-Descriptive (SID)

A name for a variables or a functions should be short, intuitive, and descriptive.

- Short : A name must not take long to type and easy to remember.
- Intuitive : A name must read naturally, as close to the common speech as possible.
- Descriptive : A name must reflect what it does/possesses in the most efficient way possible.

## Code Example

```js
const userId = 10;
// ✅ short : not take long to type, easy to remember
// ✅ intuitive : user id
// ✅ descriptive : the variables contains a user id, which is 10

const hasPagination = total > limit;
// ✅ short : not take long to type, easy to remember,
// ✅ intuitive : it has a pagination
// ✅ descriptive : the variable indicate is it should have a pagination or not
```

### Anti Pattern Code Example

```js
const id = 10;
// ✅ short : not take long to type, easy to remember
// ✅ intuitive : okay, it's an id
// ❌ descriptive : the variables contains an id, which is 10 but what id?

const isPaginateable = total > limit;
// ✅ short : not take long to type, easy to remember,
// ❌ intuitive : the word doesn't seems to natural to read
// ❌ descriptive : what is `isPaginateable`?
```
