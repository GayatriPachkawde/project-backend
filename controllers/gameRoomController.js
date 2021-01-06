const mongoose = require("mongoose");
const Gameroom = mongoose.model("Gameroom");
const { generateRandomNumbers } = require("../handlers/TicketHandlers");

exports.createGameRoom = async (req, res) => {
  const { name, username } = req.body;

  const gameroomexists = await Gameroom.findOne({ name });
  if (gameroomexists) throw "Gameroom name already exists";

  const gameroom = new Gameroom({
    name,
    username,
  });

  await gameroom.save();

  res.json({
    message: "Gameroom created",
    _id: gameroom._id,
  });
};

exports.getAllGameRooms = async (req, res) => {
  const gamerooms = await Gameroom.find({});
  res.json(gamerooms);
};

exports.getGameRoom = async (req, res) => {
  const name = req.headers.name;
  const gameroom = await Gameroom.findOne({ name });
  console.log(name);
  if (gameroom) {
    res.json({
      id: gameroom._id,
    });
  } else {
    res.json({
      error: "Gameroom does not exist.",
    });
  }
};

exports.getTicket = async (req, res) => {
  const { id } = req.body;
  const gameroom = await Gameroom.findOne({ _id: id });

  gameroom.ticket = generateRandomNumbers();

  res.json({
    ticket: gameroom.ticket,
  });
};
