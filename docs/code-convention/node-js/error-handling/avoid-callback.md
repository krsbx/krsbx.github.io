---
sidebar_position: 1
---

# Avoid Callback

Callbacks don't scale well since not all the developer are familiar with this approach. The implementation of callback will lead us the developer to check errors all over and can lead to deep nesting which hard to read and understand. `Promise` is a better way to go since it only return a RETURN and THROW to control the flow. By using the `Promise` all the error will be throw to the catch block that resulting more compact code and easier to read.

### Code Example: using promises to catch errors

```js
getUser(param)
  .then(getDetail)
  .then(getPots)
  .then(getComments)
  .then(getLikes)
  .then(getDislikes)
  .catch(handleError);
```

### Code Example: using async/await to catch errors

```js
async function getUserInformation(param) {
  try {
    const user = await getUser(param);
    const posts = await getPosts(user);
  } catch (err) {
    // Handle the error, for example: consoling the error output
    console.error(err);
  } finally {
    // A function that will be always executed whatever happened
    await cleanupData();
  }
}
```

### Anti Pattern Code Example: callback error handling

<details>
<summary>Javascript</summary>

```js
getUsers(param, function (err, res) {
  // Cancel out the process since there is an error
  if (err !== null) {
    // Do the error handling here
    return;
  }

  getUserDetail(res[0], function (err, res) {
    // Do more nasty callback
  }
});
```

</details>

<details>
<summary>Typescript</summary>

```ts
getUsers(param, function (err: Error, res: Results) {
  // Cancel out the process since there is an error
  if (err !== null) {
    // Do the error handling here
    return;
  }

  getUserDetail(res[0], function (err: Error, res: Result) {
    // Do more nasty callback
  }
});
```

</details>
