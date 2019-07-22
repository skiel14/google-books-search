const router = require("express").Router();
const bookRoutes = require("./books");

router.use(function(req,res,next) {
  console.log('%s: %s %s', "api-index.js", req.method, req.url);
  next();
});

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
