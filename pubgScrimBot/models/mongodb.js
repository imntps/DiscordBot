const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/pubgScrimsDB";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// Schema
const teamSchema = new mongoose.Schema({
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

const scrimSchema = new mongoose.Schema({
  date: String,
  teamA: {
    s1: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s2: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s3: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s4: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s5: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s6: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s7: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s8: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s9: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s10: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s11: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s12: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s13: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s14: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s15: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s16: {
      team: String,
      dc: String,
      cf: Boolean,
    },
  },
  teamB: {
    s1: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s2: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s3: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s4: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s5: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s6: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s7: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s8: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s9: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s10: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s11: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s12: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s13: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s14: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s15: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s16: {
      team: String,
      dc: String,
      cf: Boolean,
    },
  },
  teamSup: {
    s1: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s2: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s3: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s4: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s5: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s6: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s7: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s8: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s9: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s10: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s11: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s12: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s13: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s14: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s15: {
      team: String,
      dc: String,
      cf: Boolean,
    },
    s16: {
      team: String,
      dc: String,
      cf: Boolean,
    },
  },
});

// Model
const Team = mongoose.model("Teams", teamSchema);
const Scrim = mongoose.model("Scrims", scrimSchema);

// Module
module.exports = { Team, Scrim };

module.exports.Scrim.saveScrim = async function (model, data) {
  await model.save(data);
};
