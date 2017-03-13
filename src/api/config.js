import repos from './resources/repos';

const jsonParser = (response) => JSON.parse(response.data);

const config = {
  host : 'https://api.github.com',
  options : {
    parseResponse : jsonParser
  },
  resources : [
    repos
  ]
};

export default config;