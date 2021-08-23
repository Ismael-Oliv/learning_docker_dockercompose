const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log("Esta funcionado");
  return response.json({ mensagem: "ok" });
});

app.listen(3001, console.log("Server up on port 3001"));
