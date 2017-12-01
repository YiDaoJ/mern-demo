import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import apiRouter from './api';
import config from '../config';
import App from './App';
import Html from './Html';

const app = express();

app.use('/assets', express.static('assets'));  // ??

app.get('/', (req, res) => {
  const context = {};
  const appString = renderToString(<StaticRouter context={context}><App /></StaticRouter>);
  res.send(Html({body: appString, title: 'i18nTest'}));
});

app.use('/api', apiRouter);

app.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
