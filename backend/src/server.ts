import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
