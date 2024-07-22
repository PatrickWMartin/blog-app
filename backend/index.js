import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {reqLogger} from './middleware/logEvents.js'
import { corsOptions } from './middleware/corsOptionSetup.js';
import { errorHandler } from './middleware/errorHandler.js';
import {apiRouter} from './routes/api.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(reqLogger);

app.use('/api', apiRouter);

app.get('/', (_, res) => {
    res.send('Hello World')
});


app.all('*', (_, res) => {
    res.status(404);
    res.send("Resourse not found")
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on part ${port}...`);
});
