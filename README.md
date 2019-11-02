# Usage

1. Clone the repository

2. Run `yarn install` to install packages

3. The file config/[env].env has information related to database configuration related to local, development and production. The current credentials for the database are set according to my local. If required, you can change the variables inside [env].env file to make it work

4. Run `yarn start` to configure the database, sync latest migrations and start the server.

5. Run `yarn test` to setup test environment to run the test cases.

# Design

1. **Models**
		In models, we have a single model *Marker* which saves the info related to the particular. We have 6 columns in *Marker* model.

	1.  **id** - Primary key of the model
	2. **name** -  Custom name for the marker location
	3. **description** - Full Address coming from the google place api.
	4.  **place_id** - Unique place id for each marker. This is mainly used in place api to fetch the location for each location
	5.  **lng** - Longitude. This is use to show marker location on the map
	6. **lat** - Latitude. This is used to show location on the map

2. **Controllers**:
	In controllers, we have a *Marker* controller. We have API's for following:-
	1. **/GET** - Get list of all makers
	2. **/POST/** - Create a new marker
	3. **/PUT/:id** - Update a particular marker
	4. **/DELETE/:id**- Delete a particular marker

3.  **Test Cases**:
	The test cases cover following:-
	1. Models
	2. Controllers

# Points to take care of

1. I was facing an issue with mysql, [this](https://github.com/mysqljs/mysql/issues/1574#issuecomment-388464975) answer helped.