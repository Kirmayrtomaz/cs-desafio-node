module.exports = (app) => {
  app.post('/signin/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(
      {
        request: 'signin',
      });
  });


  app.post('/signup/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(
      {
        request: 'signup',
      });
  });


  app.get('/user/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({
      request: 'search',
    });
  });
};
