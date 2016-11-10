import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';

const app = express();

app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json());



consign(config)
  .include('models')
  .then('routes')
  .into(app);

app.listen(config.server.port, () => {
  console.log('API REST EXECUTANDO');
});

export default app;
