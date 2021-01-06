const mongoose = require("mongoose");
const { generateRandomNumbers } = require("../handlers/TicketHandlers");

const gameroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required!",
  },
  username: {
    type: String,
  },
  ticket: {
    type: Array,
  },
  players: {
    type: Array,
  },
});

module.exports = mongoose.model("Gameroom", gameroomSchema);
