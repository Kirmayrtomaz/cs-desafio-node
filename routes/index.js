
module.exports = (app) => {
  const UserController = app.controllers.user;
  const helper = app.helpers.helper;




/**
  @api {get} / Verificar status da API 
  @apiVersion 1.0.0
  @apiDescription Acesso inicial para verificar se a API está funcionando perfeitamente
  @apiPermission none
  @apiGroup index 
  @apiSuccess {String} app Informações do API
  @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
        {
          api:"Desafio Concrete Solutions API REST NODE"
        }
  
  @apiSampleRequest https://cs-desafio-node-kirma.herokuapp.com/
 
    
    
*/
  
  
  app.get('/', (req, res, next) => {

    
    //console.log(req.headers['authorization'].replace('Bearer ',""))
    if(false == false){
      next();
    }else{
     res.json({'api':'Deu merda'});
     
    
    }
  });

  
  app.get('/', (req, res) => {
    res.json({ api: 'Desafio Concrete Solutions API REST NODE' });
  });
};
