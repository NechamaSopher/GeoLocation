let express = require("express");
let {
  getDistance,
  getPopularSearch,
  getPopularSearchesList,
} = require("../controllers/distance.js");

const router = express.Router();

router.patch("/", getDistance);
router.get("/popular-search", getPopularSearch);
router.get("/popular-search-list", getPopularSearchesList);

module.exports = router;
