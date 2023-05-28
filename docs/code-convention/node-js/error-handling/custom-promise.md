---
sidebar_position: 2
---

# Callback to Promise

Base on the explaination in [Avoid Callback](./avoid-callback.md) we can conclude that a callback is a thing that need to be avoided as much as possible. Although we want to avoid callbacks but there is chances that the `NPM package` that we want to use is using a callback and there is no promise counterpart for it. When we facing this kind of problem we need to create our own promise base implementation by using the `Promise` that accept `resolve` and `reject` as its argument. Therefore, we can guarantee that we using the `Promise` base one and not the `callback` one.

### Code Example

<details>
<summary>Javascript</summary>

```js title="src/utils/token.js"
function verifyAccessToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(decoded);
    });
  });
}
```

```js title="src/components/users/middleware.js"
async function verifyJwtToken() {
  const token = '...';

  try {
    const payload = await verifyAccessToken(token);
  } catch (err) {
    // Handle the error, for example: consoling the error output
    console.error(err);
  }
}
```

</details>

<details>
<summary>Typescript</summary>

```ts title="src/utils/token.ts"
function verifyAccessToken(token: string) {
  return new Promise<TokenPayload>((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(decoded as TokenPayload);
    });
  });
}
```

```js title="src/components/users/middleware.ts"
async function verifyJwtToken() {
  const token = '...';

  try {
    const payload = await verifyAccessToken(token);
  } catch (err) {
    // Handle the error, for example: consoling the error output
    console.error(err);
  }
}
```

</details>
