const mongoose = require("mongoose");

// connect MongoDB
const dbUrl = "mongodb://localhost:27017/pubgScrimsDB";
// mongoose
//   .connect(dbUrl, {
//     useNewUrlParser: true,
//     userUnifiedTopologgy: true,
//   })
//   .catch((err) => console.log(err));
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// Schema
const teamWSchema = new mongoose.Schema({
  team: String,
  tag: String,
  players: {
    player1: String,
    player2: String,
    player3: String,
    player4: String,
    player5: String,
    player6: String,
  },
  owner1: String,
  owner2: String,
  logo: String,
  secret: Number,
  ban: {
    status: Boolean,
    time: Number,
  },
});

// Model
const Team = mongoose.model("Teams", teamWSchema);

// Module
module.exports = { Team };

module.exports.Team.saveTeam = async function (model, data) {
  await model.save(data);
};
