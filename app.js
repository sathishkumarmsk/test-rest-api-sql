import express from 'express';
import http from 'http';
import cors from 'cors';

import db from './models/app';

import moviesRouter from './routes/movies';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/movies', moviesRouter);

app.use('/', (req, res) => res.send('Hello'));

const server = http.createServer(app);

db.sequelize.sync().then(() => {
    server.listen(port, () => console.log(`Running on http://localhost:${port}`));
});