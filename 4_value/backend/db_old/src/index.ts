import express from 'express';
import sql from './db'
import { createId } from '@paralleldrive/cuid2';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send("try to go to /now or /hello or /idk")
});

app.get('/idk', async (req, res) => {
  try {
    const name = 'Audrey';
    const result = await sql`
      INSERT INTO users (id, name)
      VALUES (${createId()}, ${name})
      RETURNING *
    `
    console.log('yay');
    res.status(200).send(result);
  } catch (error) {
    console.error('idk anymore', error);
    res.status(200).send(error);
  }
});

app.get('/now', async (req, res) => {
  try {
    const now = await sql`
      SELECT NOW();
    `
    res.status(200).send(now);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/hello', (req, res) => {
  res.status(200).send("hello, your app is working!!!")
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
})