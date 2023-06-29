const Film = require("../models/film.model.js");

const getFilms = async (req, res) => {
  try {
    const films = await Film.find();
    res.json(films.map(film => addLink(film)));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFilmById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) return res.status(404).json({ error: 'Film not found' });
    res.json(addLink(film));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createFilm = async (req, res) => {
  try {
    let newId = req.body._id || 1;

    if(!req.body._id) {
      const highestIdDocument = await Film.findOne().sort({ _id: -1 }).limit(1);
      if (highestIdDocument) newId = highestIdDocument._id + 1;
    }

    const film = await Film.create({ _id : newId, ...req.body });
    
    res.status(201).json(addLink(film));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteFilm = async (req, res) => {
  try {
    const film = await Film.findOneAndDelete({ _id: req.params.id });

    if (!film) return res.status(404).json({ error: 'Film not found' });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateFilm = async (req, res) => {
  try {
    let film = await Film.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );

    if (!film) return res.status(404).json({ error: 'Film not found' });

    film = addLink(film);

    const updatedAttributes = {};
    for (const [key] of Object.entries(req.body)) {
      if (film[key] !== undefined) {
        updatedAttributes[key] = film[key];
      }
    }

    res.status(200).json(updatedAttributes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

function addLink(film) {
  const editedStarships = film.starships.map(starshipId => {
    return {
      id: starshipId,
      href: `/starships/${starshipId}`
    };
  });

  const editedVehicles = film.vehicles.map(vehicleId => {
    return {
      id: vehicleId,
      href: `/vehicles/${vehicleId}`
    };
  });

  const editedPlanets = film.planets.map(planetId => {
    return {
      id: planetId,
      href: `/planets/${planetId}`
    };
  });

  const editedCharacters = film.characters.map(characterId => {
    return {
      id: characterId,
      href: `/peoples/${characterId}`
    };
  });

  const editedSpecies = film.species.map(speciesId => {
    return {
      id: speciesId,
      href: `/species/${speciesId}`
    };
  });

  return {
    ...film._doc,
    starships: editedStarships,
    vehicles: editedVehicles,
    planets: editedPlanets,
    characters: editedCharacters,
    species: editedSpecies
  };
}

module.exports = {
  getFilms,
  getFilmById,
  createFilm,
  deleteFilm,
  updateFilm,
};