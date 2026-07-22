import express from "express";
import cors from "cors";


const app = express();


app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false
}));


app.use(express.json());



export default app;