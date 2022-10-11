### Server Installation Setup

##### 1. Install NodeJS

Install node JS **14.17.\***, You can read the installation guide in [https://nodejs.org/en/download](https://nodejs.org/en/download/)

##### 2. create database

then create your first Database name "test_rolling_glory"

##### 3. Install Packages

Move to root project directory and run:

```bash
$ npm install
```

##### 4. Create .env File

Copy env.example to .env

```bash
$ cp env.example .env
```

Setup your database settings

```bash
NODE_ENV=development
TIME_ZONE=Asia/Jakarta

##### 5. Install Sequelize CLI

Install sequelize ORM CLI to create or run migration, seeder, etc

```bash
$ npm install --save-dev sequelize-cli
```

to see sequelize command you can type

```bash
$ npx sequelize --help
```

###### Running Migration

Run migration by typing:

```bash
$ npx sequelize-cli db:migrate
```

###### Running Seeder

Run seeder by typing:

```bash
$ npx sequelize-cli db:seed:all
```

##### 6. Install PM2 Process Manager

```bash
$ npm install pm2@latest -g
# or
$ yarn global add pm2
```

to start pm2 process run

```bash
$ pm2 start src/index.js
# Or start for development
$ pm2 start src/index.js --watch
```

##### 7. Finish

endpoint: 

Auth

```bash
# http://localhost:300/login
```

Activity

```bash
# POST : http://localhost:300/activity-groups
# PATCH : http://localhost:300/activity-groups/{id}
# GET : http://localhost:300/activity-groups/{id}
# GET : http://localhost:300/activity-groups
# DELETE : http://localhost:300/activity-groups
```

Todo

```bash
# POST : http://localhost:300/todo-items
# PATCH : http://localhost:300/todo-items/{id}
# GET : http://localhost:300/todo-items/{id}
# GET : http://localhost:300/todo-items
# DELETE : http://localhost:300/todo-items
```

User

```bash
# POST : http://localhost:300/user
# PATCH : http://localhost:300/user/{id}
# PUT : http://localhost:300/user/{id}
# GET : http://localhost:300/user/{id}
# GET : http://localhost:300/user
```

Now setup is finished now you can login with default user or create new user:

Login

```bash
# http://localhost:300/login
```
Request body
```bash
# email: admin@gmail.com
# password: 12345678
```
Response : 

```bash
 {
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmMDRjOTk4LTRhYjUtNDM3NC1iNjkxLWI4YWJhYzA3MmFkYyIsImlhdCI6MTY2MDY3NjU1NywiZXhwIjoxNjYwNjgwMTU3fQ.kgR8mlEUmEW8UnjhkYWolEEAPPBLiVSSGoQU0JH0MmY"
    }
```
and use token for create, delete, update action. Send it with headers name "authorization"

postman collection : 

https://www.getpostman.com/collections/9324e1e710d6b0e029dc




