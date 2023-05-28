---
sidebar_position: 2
---

# Response Format

<details>
<summary>Create/Update/Get a Resource</summary>

```json title="Create/Update/Get Example"
{
  "code": 200,
  "status": "OK",
  "data": {
    "id": 1,
    "username": "krsbx"
  }
}
```

```json title="Create/Update/Get JSON Schema"
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "code": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "properties": {},
      "required": []
    }
  },
  "required": ["code", "status", "data"]
}
```

</details>

<details>
<summary>Get all Resource</summary>

```json title="Get Example"
{
  "code": 200,
  "status": "OK",
  "data": [
    {
      "id": 1,
      "username": "krsbx"
    }
  ],
  "page": {
    "size": 1,
    "total": 1,
    "totalPages": 1,
    "current": 1
  }
}
```

```json title="Get JSON Schema"
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "code": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    },
    "data": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {},
          "required": []
        }
      ]
    },
    "page": {
      "type": "object",
      "properties": {
        "size": {
          "type": "integer"
        },
        "total": {
          "type": "integer"
        },
        "totalPages": {
          "type": "integer"
        },
        "current": {
          "type": "integer"
        }
      },
      "required": ["size", "total", "totalPages", "current"]
    }
  },
  "required": ["code", "status", "data", "page"]
}
```

</details>

<details>
<summary>Error</summary>

```json title="Error Example 1"
{
  "code": 500,
  "status": "Internal Server Error",
  "message": "An error occurred on the server"
}
```

```json title="Error Example 2"
{
  "code": 400,
  "status": "Bad Request",
  "message": [
    {
      "message": "Email is required"
    }
  ]
}
```

```json title="Error JSON Schema"
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "code": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    },
    "message": {
      "type": "string"
    }
  },
  "required": ["code", "status", "message"]
}
```

</details>
