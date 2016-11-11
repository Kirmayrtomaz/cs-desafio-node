import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import mongoose from 'mongoose';


require('babel-core/register');
require('babel-polyfill');

const app = express();
const mongo_uri = process.env.MONGOLAB_URI || config.mongodb.uri;
const port = process.env.PORT || config.server.port;

mongoose.connect(mongo_uri);

app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json());


consign(config)
  .include('models')
  .then('controllers')
  .then('helpers')
  .then('routes')
  .into(app);
console.log(port);
app.listen(port, () => {
  console.log('API REST EXECUTANDO');
});

export default app;
