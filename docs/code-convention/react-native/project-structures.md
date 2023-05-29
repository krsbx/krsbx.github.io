---
sidebar_position: 1
---

# Structure by components

Depends on the size of the apps, monoliths can be the best choices for certain apps. One of the problem of monoliths implementation is as the project size grew bigger it often leads to spaghetti code. One way to solve this problem is to develop things in smaller size: divide the whole stack into it's own components that don't share files with others. By doing so we can avoid the _dependency hell_ once the app size grows.

```bash
├── src
│ ├── config # any configurations files for the app
│ ├── components # any components for the app
│ │ ├── [component].[jsx/tsx] # component for the app, can be a file/folder
│ │ │ ├── index.[js/ts] # the index of the component
│ │ │ ├── [*/***/index].[js/ts] # the index of the smaller component of the component
│ │ │ ├── [*/***].[jsx/tsx] # the smaller component of the component
│ ├── constants # any constants for the app
│ │ ├── [component].[js/ts] # constant for the component of the app, can be a file/folder
│ │ │ ├── index.[js/ts] # the index of the constant for the component
│ ├── store # any store files for the app, can be a redux/recoil/zustand store
│ │ ├── index.[js/ts] # the index of the store, contain the result of store creations
│ │ │ ├── actions
│ │ │ │ ├── index.[js/ts] # the index of all actions for the store
│ │ │ │ ├── [action].[js/ts] # any action for the store
│ │ │ ├── reducers
│ │ │ │ ├── index.[js/ts] # the index of all reducers for the store
│ │ │ │ ├── [reducer].[js/ts] # any reducer configurations for the store
│ │ │ ├── selectors
│ │ │ │ ├── index.[js/ts] # the index of all selectors for the store
│ │ │ │ ├── [selector].[js/ts] # any selector for the store
│ ├── type # any custom type definitions if needed
│ ├── hooks # any hooks files for the app
│ ├── utils # any utility files for the app
```
