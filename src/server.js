import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import mongoose from 'mongoose';

import apiRouter from './api';
import config from '../config';
import App from './App';
import Html from './Html';
import projects from './api/routes/projects';
import languages from './api/routes/languages';

const app = express();

app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/i18n', { useMongoClient: true });

app.use('/assets', express.static('assets'));  // ??
app.use('/api', apiRouter);
app.use('/api/projects', projects);
app.use('/api/languages', languages);

app.get('*', (req, res) => {
  const context = {};
  const appString = renderToString(<StaticRouter context={context}><App /></StaticRouter>);
  res.send(Html({body: appString, title: 'i18nTest'}));
});

app.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
