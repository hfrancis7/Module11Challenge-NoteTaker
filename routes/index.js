const router = require("express").Router(); //ise router
const htmlRoutes = require("./html");
const apiRoutes = require("./api");

router.use("/", htmlRoutes); //use  htmlroutes
router.use("/api", apiRoutes); //use apiroutes




module.exports = router; //export router