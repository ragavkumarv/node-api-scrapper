import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
const app = express();

import routes from './routes'

app.use(bodyParser.json());
app.use(cors());
app.use('/api',routes);

export default app;