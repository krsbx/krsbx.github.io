---
sidebar_position: 3
---

# Fail Fast

In Node.js whether we use Javascript or Typescript there is a potential bugs that we might not know before but it become a thing when we run it in productions. To prevent this problem, it's better to implement a _defensive programming_ approach so we don't have this kind of bugs in productions. In reality, we might skip this apprach since there is a lot of checking that need to do. To make it easier, we can just use some libraries that are indeed for validating a data such as `Yup, Joi, Zod, etc.`

### Code Example: using Zod to fail fast

```js title="src/components/users/validator.js"
import { z } from 'zod';

export const loginSchema = z.object({
  username: z
    .string()
    .min(5, { message: 'Username must at least 5 characters long' }),
  password: z.string().min(1, { message: 'Password are required' }),
});
```

```js title="src/components/users/middleware.js"
const { loginSchema } = require('./validator.js');

// .... //

async function validateUserPayload(req, res, next) {
  loginSchema.parse(req.body); // Will throw an error if the validation failed

  // Do something when we know for sure that the user payload are in the correct format
  // .... //
}
```

### Anti Pattern Code Example: manual validation with no type checking

```js title="src/components/users/middleware.js"
async function validateUserPayload(req, res, next) {
  // what will happen if the user pass a number not a string?
  // what will happen if the user pass a string less than 5 characters?
  if (!req.body.username.length && !req.body.password) {
    res.status(400).json({
      status: 400,
      message: [
        'Username must at least 5 characters long',
        'Password are required',
      ],
    });

    return;
  }

  // Do something
}
```
