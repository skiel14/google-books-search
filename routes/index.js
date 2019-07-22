const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use(function(req, res) {
  res.status(418).send("418 I'm a teapot");
});

router.use(function(req,res,next) {
  console.log('%s: %s %s', "index.js", req.method, req.url);
  next();
});

// API Routes
router.use("/api/", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
