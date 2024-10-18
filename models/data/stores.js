import 'dotenv/config.js';
import '../../config/database.js';
import Store from '../Store.js';

let stores = [
    {
        name: "La Esperanza Supermarket",
        address: "Av. Libertador 1234, Central City",
        phone: 3214567890
    },
    {
        name: "Electro Mundo",
        address: "Calle 8 No. 256, Zona Norte",
        phone: 3124561234
    },
    {
        name: "Clothes and Fashion",
        address: "Cra. 15 No. 45-67, Zona Rosa",
        phone: 3147896543
    },
    {
        name: "El Tornillo Hardware Store",
        address: "Calle 7 No. 12-34, Barrio Industrial",
        phone: 3105674321
    },
    {
        name: "Star Bookstore and Stationery",
        address: "Cra. 10 No. 98-76, School Zone",
        phone: 3198765432
    }
];

Store.insertMany(stores)
    .then(() => {
        console.log("Store data inserted successfully");
    })
    .catch((error) => {
        console.error("Error inserting store data:", error);
    });