---
sidebar_position: 4
---

# Function Naming

For a naming of a function we will follow `A/HC/LC` Pattern. This pattern stand for `Action/High Context/Low Context`. Using this pattern we can add a prefix to the name of the functions when needed.

## Pattern

```md
function name = prefix? + action + high context + low context?
```

## Name Example

|         Name         |  Prefix  |  Action   | High Context (HC) | Low Context (LC) |
| :------------------: | :------: | :-------: | :---------------: | :--------------: |
|      `getUser`       |    -     |   `get`   |      `User`       |        -         |
|  `getUserComments`   |    -     |   `get`   |      `User`       |    `Comments`    |
| `handleClickOutside` |    -     | `handle`  |      `Click`      |    `Outside`     |
| `shouldDisplayError` | `should` | `Display` |      `Error`      |        -         |
