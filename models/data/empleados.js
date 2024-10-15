import 'dotenv/config.js';
import '../../config/database.js';
import Empleado from '../Empleado.js';

let empleados = [
    {
        nombre: "Juan Pérez",
        cargo: "Gerente",
        salario: 5000
    },
    {
        nombre: "Ana Gómez",
        cargo: "Asistente",
        salario: 2500
    },
    {
        nombre: "Carlos López",
        cargo: "Desarrollador",
        salario: 3500
    },
    {
        nombre: "María Fernández",
        cargo: "Diseñadora",
        salario: 3000
    },
    {
        nombre: "Luis Rodríguez",
        cargo: "Contador",
        salario: 4000
    },
    {
        nombre: "Laura Martínez",
        cargo: "Recursos Humanos",
        salario: 2800
    },
    {
        nombre: "Javier Sánchez",
        cargo: "Analista",
        salario: 3200
    },
    {
        nombre: "Claudia Torres",
        cargo: "Vendedora",
        salario: 2300
    },
    {
        nombre: "Pedro Ramírez",
        cargo: "Gerente de Proyectos",
        salario: 5500
    },
    {
        nombre: "Sofía Morales",
        cargo: "Especialista en Marketing",
        salario: 3600
    },
    {
        nombre: "Diego Castillo",
        cargo: "Técnico de Soporte",
        salario: 2200
    },
    {
        nombre: "Natalia Herrera",
        cargo: "Secretaria",
        salario: 2000
    },
    {
        nombre: "Ricardo Jiménez",
        cargo: "Jefe de Ventas",
        salario: 4800
    },
    {
        nombre: "Gabriela Cruz",
        cargo: "Investigadora",
        salario: 3700
    },
    {
        nombre: "Andrés Vargas",
        cargo: "Programador Junior",
        salario: 2700
    }
];

Empleado.insertMany(empleados)
    .then(() => {
        console.log("Datos de empleados insertados correctamente");
    })
    .catch((error) => {
        console.error("Error al insertar datos de empleados:", error);
    });
