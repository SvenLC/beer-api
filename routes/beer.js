const express = require('express');

const beerController = require('../controllers/beer');

const router = express.Router();

router.get('/', beerController.getBeers);
router.get('/:articleId', beerController.getBeer);
router.post('/', beerController.createBeer);
router.delete('/:articleId', beerController.deleteBeer);
router.put('/:articleId', beerController.updateBeer);

module.exports = router;