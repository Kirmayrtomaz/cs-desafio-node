
const Auth  = app.controllers.auth;


import sleep from 'sleep';

describe('Validando Controllers de autenticação',()=>{



it('VerifyToken: Verificar sessão inválida', ()=> {
sleep.sleep(3);
let auth = Auth.verifyToken(tokenUser);
    expect(auth).not.be.undefined;
    expect(auth).to.be.equal('Sessão inválida');
  
  })




})
