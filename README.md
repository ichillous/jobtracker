
# Job Tracker App
 

This is a single page job tracking app built with Angular, Node.js and MongoDB. 

## Features

- Add new job applications
- View list of job applications
- Pagination for job list
- Edit job applications
- Mark if a job offer was received
- Stores data in MongoDB database

### Usage
CD into backend folder
```
cd backend 
```
Install

```
npm install express morgan mongoose cors
```
#### Run Server

``` npm run server ```

This will start the Node/Express backend on port 3000.

#### Run Angular
Exit backend directory then cd into frontend
```..cd ``` then ``` cd frontend```

``` npm install```

``` npm start ```

Angular frontend will run on port 4200.

#### MongoDB
Database is hosted on MongoDB Atlas. URI is configured in server.js.

### Code Overview
backend/server.js - Node/Express code
backend/models - MongoDB models
frontend/src/app - Angular components
frontend/src/app/shared - Angular services & models
Future Improvements
- Add user accounts
- Search for job applications
- Sorting for job table
- Delete job applications
- Animations and UI enhancements
- Display key insight data in graphs

License
MIT License

Let me know if you would like any sections expanded or have additional ideas for the README!

