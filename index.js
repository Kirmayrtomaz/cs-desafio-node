import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import mongoose from 'mongoose';


require('babel-core/register');
require('babel-polyfill');

const app = express();

mongoose.connect(config.mongodb.uri);

app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json());


consign(config)
  .include('models')
  .then('controllers')
  .then('helpers')
  .then('routes')
  .into(app);
console.log(config.server.port);
app.listen(config.server.port, () => {
  console.log('API REST EXECUTANDO');
});

export default app;
