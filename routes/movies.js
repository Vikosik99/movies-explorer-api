const router = require('express').Router();
const { getMovies, addMovie, deleteMovie } = require('../controllers/movies');
const { validateMovieId, validateMovie } = require('../utils/validation');

router.get('/', getMovies);
router.post('/', validateMovie, addMovie);
router.delete('/:movieId', validateMovieId, deleteMovie);

module.exports = router;
