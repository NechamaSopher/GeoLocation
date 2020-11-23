/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/distance.js":
/*!*********************************!*\
  !*** ./controllers/distance.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 98:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ../model/distance.model */ \"./model/distance.model.js\"),\n    db = _require.db;\n\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nvar distance = __webpack_require__(/*! google-distance */ \"google-distance\");\n\ndotenv.config();\ndistance.apiKey = process.env.API_KEY;\n\nvar getDistance = function getDistance(req, res) {\n  if (req.body.source && req.body.destination) {\n    db.collection(\"Distance\").findOne({\n      source: req.body.source,\n      destination: req.body.destination\n    }, function (error, result) {\n      if (error) return res.status(403).json({\n        error: error\n      });\n\n      if (result) {\n        db.collection(\"Distance\").updateOne({\n          _id: result._id\n        }, {\n          $set: {\n            hits: result.hits + 1\n          }\n        });\n        res.send({\n          distance: result.distance\n        });\n      } else {\n        distance.get({\n          origin: req.body.source,\n          destination: req.body.destination\n        }, function (error, data) {\n          if (error) return res.status(402).json({\n            error: \"invalid params\"\n          });\n          var distance = parseInt(data.distance.split(\"km\")[0]);\n          db.collection(\"Distance\").insertOne({\n            source: req.body.source,\n            destination: req.body.destination,\n            distance: distance,\n            hits: 1\n          });\n          res.send({\n            distance: distance\n          });\n        });\n      }\n    });\n  } else {\n    return res.status(401).json({\n      error: \"missing params\"\n    });\n  }\n};\n\nvar getPopularSearch = function getPopularSearch(req, res) {\n  db.collection(\"Distance\").find().sort({\n    hits: -1\n  }).project({\n    source: 1,\n    destination: 1,\n    hits: 1,\n    _id: 0\n  }).toArray(function (error, result) {\n    if (error) return res.status(403).json({\n      error: error\n    });\n\n    if (result.length > 0) {\n      res.send(result[0]);\n    }\n  });\n};\n\nvar getPopularSearchesList = function getPopularSearchesList(req, res) {\n  db.collection(\"Distance\").find().sort({\n    hits: -1\n  }).limit(5).project({\n    source: 1,\n    destination: 1,\n    hits: 1,\n    _id: 0\n  }).toArray(function (error, result) {\n    if (error) return res.status(403).json({\n      error: error\n    });\n\n    if (result) {\n      res.send(result);\n    }\n  });\n};\n\nmodule.exports = {\n  getDistance: getDistance,\n  getPopularSearch: getPopularSearch,\n  getPopularSearchesList: getPopularSearchesList\n};\n\n//# sourceURL=webpack://node-express-rest-api/./controllers/distance.js?");

/***/ }),

/***/ "./model/distance.model.js":
/*!*********************************!*\
  !*** ./model/distance.model.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 20:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar distanceSchema = new Schema({\n  source: {\n    type: String\n  },\n  destination: {\n    type: String\n  },\n  distance: {\n    type: Number\n  },\n  hits: {\n    type: Number\n  }\n}, {\n  collection: 'Distance'\n});\nmodule.exports = mongoose.model('DistanceSchema', distanceSchema);\n\n//# sourceURL=webpack://node-express-rest-api/./model/distance.model.js?");

/***/ }),

/***/ "./routes/distance.js":
/*!****************************!*\
  !*** ./routes/distance.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 12:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar _require = __webpack_require__(/*! ../controllers/distance.js */ \"./controllers/distance.js\"),\n    getDistance = _require.getDistance,\n    getPopularSearch = _require.getPopularSearch,\n    getPopularSearchesList = _require.getPopularSearchesList;\n\nvar router = express.Router();\nrouter.patch('/', getDistance);\nrouter.get('/popular-search', getPopularSearch);\nrouter.get('/popular-search-list', getPopularSearchesList);\nmodule.exports = router;\n\n//# sourceURL=webpack://node-express-rest-api/./routes/distance.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"body-parser\");;\n\n//# sourceURL=webpack://node-express-rest-api/external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"cors\");;\n\n//# sourceURL=webpack://node-express-rest-api/external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"dotenv\");;\n\n//# sourceURL=webpack://node-express-rest-api/external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://node-express-rest-api/external_%22express%22?");

/***/ }),

/***/ "google-distance":
/*!**********************************!*\
  !*** external "google-distance" ***!
  \**********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"google-distance\");;\n\n//# sourceURL=webpack://node-express-rest-api/external_%22google-distance%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"mongoose\");;\n\n//# sourceURL=webpack://node-express-rest-api/external_%22mongoose%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar distancesRoutes = __webpack_require__(/*! ./routes/distance.js */ \"./routes/distance.js\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\"); // Setting up express\n\n\nvar app = express();\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use(cors());\ndotenv.config(); // Connecting mongoDB\n\nmongoose.Promise = global.Promise;\nmongoose.connect(process.env.MONGODB_REMOTE_URI, {\n  useNewUrlParser: true\n}).then(function () {\n  console.log(\"Database connected\");\n}, function (error) {\n  console.log(\"Database could not be connected : \" + error);\n});\nglobal.db = process.env.MONGODB_REMOTE_URI; // Conectting port\n\napp.listen(process.env.PORT || 8080, function () {\n  return console.log(\"server runing on port \".concat(process.env.PORT));\n});\napp.use(\"/distance\", distancesRoutes);\napp.get(\"/\", function (req, res) {\n  res.sendFile(__dirname + \"/index.html\");\n}); // error handler\n\napp.use(function (err, req, res, next) {\n  console.error(err.message);\n  if (!err.statusCode) err.statusCode = 500;\n  res.status(err.statusCode).send(err.message);\n}); // // Static build location\n// app.use(express.static(path.join(__dirname, 'dist')));\n\n//# sourceURL=webpack://node-express-rest-api/./index.js?");
})();

/******/ })()
;