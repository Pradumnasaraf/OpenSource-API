const express = require("express");
const app = express();

app.use(require('./middleware/logger.js'))
app.use(require('./routes/router.js'))
app.use(require('./middleware/404.js'))

PORT = process.PORT || 3001
app.listen(PORT, () => console.log(`Server is live on: http://localhost:${PORT}`))