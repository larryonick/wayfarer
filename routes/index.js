import users from "./users";
import signin from "./signin";
import signup from "./signup";
import trips from "./trips";
import bookings from "./bookings";
import express from "express";
import controller from "../controllers/controller";

const router = express.Router();
router.use(trips);
router.use(bookings);
router.use(signin);
router.use(signup);
router.use(users);

/* GET home page. */
router.get("/api/", controller.index);

// /*GET all trips */
// router.get("/api/trips", controller.trips);

// /*GET all bookings */
// router.get("/api/bookings", controller.bookings);

// /*GET all user bookings */
// router.get("/api/bookings/user/:username", controller.user_bookings);

module.exports = router;
