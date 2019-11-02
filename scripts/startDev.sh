ENVIRONMENT=development node scripts/configureDatabase.js
ENVIRONMENT=development sequelize db:migrate
ENVIRONMENT=development nodemon index.js