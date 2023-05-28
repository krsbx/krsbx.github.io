---
sidebar_position: 2
---

# Name Cases

For naming things there some _cases_ that we could use such as `camelCase, PascalCase, snake_case, etc.`. Depends on the situations we could pick one of them, but **mainly in Node.js we will use camelCase** for **variables and functions naming** and **SCREAMING_SNAKE_CASE** or **CONSTANT_CASE** for any **globals variables**.

## Code Example

<details>
<summary>Variable Naming</summary>

```js
const firstName = 'Firdaus';
const languages = ['Typescript', 'C#', 'Python', 'Javascript'];
```

</details>

<details>
<summary>Function Naming</summary>

```js title="src/components/users/middleware.js"
function verifyUserPayload(payload) {
  // ... do somethings
}
```

</details>

<details>
<summary>Global Variable</summary>

```js title="src/utils/constant.js"
export const PLATFORMS = {
  WINDOWS: 'WINDOWS',
  MAC: 'MAC',
  LINUX: 'LINUX',
};

// any other variables
```

</details>

### Anti Pattern Code Example

<details>
<summary>Variable Naming</summary>

```js
const first_name = 'Firdaus';
const languages = ['Typescript', 'C#', 'Python', 'Javascript'];
```

</details>

<details>
<summary>Function Naming</summary>

```js title="src/components/users/middleware.js"
function verifyUserPayload(payload) {
  // ... do somethings
}

function verify_user_token(payload) {
  // ... do somethings
}
```

</details>

<details>
<summary>Global Variable</summary>

```js title="src/utils/constant.js"
export const platforms = {
  WINDOWS: 'WINDOWS',
  MAC: 'MAC',
  LINUX: 'LINUX',
};

// any other variables
```

</details>
