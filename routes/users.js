

module.exports = (app) => {
  const UserController = app.controllers.user;
  
  /**
    * @api {post} /signin/ login na API 
    *
    * @apiGroup user
    * @apiParam {String} Email Email do usuário
    * @apiParam {String} senha senha do usuário
    *
    * @apiSuccess (Login realizado com sucesso - 200) {String} id id do usuario
    * @apiSuccess (Login realizado com sucesso - 200) {String} data_criacao data de criacao do usuário
    * @apiSuccess (Login realizado com sucesso - 200) {String} data_atualizacao data da última atualização do usuário
    * @apiSuccess (Login realizado com sucesso - 200) {String} ultimo_login data do ultimo login do usuário
    * @apiSuccess (Login realizado com sucesso - 200) {String} token token de acesso da API
    * 
    * @apiSuccessExample {json} Success-Response:
    *       HTTP/1.1 200 ok
    *        {
    *           "id": "213123123",
    *           "data_criacao": "2016-11-11T16:06:06:3000Z",
    *           "data_atualizacao": "2016-11-11T16:06:06:3000Z",
    *           "ultimo_login": "2016-11-11T16:06:06:3000Z",
    *           "token":"123456"
    *
    *         }
    *
    * @apiError (4xx) camposInvalidos Usuário e/ou senha inválidos
    *
    * @apiErrorExample {json} Erros-response
    *
    *         HTTP/1.1 401
    *           {
    *             "mensagem":'Usuário e/ou senha inválidos',
    *           }
    *
    *
    * */
 
 
  
  app.post('/signin/', (req, res) => {
    res.json(
      {
        request: 'signin',
      });
  });
  


  /**
    * @api {post} /signup/ Register user to API 
    *
    * @apiGroup user
    * @apiParam {String} Nome Nome do usuário
    * @apiParam {String} Email Email do usuário
    * @apiParam {String} senha senha do usuário
    * @apiParam {Array} telefones 
    * @apiParam {String} telefones.ddd DDD da cidade do numero de telefone
    * @apiParam {String} telefones.numero  numero de telefone do usuário
    * 
    *
    * @apiSuccess (Cadastro realizado com sucesso - 201) {String} id id do usuario
    * @apiSuccess (Cadastro realizado com sucesso - 201) {String} data_criacao data de criacao do usuário
    * @apiSuccess (Cadastro realizado com sucesso - 201)  {String} data_atualizacao data da última atualização do usuário
    * @apiSuccess (Cadastro realizado com sucesso - 201)  {String} ultimo_login data do ultimo login do usuário
    * @apiSuccess (Cadastro realizado com sucesso - 201)  {String} token token de acesso da API
    * 
    * @apiSuccessExample {json} Success-Response:
    *       HTTP/1.1 201 saved
    *        {
    *           "id": "213123123",
    *           "data_criacao": "2016-11-11T16:06:06:3000Z",
    *           "data_atualizacao": "2016-11-11T16:06:06:3000Z",
    *           "ultimo_login": "2016-11-11T16:06:06:3000Z",
    *           "token":"123456"
    *
    *         }
    *
    * @apiError (400) camposInvalidos Os campos enviados são obrigatórios
    * @apiError (400) usuarioCadastro O usuário com esse email já foi cadastrado no sistema
    *
    * @apiErrorExample {json} Erros-response
    *
    *         HTTP/1.1 400 Bad Request
    *           {
    *               mensagem:"Insira corretamente os campos obrigatórios"
    *           }
    *
    *         HTTP/1.1 400 Forbidden
    *           {
    *               mensagem:'Email já cadastrado no sistema',
    *           }
    *
    *
    * */

  app.post('/signup/', (req, res) => {
    UserController.create();
  });


  /**
    * @api {get} /user/ Buscar usuário na API 
    *
    * @apiGroup user
    * 
    * @apiHeader {String} Bearer{token} Token de autorização de acesso
    *
    *
    * @apiSuccess (User - 200) {String} id id do usuario
    * @apiSuccess (User - 200) {String} nome Nome do usuario
    * @apiSuccess (User - 200) {String} email Email do usuario
      
    * @apiSuccess (User - 200) {Array} telefones Lista de Telefone
    * @apiSuccess  (User - 200) {String} telefones.ddd DDD do telefone
    * @apiSuccess (User - 200) {String} telefones.numero Numero Numero de telefone do usuário
    * @apiSuccess (User - 200) {String} data_criacao data de criacao do usuário
    * @apiSuccess (User - 200) {String} data_atualizacao data da última atualização do usuário
    * @apiSuccess (User - 200) {String} ultimo_login data do ultimo login do usuário
    * 
    * @apiSuccessExample {json} Success-Response:
    *       HTTP/1.1 200 ok
    *        {
    *           "id": "213123123",
    *           "nome": "Kirma",
    *           "email": "tomaz.kirmayr@gmail.com",
    *           "telefones":[
    *             {
    *               "numero": "1123456",
    *               "ddd": "92"
    *             }
    *           ]
    *           "data_criacao": "2016-11-11T16:06:06:3000Z",
    *           "data_atualizacao": "2016-11-11T16:06:06:3000Z",
    *           "ultimo_login": "2016-11-11T16:06:06:3000Z",
    *           "token": "123456"
    *
    *         }
    *
    * @apiError (400) InvalidToken campos enviados são obrigatórios
    * @apiError (400) SessionExpired O usuário com esse email já foi cadastrado no sistema
    *
    * @apiErrorExample {json} Erros-response
    *
    *         HTTP/1.1 401 Authorization Required
    *           {
    *               mensagem:"Não autorizado"
    *           }
    *
    *         HTTP/1.1 400 Authorization Required
    *           {
    *               mensagem:'Sessão inválida'
    *           }
    *
    *
    * */
  app.get('/user/:id', (req, res) => {
    res.json({
      request: 'search',
    });
  });
};
