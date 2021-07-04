const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.listen(5000);
app.listen(5000,function (req,res) {
    console.log("server is running at port number 5000");
});

app.get("/",function (req,res) {
    res.send("Welcome Admin!");
});

app.get("/employees",function (req,res){
    res.send("Employees");
});

app.get("/Clients",function (req,res){
    res.send("Clients");
});

app.get("/Projects",function (req,res){
    res.send("Projects");
});

app.get("/Payments",function (req,res){
    res.send("Payments");
});

app.get("/Projects",function (req,res){
    res.send("Projects");
});

app.get("/EmployeeTracking",function (req,res){
    res.send("Employee Tracking");
});

app.get("/JobOpening",function (req,res){
    res.send("Job Opening");
});


mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology:true } )
.then( () => console.log("Connection Successfull......."))
.catch((err) => console.log("err"));