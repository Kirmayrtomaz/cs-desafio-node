
module.exports = (app) => {
  const UserController = app.controllers.user;
  const helper = app.helpers.helper;




/**
  @api {get} / Vefificar status da API 
  @apiDescription Acesso inicial para verificar se a API está funcionando perfeitamente
  @apiPermission none
  @apiSampleRequest https://cs-desafio-node-kirma.herokuapp.com/
 
    
    
*/
  
  app.get('/', (req, res) => {
    res.json({ api: 'works' });
  });
};
