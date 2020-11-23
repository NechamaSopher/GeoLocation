const { db } = require("../model/distance.model");
let dotenv = require("dotenv");
let distance = require("google-distance");
dotenv.config();
distance.apiKey = process.env.API_KEY;

const getDistance = (req, res) => {
  if (req.body.source && req.body.destination) {
    db.collection("Distance").findOne(
      { source: req.body.source, destination: req.body.destination },
      (error, result) => {
        if (error) return res.status(403).json({ error: error });
        if (result) {
          db.collection("Distance").updateOne(
            { _id: result._id },
            { $set: { hits: result.hits + 1 } }
          );
          res.send({ distance: result.distance });
        } else {
          distance.get(
            {
              origin: req.body.source,
              destination: req.body.destination,
            },
            function (error, data) {
              if (error)
                return res.status(402).json({ error: "invalid params" });
              let distance = parseInt(data.distance.split("km")[0]);
              db.collection("Distance").insertOne({
                source: req.body.source,
                destination: req.body.destination,
                distance: distance,
                hits: 1,
              });
              res.send({ distance: distance });
            }
          );
        }
      }
    );
  } else {
    return res.status(401).json({ error: "missing params" });
  }
};

const getPopularSearch = (req, res) => {
  db.collection("Distance")
    .find()
    .sort({ hits: -1 })
    .project({ source: 1, destination: 1, hits: 1, _id: 0 })
    .toArray((error, result) => {
      if (error) return res.status(403).json({ error: error });
      if (result.length > 0) {
        res.send(result[0]);
      }
    });
};

const getPopularSearchesList = (req, res) => {
  db.collection("Distance")
    .find()
    .sort({ hits: -1 })
    .limit(5)
    .project({ source: 1, destination: 1, hits: 1, _id: 0 })
    .toArray((error, result) => {
      if (error) return res.status(403).json({ error: error });
      if (result) {
        res.send(result);
      }
    });
};

module.exports = { getDistance, getPopularSearch, getPopularSearchesList };
