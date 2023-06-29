require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({}));

        app.use("/peoples", require("./routes/people.route"))
        app.use('/films', require("./routes/film.route"));
        app.use('/planets', require("./routes/planet.route"));
        app.use('/species', require("./routes/specie.route"));
        app.use('/starships', require("./routes/starship.route"));
        app.use('/vehicles', require("./routes/vehicle.route"));

        app.listen(port, () => console.log('Server up '+ port))
    })
    .catch((err) => console.log(err));

