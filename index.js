const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
const DB_NAME = "db_comp3133_employee"
const DB_USER_NAME = 'sa'
const DB_PASSWORD = 'iEqf-KiV-z4P5.s'
const CLUSTER_ID = 'dwo0a6z'
const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(DB_CONNECTION).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(employeeRouter);

app.listen(SERVER_PORT, () => { console.log('Server is running...') });
