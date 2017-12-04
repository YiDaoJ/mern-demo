import express from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';

import apiRouter from './api';
import { port, basename } from '../config';
import App from './App';
import Html from './Html';
import Error from './Error';
import projects from './api/routes/projects';
import languages from './api/routes/languages';



// const renderApp = ({ context, location }) => {
//   return renderToString(
//     <StaticRouter 
//       basename={basename}
//       context={context}
//       location={location}>
//       <App />
//     </StaticRouter>
//   );
// };

// const renderHtml = ({ serverState, content }) => {
//   // const styles = sheet.toString();
//   const assets = global.assets;
//   const state = `
//     window.__SERVER_STATE__ = ${serialize(serverState)};
//   `;
//   const html = <Html {...{ assets, state, content }} />;
//   return `<!doctype html>\n${renderToStaticMarkup(html)}`;
// };



dotenv.config();

const app = express();

app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.DATABASE, { useMongoClient: true });

app.use('/assets', express.static('assets'));  // ??
app.use('/api', apiRouter);
app.use('/api/projects', projects);
app.use('/api/languages', languages);

// app.use((req, res, next) => {
//   const location = req.url;
//   const context = {};

//   renderApp({ context, location})
//     .then(({ state: serverState, html: content }) => {
//       if(context.status)
//         res.status(context.status);

//       if(context.url) {
//         res.redirect(context.url);
//       } else {
//         res.send(
//           renderHtml({ serverState, content })     
//         );
//       }
//     })
//     .catch(next);
// });

// app.use((err, req, res, next) => {
//   const sheet = new ServerStyleSheet();
//   const content = renderToStaticMarkup(sheet.collectStyles(<Error />));
//   res.status(500).send(renderHtml({ content, sheet }));
//   console.error(err);
//   next(err);
// });

app.get('*', (req, res) => {
  const context = {};
  const appString = renderToString(
    <StaticRouter context={context}>
      <App />
    </StaticRouter>);
  
});

app.listen(port, () => {
  console.info('Express listening on port ', port);
});
