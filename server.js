import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import routerindex from "./router/index.js";
import error_handler from "./middlewares/error_handler.js";
import { not_found_handler, method_not_allowed_handler } from "./middlewares/not_found_handler.js";

const app = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log(`Server listening on port ${PORT}`);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api', routerindex)


app.use(not_found_handler)
app.use(method_not_allowed_handler)
app.use(error_handler)


app.listen(PORT, ready);
