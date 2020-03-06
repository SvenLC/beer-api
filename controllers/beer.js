const Beer = require('../models/beer');

exports.getBeers = async (req, res, next) => {
  try {
    const beers = await Beer.find();
    res.status(200).json(beers);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getBeer = async (req, res, next) => {
  const { beerId } = req.params;
  try {
    const beer = await Beer.findById(beerId);
    if (!beer) {
      const error = new Error('beer not found !');
      res.status(404).json('Aucun métier trouvé');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(beer);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.createBeer = async (req, res, next) => {
  const { ...Arg } = req.body;
  const beer = new Beer({ ...Arg });
  try {
    const result = await beer.save();
    res.status(200).json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.createBeers = async (req, res, next) => {
  try {
    if (req.body && Array.isArray(req.body)) {
      const result = Beer.updateMany(req.body);
      res.status.json(result);
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.updateBeer = async (req, res, next) => {
  const { beerId } = req.params;
  const { ...args } = req.body;
  try {
    const beer = await Beer.findById(beerId);
    if (!beer) {
      const error = new Error('beer not found !');
      error.statusCode = 404;
      throw error;
    }
    beer.set({ ...args });

    const result = await beer.save();
    res.status(200).json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.deleteBeer = async (req, res, next) => {
  const { beerId } = req.params;
  try {
    const beer = await Beer.findById(beerId);
    if (!beer) {
      const error = new Error('beer not found !');
      error.statusCode = 404;
      throw error;
    }
    const result = await beer.findByIdAndDelete(beerId);
    res.status(200).json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
