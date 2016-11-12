define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Verificar status da API",
    "version": "1.0.0",
    "description": "<p>Acesso inicial para verificar se a API está funcionando perfeitamente</p>",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "index",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "app",
            "description": "<p>Informações do API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    api:\"Desafio Concrete Solutions API REST NODE\"\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://cs-desafio-node-kirma.herokuapp.com/"
      }
    ],
    "filename": "routes/index.js",
    "groupTitle": "index",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Realização da Busca do usuário na API autenticado",
    "group": "user",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer",
            "description": "<p>{token} Token de autorização de acesso</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "User - 200": [
          {
            "group": "User - 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuario</p>"
          },
          {
            "group": "User - 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuario</p>"
          },
          {
            "group": "User - 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuario</p>"
          },
          {
            "group": "User - 200",
            "type": "Array",
            "optional": false,
            "field": "telefones",
            "description": "<p>Lista de Telefone</p>"
          },
          {
            "group": "User - 200",
            "type": "String",
            "optional": false,
            "field": "telefones.ddd",
            "description": "<p>DDD do telefone</p>"
          },
          {
            "group": "User - 200",
            "type": "String",
            "optional": false,
            "field": "telefones.numero",
            "description": "<p>Numero Numero de telefone do usuário</p>"
          },
          {
            "group": "User - 200",
            "type": "String",
            "optional": false,
            "field": "data_criacao",
            "description": "<p>data de criacao do usuário</p>"
          },
          {
            "group": "User - 200",
            "type": "String",
            "optional": false,
            "field": "data_atualizacao",
            "description": "<p>data da última atualização do usuário</p>"
          },
          {
            "group": "User - 200",
            "type": "String",
            "optional": false,
            "field": "ultimo_login",
            "description": "<p>data do ultimo login do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"id\": \"213123123\",\n    \"nome\": \"Kirma\",\n    \"email\": \"tomaz.kirmayr@gmail.com\",\n    \"telefones\":[\n      {\n        \"numero\": \"1123456\",\n        \"ddd\": \"92\"\n      }\n    ]\n    \"data_criacao\": \"2016-11-11T16:06:06:3000Z\",\n    \"data_atualizacao\": \"2016-11-11T16:06:06:3000Z\",\n    \"ultimo_login\": \"2016-11-11T16:06:06:3000Z\",\n    \"token\": \"123456\"\n\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>campos enviados são obrigatórios</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>O usuário com esse email já foi cadastrado no sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erros-response",
          "content": "\nHTTP/1.1 401 Authorization Required\n  {\n      mensagem:\"Não autorizado\"\n  }\n\nHTTP/1.1 400 Authorization Required\n  {\n      mensagem:'Sessão inválida'\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "user",
    "name": "GetUser"
  },
  {
    "type": "post",
    "url": "/signin/",
    "title": "Realização de Login do usuário",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>senha do usuário</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "fields": {
        "Login realizado com sucesso - 200": [
          {
            "group": "Login realizado com sucesso - 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuario</p>"
          },
          {
            "group": "Login realizado com sucesso - 200",
            "type": "String",
            "optional": false,
            "field": "data_criacao",
            "description": "<p>data de criacao do usuário</p>"
          },
          {
            "group": "Login realizado com sucesso - 200",
            "type": "String",
            "optional": false,
            "field": "data_atualizacao",
            "description": "<p>data da última atualização do usuário</p>"
          },
          {
            "group": "Login realizado com sucesso - 200",
            "type": "String",
            "optional": false,
            "field": "ultimo_login",
            "description": "<p>data do ultimo login do usuário</p>"
          },
          {
            "group": "Login realizado com sucesso - 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de acesso da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"id\": \"213123123\",\n    \"data_criacao\": \"2016-11-11T16:06:06:3000Z\",\n    \"data_atualizacao\": \"2016-11-11T16:06:06:3000Z\",\n    \"ultimo_login\": \"2016-11-11T16:06:06:3000Z\",\n    \"token\":\"123456\"\n\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "camposInvalidos",
            "description": "<p>Usuário e/ou senha inválidos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erros-response",
          "content": "\nHTTP/1.1 401\n  {\n    \"mensagem\":'Usuário e/ou senha inválidos',\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "user",
    "name": "PostSignin"
  },
  {
    "type": "post",
    "url": "/signup/",
    "title": "Realização de cadastro do usuário",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nome",
            "description": "<p>Nome do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senha",
            "description": "<p>senha do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "telefones",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefones.ddd",
            "description": "<p>DDD da cidade do numero de telefone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefones.numero",
            "description": "<p>numero de telefone do usuário</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Cadastro realizado com sucesso - 201": [
          {
            "group": "Cadastro realizado com sucesso - 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id do usuario</p>"
          },
          {
            "group": "Cadastro realizado com sucesso - 201",
            "type": "String",
            "optional": false,
            "field": "data_criacao",
            "description": "<p>data de criacao do usuário</p>"
          },
          {
            "group": "Cadastro realizado com sucesso - 201",
            "type": "String",
            "optional": false,
            "field": "data_atualizacao",
            "description": "<p>data da última atualização do usuário</p>"
          },
          {
            "group": "Cadastro realizado com sucesso - 201",
            "type": "String",
            "optional": false,
            "field": "ultimo_login",
            "description": "<p>data do ultimo login do usuário</p>"
          },
          {
            "group": "Cadastro realizado com sucesso - 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token de acesso da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 saved\n {\n    \"id\": \"213123123\",\n    \"data_criacao\": \"2016-11-11T16:06:06:3000Z\",\n    \"data_atualizacao\": \"2016-11-11T16:06:06:3000Z\",\n    \"ultimo_login\": \"2016-11-11T16:06:06:3000Z\",\n    \"token\":\"123456\"\n\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "camposInvalidos",
            "description": "<p>Os campos enviados são obrigatórios</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "usuarioCadastro",
            "description": "<p>O usuário com esse email já foi cadastrado no sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erros-response",
          "content": "\nHTTP/1.1 400 Bad Request\n  {\n      mensagem:\"Insira corretamente os campos obrigatórios\"\n  }\n\nHTTP/1.1 400 Forbidden\n  {\n      mensagem:'Email já cadastrado no sistema',\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "user",
    "name": "PostSignup"
  }
] });
