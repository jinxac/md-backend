# Usage
1. Clone the repository
2. Run ```yarn install``` to install packages
3. The file config/config.json has information(id, password, database name) related to database. Please update this file is required to setup your db. For now, values under development object are taken.
4. Once mysql is configured, run ```yarn migrate:configure_db``` to setup database.
5. Run ```yarn migrate:sequelize``` to create tables.
6 Run ```yarn start`` to start the server.