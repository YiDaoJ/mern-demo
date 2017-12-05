import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import apiRouter from './api';
import config from '../config';
import App from './App';
import Html from './Html';
import projects from './api/routes/projects';
import languages from './api/routes/languages';
import dataKeys from './api/routes/datakeys';
import dataValues from './api/routes/datavalues';

// import dataKeyModel from './api/models/datakeys';
// import dataValueModel from './api/models/datavalues';
// import projectModel from './api/models/projects';
// import languageModel from './api/models/languages';

dotenv.config();

const app = express();

app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.DATABASE, { useMongoClient: true });

app.use('/assets', express.static('assets'));  // ??
app.use('/api', apiRouter);
app.use('/api/projects', projects);
app.use('/api/languages', languages);
app.use('/api/datakeys', dataKeys);
app.use('/api/datavalues', dataValues);

app.get('*', (req, res) => {
  const context = {};
  const appString = renderToString(<StaticRouter context={context}><App /></StaticRouter>);
  res.send(Html({body: appString, title: 'i18nTest'}));
});


app.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});


// const lang = new languageModel({ code: 'en', name: 'English'});

// lang.save(err => {
//   if(err)
//     console.log(err);

//   const datakeyItem = new dataKeyModel({ name: 'GLOBAL__BTN_SAVE' });
//   datakeyItem.save(err => { if(err) console.log(err);});  

//   const proj = new projectModel({ title: 'TestProject', languages: [lang._id], data:{ datakeys: [datakeyItem._id], datavalues: [] } });
//   proj.save(err => {
//     if(err)
//       console.log(err);
//   });

//   const datavalueItem = new dataValueModel({ value: 'save', key: datakeyItem._id, language: lang._id, project: proj._id });
//   datavalueItem.save(err => { if(err) console.log(err);});  
// });