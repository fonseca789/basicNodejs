const express = require("express");
const app = express();
const ditto = require("./pokemon/ditto.json");

app.disable("x-powered-by");
const PORT = process.env.PORT ?? 1234;

//milddelware

app.use(express.json())
// app.use((req, res, next) => {
//   if (req.method !== "POST") next();
//   if (req.headers["content-type"] !== "application/json") next();

//   //solo entra los metho POST y application/json
//   let body = "";

//   //lee lo que va llegado a de data
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });
//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.time = Date.now();
//     req.body=data;
//     next();
//   });
// });

app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

app.post("/pokemon", (req, res) => {
    //todo guardar en basedato
    res.status(201).json(req.body);
  
});

//la ultima se usa para controlar los 404

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port http:localhost:${PORT}`);
});
