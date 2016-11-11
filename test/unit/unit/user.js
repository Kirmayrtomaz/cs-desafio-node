
const UserController = app.controllers.user;

describe('Validando Controller: User',()=>{


  before(async () => {
    
      let UserModel = app.models.user;

      let remover = await UserModel.remove({})


  });
  it('Verificando se cadastro function', async ()=> {

    let cadastroUser = {
      nome:'kirma',
      email:'tomaz.kirmayr@gmail.com',
      senha:'123456',
      id:'123456',
      telefone:[
        {
          ddd:'92',
          numero:'992134199'
        },
        {
          ddd:'01',
          numero:'999999999'
        
        }
      ]
  
    }

    let result = { __v: 0,
        nome: 'kirma',
        email: 'tomaz.kirmayr@gmail.com',
        senha: '123456',
        id: '123456',
        _id:'5825ec8671c0d9379c624166',
        data_atualizacao: '2016-11-11T16:06:30.041Z',
        data_criacao: '2016-11-11T16:06:30.041Z',
        telefone: 
         [ { numero: '992134199', ddd: '92' },
        { numero: '999999999', ddd: '01' } ] };
    

    let salvo = await  UserController.save(cadastroUser);

    expect(salvo).not.be.undefined;
    expect(salvo).to.be.an('object');
    
    console.log(salvo.nome)
    expect(salvo.nome).to.be.equal('kirma')
    expect(salvo.email).to.be.equal('tomaz.kirmayr@gmail.com')
    expect(salvo.id).to.be.equal('123456')
    expect(salvo.senha).to.be.equal('123456')
     
  
  })

  it('Usuário existe',async ()=>{
    let user = {
      email: "tomaz.kirmayr@gmail.com" 
    }
    let resultado = await UserController.findUser(user);
  
    expect(resultado).to.be.true;
  })
  
  it('Usuário não existe',async ()=>{
    let user = {
      email: "usuarioNovo@gmail.com" 
    }
    let resultado = await UserController.findUser(user);
  
    expect(resultado).to.be.false;
  })

})
