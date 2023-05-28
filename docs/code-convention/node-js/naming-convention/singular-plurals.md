---
sidebar_position: 5
---

# Singular vs Plurals

For naming a variables we can made a variable to have a singular name or with a plurals name. The type that we going to use is depends on the possible value that variable could have. A singular name will be use if the variable only going to have a single value and plurals name will be use if the variable could contain a mulitple values.

## Code Example

```js
const firstName = 'Firdaus'; // ✅ single value
const languages = ['Typescript', 'C#', 'Python', 'Javascript']; // ✅ multiple value
```

## Anti Pattern Code Example

```js
const firstNames = 'Firdaus'; // ❌ single value, change it to ['Firdaus'] then its fine
const language = ['Typescript', 'C#', 'Python', 'Javascript']; // ❌ it contain a multiple values
```
