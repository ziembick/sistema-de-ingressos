const app = require('./api');

module.exports = (req, res) => {
  app(req, res);
};
