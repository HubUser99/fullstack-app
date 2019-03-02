# Fullstack-App

## Overview
This application demonstrates basic functionality of a full stack application.
It includes:
* Node.js REST api
* ReactJS user authorization interface and functionality
* example of data usage from the database

## Installation
```
cd client && npm install && cd ../backend && npm install && cd ..
```

## Starting the app
To start using the application you should go through the following steps:

* install MongoDB on you local machine or use MongoDB in the cloud
  * You can find the installation [here](https://docs.mongodb.com/manual/installation/).

* create a new file with a name *credentials.js*
  * add the following code there: 
```
const pass = "<URI>";
module.exports = {
	pass
}
```
  * replace *<URI>* with the URI to your database

* execute the following command:
```
npm start
```

## Purpose
This application enables user to create his/her account. After the registration the user will be able to see how many accounts were registered in total on the website.

Basically, this application does not have any meaningful purpose, however shows the basic functionality of the full stack application.