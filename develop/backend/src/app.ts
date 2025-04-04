import express from "express"

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Running testing route in TypeScript');
  });

export default app  