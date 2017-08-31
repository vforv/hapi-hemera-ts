#Installation

Install typescript, docker and docker-compose

tsc -v
Version 2.4.2

docker -v
Docker version 17.06.1-ce, build 874a737

docker-compose -v
docker-compose version 1.13.0, build 1719ceb

Go to system dir: cd system and follow the steps...

1. npm run nats
2. npm install
3. npm run fuge
4. apply npm i
5. watch all
6. start all

Server will start on: localhost:5000

Ping route: localhost:5000/v1/ping/formated

To see more options for fuge type in shell help.

To test service go to service and run npm run test.

Ex.
cd api-gateway
npm run test

To run with docker-compose:

go to system/fuge and run:
docker-compose up
