import mongoose from 'mongoose';
import md5 from 'blueimp-md5';
module.exports  =(app) =>{


  async function create (req, res) {
  
    let user = req.body;
    let http = app.helpers.helper.http_status;
    let auth = app.controllers.auth;
    let UserModel =  app.models.user;
    
    

    req.checkBody("email", "Insira um email válido").isEmail();
    req.checkBody("nome", "Insira um email válido").notEmpty();
    req.checkBody("senha", "Insira um email válido").notEmpty();
  
    let errors = req.validationErrors();
    if(errors){
      res.status(http.BAD_REQUEST);
      res.json({
          mensage:"Insira corretamente os campos obrigatórios"
      });

    }

    /**
      * verifica se o usuario existe
      * */
    
    let verifyUserExist = await this.findUser(user);
   console.log(verifyUserExist) 
    if(verifyUserExist){
      res.status(http.BAD_REQUEST);
      res.json({
          mensage:"E-mail já existente"
      });
    }
    

    /**
      * cadastra usuário
      * 
      * */
    user.id = app.helpers.helper.guid();
    user.senha = md5(user.senha);
    user.token = auth.createToken(user.id);

    let create = await this.save(user);
    let userCreated = 
      {
        id: create.id,
        data_criacao: create.data_criacao,
        data_atualizacao: create.data_atualizacao, 
        ultimo_login: create.ultimo_login,
        token: create.token 
      }
  
    res.status(http.CREATED);
    res.json(userCreated);


  }
  
  const findUser = (user)=>{
   
    let UserModel =  app.models.user;
      
      return UserModel
          .find({'email':user.email})
          .exec()
          .then((user)=>{
          let exist = false;
        
          //usuário existe?
          if(user && user.length > 0 ){
        
            exist = true;
      
          }
          return exist;
    
    
     },(error)=>{
      });
  }
  
  const save = (user) =>{
    let UserModel =  app.models.user;
      return   UserModel
        .create(user)
        .then((userSaved)=>{
          
          return userSaved;
        
      })
   }

  return {
    create,
    save,
    findUser
  }
};
