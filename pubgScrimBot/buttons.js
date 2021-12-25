const { ch_register } = require("./config.json");
const wait = require("util").promisify(setTimeout);
const { Scrim } = require("./models/mongodb");

function btnExecute(i) {
  if (i.customId === "newscrim_cf") {
    newScrimCF(i);
  } else if (i.customId === "newscrim_cc") {
    newScrimCC(i);
  }
}

module.exports = { btnExecute };

async function newScrimCF(i) {
  // Remove Button
  await i.update({
    components: [],
  });
  await i.deleteReply();
  let d = new Date()
    .toLocaleDateString("th-TH")
    .replace(new RegExp("/", "g"), "-");

  // Clear All msg
  await i.guild.channels.cache
    .get(ch_register)
    .bulkDelete(99)
    .then((messages) => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);

  await wait(1000);

  // Create Scrim DB
  let data = new Scrim({
    date: new Date().toLocaleDateString("th-TH"),
    teamA: {
      s1: {
        team: "",
        dc: "",
        cf: false,
      },
      s2: {
        team: "",
        dc: "",
        cf: false,
      },
      s3: {
        team: "",
        dc: "",
        cf: false,
      },
      s4: {
        team: "",
        dc: "",
        cf: false,
      },
      s5: {
        team: "",
        dc: "",
        cf: false,
      },
      s6: {
        team: "",
        dc: "",
        cf: false,
      },
      s7: {
        team: "",
        dc: "",
        cf: false,
      },
      s8: {
        team: "",
        dc: "",
        cf: false,
      },
      s9: {
        team: "",
        dc: "",
        cf: false,
      },
      s10: {
        team: "",
        dc: "",
        cf: false,
      },
      s11: {
        team: "",
        dc: "",
        cf: false,
      },
      s12: {
        team: "",
        dc: "",
        cf: false,
      },
      s13: {
        team: "",
        dc: "",
        cf: false,
      },
      s14: {
        team: "",
        dc: "",
        cf: false,
      },
      s15: {
        team: "",
        dc: "",
        cf: false,
      },
      s16: {
        team: "",
        dc: "",
        cf: false,
      },
    },
    teamB: {
      s1: {
        team: "",
        dc: "",
        cf: false,
      },
      s2: {
        team: "",
        dc: "",
        cf: false,
      },
      s3: {
        team: "",
        dc: "",
        cf: false,
      },
      s4: {
        team: "",
        dc: "",
        cf: false,
      },
      s5: {
        team: "",
        dc: "",
        cf: false,
      },
      s6: {
        team: "",
        dc: "",
        cf: false,
      },
      s7: {
        team: "",
        dc: "",
        cf: false,
      },
      s8: {
        team: "",
        dc: "",
        cf: false,
      },
      s9: {
        team: "",
        dc: "",
        cf: false,
      },
      s10: {
        team: "",
        dc: "",
        cf: false,
      },
      s11: {
        team: "",
        dc: "",
        cf: false,
      },
      s12: {
        team: "",
        dc: "",
        cf: false,
      },
      s13: {
        team: "",
        dc: "",
        cf: false,
      },
      s14: {
        team: "",
        dc: "",
        cf: false,
      },
      s15: {
        team: "",
        dc: "",
        cf: false,
      },
      s16: {
        team: "",
        dc: "",
        cf: false,
      },
    },
    teamSup: {
      s1: {
        team: "",
        dc: "",
        cf: false,
      },
      s2: {
        team: "",
        dc: "",
        cf: false,
      },
      s3: {
        team: "",
        dc: "",
        cf: false,
      },
      s4: {
        team: "",
        dc: "",
        cf: false,
      },
      s5: {
        team: "",
        dc: "",
        cf: false,
      },
      s6: {
        team: "",
        dc: "",
        cf: false,
      },
      s7: {
        team: "",
        dc: "",
        cf: false,
      },
      s8: {
        team: "",
        dc: "",
        cf: false,
      },
      s9: {
        team: "",
        dc: "",
        cf: false,
      },
      s10: {
        team: "",
        dc: "",
        cf: false,
      },
      s11: {
        team: "",
        dc: "",
        cf: false,
      },
      s12: {
        team: "",
        dc: "",
        cf: false,
      },
      s13: {
        team: "",
        dc: "",
        cf: false,
      },
      s14: {
        team: "",
        dc: "",
        cf: false,
      },
      s15: {
        team: "",
        dc: "",
        cf: false,
      },
      s16: {
        team: "",
        dc: "",
        cf: false,
      },
    },
  });

  Scrim.saveScrim(data, (err) => {
    if (err) console.log(err);
  });
  // End

  // Update Channel Name
  let channelName = `register-${d}`;
  await i.guild.channels.cache.get(ch_register).setName(channelName);

  // Post at Text Channel
  await i.guild.channels.cache
    .get(ch_register)
    .send(
      `ห้อง Scrim วันที่ ${new Date().toLocaleDateString("th-TH")} @everyone`
    );
}

async function newScrimCC(i) {
  await i.update({
    components: [],
  });
  await i.deleteReply();
}
