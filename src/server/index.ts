import express from "express";
import cors from "cors";
import { configureRoutes } from "../routes";

// Configuración del server
export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Configuración de las rutas
configureRoutes(app);
