import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import logger from './utils/logger';
import Route from './routes';
import './models';

dotenv.config();

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use('/api/v1', Route)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => logger.info(`App is running at port ${PORT}`));

export default app;
