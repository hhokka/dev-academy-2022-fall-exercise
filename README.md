# dev-academy-2022-fall-exercise
![logo](https://raw.githubusercontent.com/hhokka/dev-academy-2022-fall-exercise/111dec7357e9309b79bbe22d60f7fe140a9feddd/readme/logo-generic.svg)

With this application it is possible for users to see data of journeys made with city bikes in the Helsinki Capital area. This application shows the made journeys, all the stations and all the details of the stations.

Chosen technologies include React and Node.js with Express. I chose these because I wanted to practice my skills in these technologies.

## Configurations
The database settings are in .env file which you got by different route (if not, ask it from hans.hokka@gmail.com). Database is fully configured. Other than what is mentioned in "installation and running" there is no need to configure anything. 


## Installation and running
### Development
Clone the repository to your own device:
```
git clone https://github.com/hhokka/dev-academy-2022-fall-exercise.git
```
Install and run **backend**:
Copy .env to project root
```
cd dev-academy-2022-fall-excercise
cd backend
npm install
npm run dev
```
Install and run **frontend**:

Open new command line window
```
cd dev-academy-2022-fall-exercise
cd frontend
npm install
npm start
```
Go to address http://localhost:3000

### Production
Clone the repository to your own device:
```
git clone https://github.com/hhokka/dev-academy-2022-fall-exercise.git
```

Build **frontend** and then serve it:
```
cd dev-academy-2022-fall-exercise
cd frontend
npm install
npm run build
npm install -g serve
serve -s build
```
Start serving the **backend:**
Copy .env to project root
```
cd dev-academy-2022-fall-exercise
cd backend
npm run start
```
Go to address http://localhost:3000
### Testing

Tests are run with this command
```
cypress:open
```
## Using the application

This is the Journey list view. Here you can see all the journeys and their details.
![enter image description here](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/screenshot5.png?raw=true)

Here is the Station list. There is listed all the Departure stations.
![enter image description here](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/screenshot6.png?raw=true)

By clicking on a Departure station name in Station list you get that stations details.
![enter image description here](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/screenshot7.png?raw=true)

When you run the backend, the application validates all the .csv files and displays the result (like 'First journey dataset validated: valid')
![enter image description here](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/screenshot4.png?raw=true)


## API
Returns all journeys in database:
```
GET http://localhost:3001/api/journeys
```
Adds a journey to database:
    
    POST http://localhost:3001/api/journeys + payload
Removes all journeys in database:
    
    POST http://localhost:3001/api/journeys/reset

Returns all bikeStations in database:
    
    GET http://localhost:3001/api/bikeStations
Adds a bikeStation to database:
    
    POST http://localhost:3001/api/bikeStations + payload

Removes all bikeStations in database:
    
    POST http://localhost:3001/api/bikeStations/reset

## TODO
- Because MongoDB's quota is too small to load all the data, the application can load only one dataset. It would be good to have a paid subscription of MongoDB with a larger quota. Application also validates only one of the datasets.

## Record of working hours

| day   | time | what did I do|
| :----:|:-----| :-----|
| 1.8.22|   0,5| initialized project with Hello World|
| 1.8.22|   0,5| added .csv data files and a smaller dataset|
| 1.8.22|   0,5| configured eslint|
| 1.8.22|   1,5| replaced small-dataset.csv with a larger dataset|
| 1.8.22|   0,5| added Mongoose model for journeys|
| 1.8.22|   0,5| added index.js(express), config, logger and journeys controller|
| 1.8.22|     1| added app.js and middleware.js|
| 1.8.22|     2| added controller testing.js|
| 1.8.22| 	0,5| removed unused middleware, added capability to add journeys |
| 1.8.22|   0,5| added reset to controller journeys|
| 1.8.22|   0,5| added required:true to journey schema|
| 1.8.22| 	1,5| added validate.js, added very-small-dataset.csv|
| 1.8.22|   1,5| implemented basic validation  |
| 2.8.22| 	  2| implemented advanced validation|
| 2.8.22|     1| loading from .csv to db implemented (load.js)|
| 2.8.22|   0,5| small changes to app.js and validator.js|
| 2.8.22|	2,5| modified validator.js|
| 2.8.22|   0,5| created fronend boilerplate using cra|
| 2.8.22|   0,5| configured linter|
| 2.8.22|   1,5| showing data from database to frontend implemented|
| 2.8.22|     1| minor changes to journeys.js and App.js|
| 2.8.22|     1| added displaying data from objects, from database to frontend|
| 3.8.22|   0,5| modified mongoose schema: deleted spaces, read duration from object to variable|
| 3.8.22|	0,5| tried a solution to validate .csv, didn't work|
| 3.8.22|  0,25| modified mongoose schema: 'Departure' and 'Return' to 'departure' and 'return'|
| 3.8.22|	  1| implemented journey list view|
| 3.8.22|  0,75| added routing|
| 3.8.22|  0,25| implemented station list view|
| 3.8.22|  1,25| implemented part of single station view|
| 4.8.22|  0,25| added display return stations to single station view|
| 4.8.22|  0,5 | added functionality to read bikeStation data to database|
| 4.8.22|     2| added functionality to display station address, cleaned code|
| 4.8.22|   0,5| replaced render with createRoot|
| 4.8.22|   1,5| debugged display station address|
| 4.8.22|	0,5| modified load functions to accept file name|
| 4.8.22|   1,5| removed duplicates from station list|
| 4.8.22|  0,25| cleaned code|
| 4.8.22|     1| installed lfs, added large csv files|
| 4.8.22|     4| uncommented validation, loaded a large .csv file|
| 5.8.22|   1,5| modified validation, implemented also for bike stations|
| 5.8.22|   1,5| completed validation|
| 5.8.22|   1,5| configured cypress, added first test|
| 5.8.22|   2,5| modified first cypress test, debugged singlestation.js|
| 6.8.22|   3,5| debugged singlestation.js, wrote one test more|
| 6.8.22|     1| modified tests|
| 7.8.22|     1| added some documentation|
| 7.8.22|  0,25| added more documentation|
| 7.8.22|  0,25| added a screenshot|
| 7.8.22|   0,5| added more screeshots|
| 7.8.22|  0,25| added more screeshots #4|
| 7.8.22|  0,25| added more screeshots #5|
| 7.8.22|   0,5| modified readme.md|
| 7.8.22|  0,25| modified code for turning it in|
| 8.8.22|   5,5| debugging building and installing|
| 8.8.22|  0,25| debugging building and installing #2|
| 8.8.22|  0,25| debugging installing|
| 8.8.22|  1,25| added remove all data when starting app| 
| 9.8.22| 10,75| tested loading of all the data (fail)|
| 9.8.22|  0,25| modified app.js to load and validate only one dataset|
| 9.8.22|     7| tested loading large data (fail)|
| 9.8.22|     2| modified app.js to validate all datasets and to load two datasets|
|10.8.22|	  8| tested loading only one full-size journey (fail)
|10.8.22|     4| tested validating and loading only on journey (success)|
|10.8.22|  0,25| cleaned app.js for return|
|11.8.22|  0,25| corrected minor typo
|12.8.22|  0,25| disabled eslint in cypress config file|
|12.8.22|  0,25| removed unused files|
|12.8.22|  0,25| minor change to readme.md|
|12.8.22|  0,25| fixed minor typo|
| total | 85,75| | 
