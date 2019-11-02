ENVIRONMENT=test sequelize db:drop
ENVIRONMENT=test node scripts/configureDatabase.js
ENVIRONMENT=test sequelize db:migrate
yarn jest --watch