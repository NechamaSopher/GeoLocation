let express = require("express");
let bodyParser = require("body-parser");
let distancesRoutes = require("./routes/distance.js");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
let cors = require("cors");

// Setting up express
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());
dotenv.config();

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_REMOTE_URI, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could not be connected : " + error);
    }
  );
global.db = process.env.MONGODB_REMOTE_URI;

// Conectting port
app.listen(process.env.PORT || 8080, () =>
  console.log(`server runing on port ${process.env.PORT}`)
);

app.use("/distance", distancesRoutes);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
