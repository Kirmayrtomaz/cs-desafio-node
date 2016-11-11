

module.exports = (app) => {
  const UserController = app.controllers.user;
  app.post('/signin/', (req, res) => {
    res.json(
      {
        request: 'signin',
      });
  });


  app.post('/signup/', (req, res) => {
    UserController.create();
  });


  app.get('/user/', (req, res) => {
    res.json({
      request: 'search',
    });
  });
};
