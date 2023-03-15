import SERVER_ENV from './server.config';

const environment = process.env.NODE_ENV || 'development';

const serverConf = SERVER_ENV[environment];

export { environment, serverConf };
