# codes-for-tomorrow-assessment

## to create dummy 5 users make a request on
http://localhost:3000/api/user/

## once the users are created to check the rate limiting make a request on 
http://localhost:3000/api/user/get-data

with header "userId" and the value of this userId should be the primary key of the 
database such as 1,2,3

ex. userId - 1
