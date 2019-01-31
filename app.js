/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import partyRoute from './router/partyRouter'

const app = express();
const PORT = 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', partyRoute)

app.listen(process.env.PORT || PORT, (err) => {
  if (err) console.log(err);
  console.log(`Running on port ${PORT}`);
});

export default app;
