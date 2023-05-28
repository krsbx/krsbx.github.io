---
sidebar_position: 2
---

# NPM package the common utilities

Depends on the size of the apps, some utilities can be added manually and let it be in your app project directory. One of the problem of this implementation is that when there is a lot of utilities that usually use in your project you need to copy/paste some of the code into your app codebase. One way to solve this problem is to add that utilities into it's own private/public npm packages. Therefore, when you need "that" utility you only need to add the package to the codebase and you are ready to go.

Some of the NPM package that we usually use and the purpose of the packages

<details>
<summary>Developed by the community</summary>

- [lodash](https://www.npmjs.com/package/lodash) — Common utility such as `map,reduce,compact,template,etc.`
- [moment](https://www.npmjs.com/package/moment) — Date utility
- [bcrypt](https://www.npmjs.com/package/bcrypt) — Hashing password
- [sequelize](https://www.npmjs.com/package/sequelize) — Database ORM
- [prisma](https://www.npmjs.com/package/@prisma/client) — Another Database ORM
- [filter-query-parser](https://www.npmjs.com/package/filter-query-parser) — Filtering user filter for Querying
- [async-express-mw](https://www.npmjs.com/package/async-express-mw) — Express middleware wrapper that provide automatically throw error
- [node-schedule](https://www.npmjs.com/package/node-schedule) — Node.js scheduler

</details>

<details>
<summary>Developed/Published by KRSBX</summary>

- [@krsbx/sequelize-fqp](https://www.npmjs.com/package/@krsbx/sequelize-fqp) — Filter Query Parser for Sequelize ORM
- [@krsbx/prisma-fqp](https://www.npmjs.com/package/@krsbx/prisma-fqp) — Filter Query Parser for Prisma ORM
- [@krsbx/prisma-repo](https://www.npmjs.com/package/@krsbx/prisma-repo) — Repository generator for Prisma ORM
- [@krsbx/response-formatter](https://www.npmjs.com/package/@krsbx/response-formatter) — Format the response of the REST API into certain formats
- [express-asyncmw](https://www.npmjs.com/package/express-asyncmw) — Express middleware wrapper that provide automatically throw error and custom types in middlweware
- [sequelize-db-type](https://www.npmjs.com/package/sequelize-db-type) — Sequelize Database type helper for typescript development environment

</details>
