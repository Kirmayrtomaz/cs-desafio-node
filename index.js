import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import mongoose from 'mongoose';
import cors from 'cors';
import expressValidator from 'express-validator';



require('babel-core/register');
require('babel-polyfill');

const app = express();
const mongo_uri = process.env.MONGODB_URI || config.mongodb.uri;
const port = process.env.PORT || config.server.port;

mongoose.connect(mongo_uri);

app.use(cors());
app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json());

app.use(expressValidator())

consign(config)
  .include('models')
  .then('controllers')
  .then('helpers')
  .then('routes')
  .into(app);


app.listen(port, () => {
  console.log('API REST EXECUTANDO');
});

export default app;
