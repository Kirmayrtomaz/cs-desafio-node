
module.exports = (app) => {
  const UserController = app.controllers.user;
  const helper = app.helpers.helper;




/**
  @api {get} / Vefificar status da API 
  @apiDescription Acesso inicial para verificar se a API está funcionando perfeitamente
  @apiPermission none
  
  @apiSuccess {String} app Informações do API
  @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
        {
          api:"Desafio Concrete Solutions API REST NODE"
        }
  
  @apiSampleRequest https://cs-desafio-node-kirma.herokuapp.com/
 
    
    
*/
  
  app.get('/', (req, res) => {
    res.json({ api: 'works' });
  });
};
