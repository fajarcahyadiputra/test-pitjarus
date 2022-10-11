### Server Installation Setup

##### 1. Install NodeJS

Install node JS **14.17.\***, You can read the installation guide in [https://nodejs.org/en/download](https://nodejs.org/en/download/)

##### 2. create database

then create your first Database name "dev_test"

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

````bash
NODE_ENV=development
TIME_ZONE=Asia/Jakarta

##### 5. Install Sequelize CLI

Install sequelize ORM CLI to create or run migration, seeder, etc

```bash
$ npm install --save-dev sequelize-cli
````

to see sequelize command you can type

```bash
$ npx sequelize --help
```

##### 5. Import database

import to database

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

HOME

# http://localhost:3000
