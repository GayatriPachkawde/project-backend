const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const gameRoomController = require("../controllers/gameRoomController");

const auth = require("../middlewares/auth");
//const { route } = require("./user");

router.post("/ticket", auth, catchErrors(gameRoomController.getTicket));
router.get("/", auth, catchErrors(gameRoomController.getAllGameRooms));
router.post("/", auth, catchErrors(gameRoomController.createGameRoom));
router.get("/getRoom", auth, catchErrors(gameRoomController.getGameRoom));
module.exports = router;
