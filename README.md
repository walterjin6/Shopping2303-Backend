# City Hospital Lab Management

### [Click me to view Demo Website](https://cityhospitallabmanagement.onrender.com/)

This project is the backend part for searching Flicker pictures through APIs provided by Flickr.

## Instructions

First clone this repository:  git clone https://github.com/walterjin6/City-Hospital-Lab-Management-Backend.git

Contact [me](mailto:jinwei6@gmail.com)  to get`.env` file, and put .env file in project root directory

Install dependencies: npm install

Run project: npm run dev OR npm start

Server will be running on port 3500

Launch the paired frontend project from [here](https://github.com/walterjin6/City-Hospital-Lab-Management-Frontend)  

Test project: npx jest

##  API documentation

Pls see [here](https://github.com/walterjin6/City-Hospital-Lab-Management-Backend/blob/main/API-Documentation.md) for API documentation

## Features

1.  OAuth 2.0: use refresh token, Access token, JWT authentication
2.  Use middleware to protect private API by verifying JWT.
3.  LoginLimiter: Limit the number of failed logins for security purpose

## Main Tech Stacks used

1. Node: backend architecture
2. Express: to construct Restful API
3. JWT: for authentication
4. MongoDB: to store username and password
5. Mongoose: for ORM
6. Postman: to test the API
7. Jest/supertest: to run tests and provide test coverage
8. Axios: to make api requests
