import { Router } from 'express';
import db from '../models/app';

const router = Router();



router.get('/', async (req, res) => {


    const movies = await db.movie.findAll()

    if (movies) {
        return res.status(200).json(movies);
    }

    return res.sendStatus(404);
});

router.get('/:id', async (req, res) => {
    const movies = await db.movie.findByPk(req.params.id);

    if (movies) {
        return res.status(200).json(movies);
    }

    return res.sendStatus(404);
});

router.post('/', async (req, res) => {
    

    try {
        const movieData = {
            film: req.body.film,
            times: req.body.times,
            watched: req.body.times > 1 ? true: false,
            createdOn: new Date().toDateString(),
        }

        const movie = await db.movie.create(movieData);    

        if (movie) {
            return res.status(201).json(movie);
        }
    
        return res.sendStatus(404);
    } catch (error) {
        console.log(error);      
    }
});

router.put('/:id', async (req, res) => {
  

    try {
        const movie = await db.movie.update({
            film: req.body.film,
            times: req.body.times,
            watched: req.body.times > 1 ? true: false,
        }, {
            where: {
                id: req.params.id,
            }
        });

        if (movie) {
            return res.status(200).json(movie);
        }
    
        return res.sendStatus(404);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (req, res) => {
  

    try {
        const movie = await db.movie.destroy({
            where: { id: req.params.id },
        })

        if (movie) {
            return res.status(200).json(movie);
        }
    
        return res.sendStatus(404);
    } catch (error) {
        console.log(error);
    }
});

export default router;