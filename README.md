## Welcome!

Hello, this is a mono repo project, here you can create a company and its employees in the system. Backend follows Clean Architecture with NodeJS and Frontend is in ReactJS.

### How to start it
```
- Create .env file inside folders 'backend' and 'frontend', follow .env.example for each one.
- Open Docker
- Navigate to backend folder, with the env variable properly filled, run the command "docker-compose up -d"
- run "yarn run start:dev"
- Navigate to the frontend folder, with the environment variables properly filled in run the 'yarn dev' command
```


### Tests
Unit tests

```
yarn run test
```

### Requests

POST /company

Creates a Company record, a Body must be informed, which may or may not contain an Employee key with an array of Employees
![image](https://user-images.githubusercontent.com/68877260/235815183-70356ff8-403f-422c-bfcd-1605431f36f0.png)

GET /company

Brings all records of Companies with all their Collaborators
![image](https://user-images.githubusercontent.com/68877260/235815262-36dc7213-9252-49b5-a105-2978514cc24b.png)

Creates the relationship between an Employee and the Company, follow the body below. It is necessary to inform the ID of a Company
POST /employee
![image](https://user-images.githubusercontent.com/68877260/235815411-54ff4593-8c1f-49f1-973a-a0f5d5ee3cec.png)

