

# cs-desafio-node

[![Build Status](https://api.travis-ci.org/Kirmayrtomaz/cs-desafio-node.svg?branch=master)](https://travis-ci.org/Kirmayrtomaz/cs-desafio-node) [![coverage](https://codecov.io/gh/Kirmayrtomaz/cs-desafio-node/branch/master/graph/badge.svg)](https://codecov.io/gh/Kirmayrtomaz/cs-desafio-node) [![License](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE) [![Dependences](https://david-dm.org/kirmayrtomaz/cs-desafio-node.svg)](https://david-dm.org/kirmayrtomaz/cs-desafio-node) [![Dev Dependences](https://david-dm.org/kirmayrtomaz/cs-desafio-node/dev-status.svg)](https://david-dm.org/kirmayrtomaz/cs-desafio-node/dev-status)
[![Asserts](https://assertible.com/apis/7f23dc6b-b82a-44da-adbf-b0f0e0239410/status?api_token=5xv5naRH2jHz6pf8&cache=1478960362905)](https://assertible.com/dashboard#/services/7f23dc6b-b82a-44da-adbf-b0f0e0239410)

Desafio Concrete Solutions  REST API NODE

# Desafio node.js Concrete Solutions

Crie um aplicativo backend que exporá uma API RESTful de criação de sing up/sign in.


## Instalação do projeto 

```
npm install

```


## Execução do projeto 

```
npm start

```

## Sobre desenvolvimento


* Para utilização de Task Runner, optei pelo NPM SCRIPTS


* O projeto functiona com  [TRAVIS ](https://travis-ci.org/Kirmayrtomaz/cs-desafio-node) para que fazer os testes de integração e para fazer o Deploy automáticamente no [HEROKU ](https://cs-desafio-node-kirma.herokuapp.com/) caso esteja tudo ok

* o banco de dados que estou utilizando é o MongoDB

* Crei também uma documentação  [Documentação da API](http://kirmayrtomaz.github.io/cs-desafio-node/) está no Github pages

* O projeto também possui testes unitários e testes de integração porém não consegui terminar a cobertura dele a tempo



## Rotas

Cadastrar no sistema
```
POST https://cs-desafio-node-kirma.herokuapp.com/signup/
```

Login  no sistema
```
POST https://cs-desafio-node-kirma.herokuapp.com/signin/
```


Buscar usuario

```
HEADER Authorization Berear {token}

GET https://cs-desafio-node-kirma.herokuapp.com/user/:id/
```








