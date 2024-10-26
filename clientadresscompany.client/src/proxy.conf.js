const { env } = require('process');
const { config } = require('dotenv');
config();

const target = env.ASPNETCORE_HTTPS_PORT ? `http://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7271';

const PROXY_CONFIG = [
  {
    context: [
      "/Clients",
      "/Address",
    ],
    target,
    secure: false
  }
]

console.log(PROXY_CONFIG);


module.exports = PROXY_CONFIG;
