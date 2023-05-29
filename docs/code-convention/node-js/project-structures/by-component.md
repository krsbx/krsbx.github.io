---
sidebar_position: 1
---

# Structure by components

Depends on the size of the apps, monoliths can be the best choices for certain apps. One of the problem of monoliths implementation is as the project size grew bigger it often leads to spaghetti code. One way to solve this problem is to develop things in smaller size: divide the whole stack into it's own components that don't share files with others. By doing so we can avoid the _dependency hell_ once the app size grows.

<details>
<summary>Small-Medium</summary>

```bash
├── src
│ ├── config # any configurations files for the app
│ ├── middlewares # any middlewares files for the app
│ ├── models # any models files for the app, usually contains the Sequelize models definitions
│ ├── migrations # any migrations files for the app, usually contains the Sequelize migrations files
│ ├── repository # any repository files for the app
│ ├── routes # any routes definitions files for the app
│ ├── seeders # any seeders files for the app, usually contains the Sequelize seeders files
│ ├── type # any custom type definitions if needed
│ ├── utils # any utility files for the app
```

</details>

<details>
<summary>Medium-Large</summary>

```bash
├── src
│ ├── config # any configurations files for the app
│ ├── components # any components for the app
│ │ ├── [component] # component of the app
│ │ │ ├── [event].[js/ts] # event for the component, can be a file/folder
│ │ │ │ ├── index.[js/ts] # the index of the event
│ │ │ │ ├── [events].[js/ts] # any event for the component, can contain the cronjob of a component
│ │ │ ├── [middleware].[js/ts] # middleware for the component, can be a file/folder
│ │ │ │ ├── index.[js/ts] # the index of the middleware
│ │ │ │ ├── [middlewares].[js/ts] # any middleware for the component, devided by the usage
│ │ │ │ ├── [response].[js/ts] # any response for the component, can be a file/folder
│ │ │ │ │ ├── index.[js/ts] # the index of the response
│ │ │ │ │ ├── [responses].[js/ts] # any response for the component, in case the middleware are becoming too hard to read
│ │ │ ├── [routes].[js/ts] # routes definitions for the component, can be a file/folder
│ │ │ │ ├── index.[js/ts] # the index of the route
│ │ │ │ ├── [routes].[js/ts] # any route for the component, devided by the usage
│ ├── models # any models files for the app, usually contains the Sequelize models definitions
│ ├── migrations # any migrations files for the app, usually contains the Sequelize migrations files
│ ├── seeders # any seeders files for the app, usually contains the Sequelize seeders files
│ ├── shares # any shares files for the app, can contains the base models that can be extended in the models
│ ├── type # any custom type definitions if needed
│ ├── utils # any shared utility files for the app
```

</details>
