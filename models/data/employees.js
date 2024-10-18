import 'dotenv/config.js';
import '../../config/database.js';
import Employee from '../Employee.js';

let employees = [
    { name: "Juan Pérez", charge: "Manager", salary: 5000 },
    { name: "Ana Gómez", charge: "Assistant", salary: 2500 },
    { name: "Carlos López", charge: "Developer", salary: 3500 },
    { name: "María Fernández", charge: "Designer", salary: 3000 },
    { name: "Luis Rodríguez", charge: "Accountant", salary: 4050 },
    { name: "Laura Martínez", charge: "Human Resources", salary: 2800 },
    { name: "Javier Sánchez", charge: "Analyst", salary: 3200 },
    { name: "Claudia Torres", charge: "Saleswoman", salary: 2300 },
    { name: "Pedro Ramírez", charge: "Project Manager", salary: 5500 },
    { name: "Sofia Morales", charge: "Marketing Specialist", salary: 3600 },
    { name: "Diego Castillo", charge: "Support Technician", salary: 2200 },
    { name: "Natalia Herrera", charge: "Secretary", salary: 2000 },
    { name: "Ricardo Jimenez", charge: "Sales Manager", salary: 4800 },
    { name: "Gabriela Cruz", charge: "Researcher", salary: 3700 },
    { name: "Andres Vargas", charge: "Junior Programmer", salary: 2700 }];

Employee.insertMany(employees).then(() => { console.log("Employee data inserted successfully"); })
    .catch((error) => { console.error("Error inserting employee data:", error); });