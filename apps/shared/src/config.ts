export const config = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/asktris',
  SERVER_PORT: process.env.SERVER_PORT || '9000',
  API_PORT: process.env.SERVER_PORT || '9001',
  JWT_KEY: process.env.JWT_KEY || 'secret_key',
};
