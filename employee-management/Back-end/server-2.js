import express from 'express';
import Employees from './employee';
import Clients from './client';

const app = express();

app.get('/api/Employees', (req, res) => {
    res.send(employee.Employees);
});

app.get('/api/Clients', (req, res) => {
    res.send(client.Clients);
});

// ------------------------------------------------
app.get('/api/Projects', (req, res) => {
    res.send(project.Projects);
});

app.get('/api/Payments', (req, res) => {
    res.send(payment.Payments);
});

app.get('/api/Projects', (req, res) => {
    res.send(project.Projects);
});

app.get('/api/EmployeeTracking', (req, res) => {
    res.send(employeeTracking.EmployeeTracking);
});

app.get('/api/JobOpeningss', (req, res) => {
    res.send(JobOpenings.JobOpeningss);
});
//-------------------------------------------------------------------------------



app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
