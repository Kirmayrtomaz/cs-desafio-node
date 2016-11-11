
module.exports = (app) => {
  const UserController = app.controllers.user;
  const helper = app.helpers.helper;

  app.get('/', (req, res) => {
    res.json({ api: 'works' });
  });
};
