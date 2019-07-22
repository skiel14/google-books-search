const router = require("express").Router();
const booksController = require("../../controllers/bookscontroller");

// router.use(function(req,res,next) {
//   console.log('%s: %s %s', "api-books.js", req.method, req.url);
//   next();
// });

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
