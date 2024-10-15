import 'dotenv/config.js';
import '../../config/database.js';
import Tienda from '../Tienda.js';

let tiendas = [
    {
        nombre: "Supermercado La Esperanza",
        direccion: "Av. Libertador 1234, Ciudad Central",
        telefono: 3214567890
    },
    {
        nombre: "Electro Mundo",
        direccion: "Calle 8 No. 256, Zona Norte",
        telefono: 3124561234
    },
    {
        nombre: "Ropa y Moda",
        direccion: "Cra. 15 No. 45-67, Zona Rosa",
        telefono: 3147896543
    },
    {
        nombre: "Ferretería El Tornillo",
        direccion: "Calle 7 No. 12-34, Barrio Industrial",
        telefono: 3105674321
    },
    {
        nombre: "Librería y Papelería Estrella",
        direccion: "Cra. 10 No. 98-76, Zona Escolar",
        telefono: 3198765432
    }
];

Tienda.insertMany(tiendas)
    .then(() => {
        console.log("Datos de tiendas insertados correctamente");
    })
    .catch((error) => {
        console.error("Error al insertar datos de tiendas:", error);
    });
