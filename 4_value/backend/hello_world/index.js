import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send("Hello world!");
})
app.get('/:404', (req, res) => {
  res.status(200).send("You are a traveller! I haven't made this page yet.");
})

app.listen(port, () => {
  console.log(`Your server is running on port ${port} inside Docker!`);
})