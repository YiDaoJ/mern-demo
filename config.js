const merge = require('lodash/merge');

const url = `http://${process.env.HOST}:${process.env.PORT}`;

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiEnv: process.env.API_ENV || 'local',
    basename: process.env.PUBLIC_PATH,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8040,
    apiUrl: `${url}/api`
  }
};

module.exports = merge(config.all, config[config.all.env]);