const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const userRouter = require('./routes/userRouter');
const transactionRouter = require('./routes/transactionRouter');

const app = express();

app.use("/api/v1/users",userRouter);
app.use("/api/v1/transactions",transactionRouter);

app.use(errorHandler);

const port = 8000
app.listen(port, () => console.log(`Serving on: http://localhost:${port}`))