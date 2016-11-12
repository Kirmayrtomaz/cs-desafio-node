const Auth  = app.controllers.auth;


describe('Validando Controllers de autenticação',()=>{


  it('CreateToken: Criando Token ', ()=> {
    let user = 'kirma';    
    let auth = Auth.createToken(user);
    tokenUser = auth;
    expect(auth).not.be.undefined;
    expect(auth).to.be.a('string');
    
  
  })


  it('CreateToken: Sem usuário', ()=> {
    let user = null;    
    let auth = Auth.createToken(user);
    expect(auth).be.false;
    
  
  })

it('VerifyToken: Verificar id do usuário', ()=> {

    let auth = Auth.verifyToken(tokenUser);
    expect(auth).not.be.undefined;
    expect(auth).to.be.equal('kirma');
    
  
  })



it('VerifyToken: Verificar Token inválido', ()=> {

    let auth = Auth.verifyToken('TokenInválido');
    console.log(auth)
    expect(auth).not.be.undefined;
    expect(auth).to.be.equal('Não Autorizado');
    
  })



})
