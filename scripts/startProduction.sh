ENVIRONMENT=production node scripts/configureDatabase.js
ENVIRONMENT=production sequelize db:migrate
ENVIRONMENT=production nodemon index.js