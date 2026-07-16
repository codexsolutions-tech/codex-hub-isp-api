import "reflect-metadata";
import "dotenv/config";

import "./api/container/container";

import routes from "./api/routes";
import app from "./app";

app.get('/hub-api-isp', (req, res) => res.json({"message":"Check"}))
app.use('/v1', routes)


const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});