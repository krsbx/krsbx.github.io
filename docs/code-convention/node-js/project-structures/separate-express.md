---
sidebar_position: 3
---

# Separate express `app` and `server`

Base on the latest Express generator, the generator separe between API declaration and the network related configuration (port, protocol, etc). By doing so, it create a possibility to do a test to the API without performing any network calls. Therefore, it lead to a better separation of concerns and cleaner code.

### Code Example: API declaration

```js
const app = express();

app.use(bodyParser.json());
app.use('/api/users', users);
```

### Code Example: Server network declaration

<details>
<summary><strong>Javascript</strong></summary>

```javascript
const app = require('../app');
const http = require('http');

const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
import app from '../app';
import http from 'http';

const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);
```

</details>
