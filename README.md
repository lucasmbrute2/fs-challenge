# Boas vindas

 Olá, esse é um projeto mono repo, aqui você poderá criar uma empresa e seus funcionários no sistema. O backend segue a Clean Architecture com NodeJS e o Frontend está em ReactJS.

### Como iniciar o projeto
```
- Crie um arquivo .env dentro das pastas 'backend' e 'frontend', siga os .env.example
- Abra o Docker
- Navegue até a pasta backend, e com as variáveis de ambiente devidamente preenchidas rode o comando "docker-compose up -d"
- Rode o comando 'yarn run start:dev'
- Navegue até a pasta frontend, e com as variáveis de ambiente devidamente preenchidas rode o comando 'yarn dev'
```


### Testes
Estão presentes testes unitários no Backend

```
yarn run test
```

### Requisições

POST /company

Cria o registro de uma Empresa, deve ser informado um Body, podendo conter, ou não uma chave Employee com um array de Colaboradores
![image](https://user-images.githubusercontent.com/68877260/235815183-70356ff8-403f-422c-bfcd-1605431f36f0.png)

GET /company

Trás todos os registros de Empresas com todos seus Colaboradores
![image](https://user-images.githubusercontent.com/68877260/235815262-36dc7213-9252-49b5-a105-2978514cc24b.png)

Cria a relação entre um Colaborador e Empresa, siga o body abaixo. É necessário informar o ID de uma Empresa
POST /employee
![image](https://user-images.githubusercontent.com/68877260/235815411-54ff4593-8c1f-49f1-973a-a0f5d5ee3cec.png)

