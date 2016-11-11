import mongoose from 'mongoose';
module.exports  =(app) =>{


  async function create (req, res) {
  

  let UserModel =  app.models.user;
        let verifyUserExist = await this.findUser(user);
      
    if(!verifyUserExist){
      let create = await this.save(user);
    }else{
     
      
    }
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
