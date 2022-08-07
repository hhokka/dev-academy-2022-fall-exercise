# dev-academy-2022-fall-exercise !
![logo](https://raw.githubusercontent.com/hhokka/dev-academy-2022-fall-exercise/111dec7357e9309b79bbe22d60f7fe140a9feddd/readme/logo-generic.svg)
With this application it is possible for users to see data of journeys made with city bikes in the Helsinki Capital area. 

## Installation and running

Clone the repository to your own device
```
git clone https://github.com/hhokka/dev-academy-2022-fall-exercise.git
```
Install and run backend
```
cd dev-academy-2022-fall-excercise/backend
npm install
npm start
```
Install and run frontend
```
cd dev-academy-2022-fall-exercise/frontend
npm install
npm start
```
Go to address http://localhost:3000


### Testing

Tests are run with this command
```
cypress:open
```
### Using the application
![alt text](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/screenshot1.png?raw=true)

![alt text](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/screenshot2.png?raw=true)

![alt text](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/screenshot3.png?raw=true)
### API

    GET http://localhost:3001/api/journeys
Returns all journeys in database
    
    POST http://localhost:3001/api/journeys + body
Adds a journey to database
    
    POST http://localhost:3001/api/journeys/reset
Removes all journeys in database
    
    GET http://localhost:3001/api/bikeStations
Returns all bikeStations in database
    
    POST http://localhost:3001/api/bikeStations + body
Adds a bikeStation to database
    
    POST http://localhost:3001/api/bikeStations/reset
Removes all bikeStations in database

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
| total | 49,50| | 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MDgxNDY3NzksMzM2MDU2NjEzLDE4Nj
QyMzQwNTQsNTYzNzY3MDkwLC0xMDM1MDExNjExLDE5NjM3NTY4
ODMsNjQ1NjczMzE3LC0zOTMwMzc0MDMsMjA4NTMzNTE2MCwtMj
EzMzE0ODc4MiwyMDg5ODk1MTE3LDczMDk5ODExNl19
-->