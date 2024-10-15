import 'dotenv/config.js';
import '../../config/database.js';
import Producto from '../Producto.js';

let productos = [
    { nombre: "Laptop Basic", marca: "MarcaTech", tipo: "Electrónica", precio: "$499.99" },
    { nombre: "Camiseta Deportiva", marca: "SportFit", tipo: "Ropa", precio: "$29.99" },
    { nombre: "Aspiradora Turbo", marca: "HomeClean", tipo: "Hogar", precio: "$149.99" },
    { nombre: "Muñeca Classic", marca: "ToyWorld", tipo: "Juguetes", precio: "$19.99" },
    { nombre: "Raqueta de Tenis", marca: "ProSports", tipo: "Deporte", precio: "$79.99" },
    { nombre: "Televisor Ultra HD", marca: "ElectroLux", tipo: "Electrónica", precio: "$799.99" },
    { nombre: "Pantalón Jeans", marca: "FashionFit", tipo: "Ropa", precio: "$45.99" },
    { nombre: "Cafetera Express", marca: "KitchenPlus", tipo: "Hogar", precio: "$89.99" },
    { nombre: "Juego de Construcción", marca: "BuildIt", tipo: "Juguetes", precio: "$34.99" },
    { nombre: "Balón de Fútbol", marca: "GoalSport", tipo: "Deporte", precio: "$25.99" },
    { nombre: "Smartphone Pro", marca: "PhoneZone", tipo: "Electrónica", precio: "$999.99" },
    { nombre: "Chaqueta Impermeable", marca: "OutdoorWear", tipo: "Ropa", precio: "$69.99" },
    { nombre: "Licuadora PowerBlend", marca: "HomeChef", tipo: "Hogar", precio: "$59.99" },
    { nombre: "Peluche Oso", marca: "ToyLand", tipo: "Juguetes", precio: "$15.99" },
    { nombre: "Bicicleta Montaña", marca: "CycleGear", tipo: "Deporte", precio: "$249.99" },
    { nombre: "Tablet Mini", marca: "GigaTech", tipo: "Electrónica", precio: "$299.99" },
    { nombre: "Camisa Formal", marca: "Elegance", tipo: "Ropa", precio: "$39.99" },
    { nombre: "Plancha a Vapor", marca: "SmoothIron", tipo: "Hogar", precio: "$49.99" },
    { nombre: "Rompecabezas 1000 Piezas", marca: "PuzzleMasters", tipo: "Juguetes", precio: "$22.99" },
    { nombre: "Pesas de Mano", marca: "FitLife", tipo: "Deporte", precio: "$19.99" },
    { nombre: "Auriculares Inalámbricos", marca: "SoundMax", tipo: "Electrónica", precio: "$69.99" },
    { nombre: "Vestido Casual", marca: "StylePro", tipo: "Ropa", precio: "$49.99" },
    { nombre: "Microondas Compacto", marca: "HeatWave", tipo: "Hogar", precio: "$129.99" },
    { nombre: "Juego de Mesa Clásico", marca: "PlayZone", tipo: "Juguetes", precio: "$29.99" },
    { nombre: "Colchoneta Yoga", marca: "ZenFit", tipo: "Deporte", precio: "$24.99" },
    { nombre: "Cámara Digital", marca: "FotoSnap", tipo: "Electrónica", precio: "$599.99" },
    { nombre: "Sudadera Deportiva", marca: "RunFit", tipo: "Ropa", precio: "$39.99" },
    { nombre: "Ventilador de Mesa", marca: "CoolBreeze", tipo: "Hogar", precio: "$44.99" },
    { nombre: "Auto a Control Remoto", marca: "RacerToy", tipo: "Juguetes", precio: "$59.99" },
    { nombre: "Raqueta de Bádminton", marca: "SmashSport", tipo: "Deporte", precio: "$19.99" },
    { nombre: "Smartwatch", marca: "TimeTech", tipo: "Electrónica", precio: "$199.99" },
    { nombre: "Falda Estampada", marca: "ChicWear", tipo: "Ropa", precio: "$34.99" },
    { nombre: "Calentador Eléctrico", marca: "WarmHome", tipo: "Hogar", precio: "$74.99" },
    { nombre: "Set de Plastilina", marca: "CreativeToys", tipo: "Juguetes", precio: "$12.99" },
    { nombre: "Pelota de Baloncesto", marca: "HoopGear", tipo: "Deporte", precio: "$29.99" },
    { nombre: "Drone Cámara HD", marca: "SkyFly", tipo: "Electrónica", precio: "$149.99" },
    { nombre: "Blusa Floral", marca: "StyleFashion", tipo: "Ropa", precio: "$24.99" },
    { nombre: "Aspiradora Robot", marca: "CleanBot", tipo: "Hogar", precio: "$199.99" },
    { nombre: "Lego Set", marca: "BlockFun", tipo: "Juguetes", precio: "$69.99" },
    { nombre: "Kit de Pesca", marca: "FishMaster", tipo: "Deporte", precio: "$49.99" },
    { nombre: "Router Wi-Fi", marca: "NetFast", tipo: "Electrónica", precio: "$59.99" },
    { nombre: "Pijama Unisex", marca: "ComfyWear", tipo: "Ropa", precio: "$19.99" },
    { nombre: "Lámpara LED", marca: "BrightLight", tipo: "Hogar", precio: "$19.99" },
    { nombre: "Set de Pintura", marca: "ArtMaster", tipo: "Juguetes", precio: "$14.99" },
    { nombre: "Banda Elástica", marca: "FlexFit", tipo: "Deporte", precio: "$9.99" },
    { nombre: "Parlante Bluetooth", marca: "SoundWave", tipo: "Electrónica", precio: "$49.99" },
    { nombre: "Bufanda de Lana", marca: "WinterCozy", tipo: "Ropa", precio: "$14.99" },
    { nombre: "Calentador de Agua", marca: "QuickHeat", tipo: "Hogar", precio: "$89.99" },
    { nombre: "Pelota de Playa", marca: "BeachFun", tipo: "Juguetes", precio: "$5.99" },
    { nombre: "Saco de Boxeo", marca: "PowerPunch", tipo: "Deporte", precio: "$69.99" },
    { nombre: "Laptop Gamer", marca: "GameTech", tipo: "Electrónica", precio: "$1199.99" },
    { nombre: "Sandalias de Verano", marca: "SummerFeet", tipo: "Ropa", precio: "$29.99" },
    { nombre: "Tostadora 2 Rebanadas", marca: "ToastMaster", tipo: "Hogar", precio: "$34.99" },
    { nombre: "Puzzle 3D", marca: "PuzzleWorld", tipo: "Juguetes", precio: "$19.99" },
    { nombre: "Pesas Ajustables", marca: "LiftFit", tipo: "Deporte", precio: "$79.99" },
    { nombre: "Cámara de Seguridad", marca: "SafeHome", tipo: "Electrónica", precio: "$99.99" },
    { nombre: "Gorra Casual", marca: "TrendWear", tipo: "Ropa", precio: "$9.99" },
    { nombre: "Refrigerador Compacto", marca: "CoolSpace", tipo: "Hogar", precio: "$199.99" },
    { nombre: "Libro para Colorear", marca: "ColorFun", tipo: "Juguetes", precio: "$7.99" },
    { nombre: "Rueda Abdominal", marca: "CoreFit", tipo: "Deporte", precio: "$14.99" },
    { nombre: "iPad", marca: "Apple", tipo: "Electrónica", precio: "$329.99" },
    { nombre: "Sombrero de Paja", marca: "BeachWear", tipo: "Ropa", precio: "$14.99" },
    { nombre: "Cafetera Italiana", marca: "BrewMaster", tipo: "Hogar", precio: "$24.99" },
    { nombre: "Torre de Jenga", marca: "GameMasters", tipo: "Juguetes", precio: "$12.99" },
    { nombre: "Guantes de Boxeo", marca: "PunchGear", tipo: "Deporte", precio: "$29.99" },
    { nombre: "Consola de Videojuegos", marca: "PlayWorld", tipo: "Electrónica", precio: "$399.99" },
    { nombre: "Chaqueta de Cuero", marca: "LeatherLux", tipo: "Ropa", precio: "$199.99" },
    { nombre: "Batidora de Mano", marca: "BlendEasy", tipo: "Hogar", precio: "$29.99" },
    { nombre: "Juego de Cartas", marca: "CardMasters", tipo: "Juguetes", precio: "$9.99" },
    { nombre: "Skateboard", marca: "RidePro", tipo: "Deporte", precio: "$79.99" },
    { nombre: "Proyector Portátil", marca: "ShowMax", tipo: "Electrónica", precio: "$249.99" },
    { nombre: "Zapatillas Running", marca: "SpeedRun", tipo: "Ropa", precio: "$69.99" },
    { nombre: "Extractor de Jugo", marca: "JuiceMaster", tipo: "Hogar", precio: "$99.99" },
    { nombre: "Set de Bloques de Madera", marca: "WoodPlay", tipo: "Juguetes", precio: "$39.99" },
    { nombre: "Ciclón para Aspiradora", marca: "PowerClean", tipo: "Deporte", precio: "$24.99" },
    { nombre: "Smart TV", marca: "VisionPlus", tipo: "Electrónica", precio: "$599.99" },
    { nombre: "Botas de Invierno", marca: "WarmFeet", tipo: "Ropa", precio: "$89.99" },
    { nombre: "Grill Eléctrico", marca: "CookMaster", tipo: "Hogar", precio: "$149.99" },
    { nombre: "Set de Dibujo", marca: "ArtisticFun", tipo: "Juguetes", precio: "$24.99" },
    { nombre: "Tablero de Dardos", marca: "DartZone", tipo: "Deporte", precio: "$39.99" },
    { nombre: "Reloj de Pared", marca: "TimeKeep", tipo: "Electrónica", precio: "$29.99" },
    { nombre: "Vestido de Noche", marca: "EveningGlam", tipo: "Ropa", precio: "$99.99" },
    { nombre: "Purificador de Aire", marca: "FreshBreeze", tipo: "Hogar", precio: "$199.99" },
    { nombre: "Muñeca Interactiva", marca: "SmartToy", tipo: "Juguetes", precio: "$49.99" },
    { nombre: "Patín del Diablo", marca: "TrickBoard", tipo: "Deporte", precio: "$59.99" },
    { nombre: "Laptop Convertible", marca: "FlexiTech", tipo: "Electrónica", precio: "$799.99" },
    { nombre: "Bufanda de Seda", marca: "LuxuryWear", tipo: "Ropa", precio: "$39.99" },
    { nombre: "Sartén Antiadherente", marca: "ChefChoice", tipo: "Hogar", precio: "$34.99" },
    { nombre: "Juego de Aventura", marca: "FunTime", tipo: "Juguetes", precio: "$24.99" },
    { nombre: "Trampolín", marca: "JumpFun", tipo: "Deporte", precio: "$199.99" },
    { nombre: "Altavoz Inteligente", marca: "SmartSound", tipo: "Electrónica", precio: "$129.99" },
    { nombre: "Camisa de Rayas", marca: "StyleLine", tipo: "Ropa", precio: "$29.99" },
    { nombre: "Batidora de Pie", marca: "BakerPro", tipo: "Hogar", precio: "$89.99" },
    { nombre: "Set de Juego de Rol", marca: "FantasyWorld", tipo: "Juguetes", precio: "$59.99" },
    { nombre: "Bicicleta de Ciclismo", marca: "SpeedCycler", tipo: "Deporte", precio: "$299.99" },
    { nombre: "Reloj Inteligente", marca: "TechTime", tipo: "Electrónica", precio: "$199.99" },
    { nombre: "Cárdigan Suave", marca: "CozyStyle", tipo: "Ropa", precio: "$49.99" },
    { nombre: "Secadora de Pelo", marca: "StyleDry", tipo: "Hogar", precio: "$29.99" },
    { nombre: "Baraja de Cartas", marca: "CardGenius", tipo: "Juguetes", precio: "$5.99" },
    { nombre: "Bicicleta de Montaña", marca: "TrailBlazer", tipo: "Deporte", precio: "$349.99" },

];

Producto.insertMany(productos)
    .then(() => {
        console.log("Datos de productos insertados correctamente");
    })
    .catch((error) => {
        console.error("Error al insertar datos de productos:", error);
    });
