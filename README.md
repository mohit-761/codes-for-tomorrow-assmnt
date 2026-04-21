# codes-for-tomorrow-assessment

## to run server on developement use following command
yarn run start:dev

## to build the code use following command
yarn run build

## to run server on production use following command
yarn run start

## to run the migration use following command
yarn run migration

## to create dummy 5 users make a request on
http://localhost:3000/api/user/

## once the users are created to check the rate limiting make a request on 
http://localhost:3000/api/user/get-data

with header "userId" and the value of this userId should be the primary key of the 
database such as 1,2,3

ex. userId - 1

## NOTE:-
I have added the .gitignore file but to get the credentials please check the .env.example file once.
