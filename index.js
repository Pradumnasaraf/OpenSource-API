const express = require("express");
const app = express();

app.use(require('./Middleware/logger.js'))
app.use('/', require('./Router/router.js'))

PORT = process.PORT || 3002
app.listen(PORT, () => console.log(`Server is live on the PORT: http://localhost:${PORT}`))