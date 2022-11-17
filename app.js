const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
// const { appDataSource } = require("./src/models/data-source");
// const { routes } = require("./src/routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// app.use(routes);

app.all('*',(req, res)=>{
  const err =new Error(`Can't find ${req.originalUrl} on this server!`)
  err.statusCode =404;
  res.status(statusCode).send()
})//요청받은 url이 없을때

//health check
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  server.listen(PORT, () => console.log(`server is listening on ${PORT}`));
};

start();
