const router = require("express").Router();
const bookRoutes = require("./books");
const emailRoutes = require("./email");


// Book routes
router.use("/books", bookRoutes);
router.use("/email", emailRoutes);

module.exports = router;
