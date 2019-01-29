import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on port ${PORT}`);
});

export default app;
