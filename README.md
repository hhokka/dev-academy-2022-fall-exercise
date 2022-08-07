# dev-academy-2022-fall-exercise !
[hogster logo](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/hogster-logo.png)

With this application it is possible for users to see data of journeys made with city bikes in the Helsinki Capital area. 

## Dokumentation

[Record of working hours](https://github.com/hhokka/dev-academy-2022-fall-exercise/blob/main/readme/hogster-logo.png)

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
Go to address http://localhost:3001

### Testing

Tests are run with this command
```
cypress:open
```
### API

    GET http://localhost:3001/api/journeys
    returns all journeys in database
    
    POST http://localhost:3001/api/journeys + body
    adds a journey to database
    
    POST http://localhost:3001/api/journeys/reset
    removes all journeys in database
    
    GET http://localhost:3001/api/bikeStations
    returns all bikeStations in database
    
    POST http://localhost:3001/api/bikeStations + body
    adds a bikeStation to database
    
    POST http://localhost:3001/api/bikeStations/reset
    removes all bikeStations in database





<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM5MzAzNzQwMywyMDg1MzM1MTYwLC0yMT
MzMTQ4NzgyLDIwODk4OTUxMTcsNzMwOTk4MTE2XX0=
-->