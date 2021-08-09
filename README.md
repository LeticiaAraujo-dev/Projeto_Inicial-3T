# Sobre a equipe

  Matheus David :
  
    - Responsavel pelo front-end e P.O da equipe
    - GitHub username: MatheusDavidDev
    
  Letícia Araujo :
  
    - Responsavel pelo back-end e Scrum Master da equipe
    - GitHub username: LeticiaAraujo-dev
    
  Leandro Rangel :
  
    - Responsavel pelo back-end relacionado ao login
    - GitHub username: leandroairzone
 

# Tecnologias utilizadas

- HTML
- CSS
- JS
- NodeJS
- Figma
- C#
- Git
- SQL Server
- Visual Studio Code
- Visual Studio 2019


# Configurações para executar a aplicação

1. Clonar o código na maquina desejada atrávez do git 

2. Abrir o SQL Server da maquina

3. Executar o DDL e DML encontrado na pasta "back-end/SenaiMateriais_SQL/" no SQL Server

4. Abrir a solução da API encontrada em "back-end/SenaiMateriais_API/SenaiMateriais/"

5. Alterar o SMContext para o nome e senha da maquina usada

6. Excutar a API

7. Instalar o pacode nodeJS na pasta "front-end/SenaiMateriais_nodeJS/senaimateriais/" atravéz do comando "npm install" no windows shell

8. Excutar o nodeJS atrávez do comando "npm start"

# Instruções dadas do projeto 
Projeto da primeira semana 3º de Desenvolvimento de Sistemas

Criar um Sistema para gerenciar o patrimônio de uma escola.(backend, web e/ou mobile)

Fazer um fork no repositório do github:

https://github.com/senai-desenvolvimento/projeto-individual-3t

## Cadastro de Sala
  
  Criar um cadastro da empresa com os seguintes campos:
  - Andar;
  - Nome;
  - Metragem da sala
  - Todos os campos são de preenchimento obrigatório.

## Cadastro de Equipamento
  
  Criar um cadastro de equipamentos com os seguintes campos:
  - Marca;
  - Tipo equipamento(mobiliário, informática, eletroeletrônico, ...);
  - Numero de Serie
  - Descricao;
  - Número do patrimônio.
  - Ativo/Inativo
  - Todos os campos são de preenchimento obrigatório.
  
## Funcionalidades
  
  - Sala: CRUD;
  - Equipamento: CRUD;
  - Controle de entrada e saída de equipamento(interno, externo).
   
## Requisitos

  - Modelagem de dados;
  - É necessário o usuário estar autenticado no sistema
  - Implementar Swagger
  - O retorno deverá ser em formato JSON;
  - Requisições GET, POST, PUT ou DELETE, conforme a melhor prática;
  - A persistência dos dados pode ser realizada da maneira que preferir;
  - Criar um  README do projeto descrevendo as tecnologias utilizadas, chamadas dos serviços e configurações necessário para executar a aplicação.

## Ganha mais pontos

  - Desenvolver utilizando TDD;
  - Criar página de relatório de entrada e saída;
  - Dashboard com informações de quantidade de salas, quantidade de equipamentos e gráfico de entrada e saída diário

## Submissão
  
  Crie um fork do teste para acompanharmos o seu desenvolvimento através dos seus commits.

