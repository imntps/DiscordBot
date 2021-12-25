const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { ObjSize } = require("../utils.js");
const { getMenuList } = require("../mongoDB/connect.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hungry")
    .setDescription("กินอะไรดีหล่ะ ?"),
  async execute(interaction) {
    // let msg = `ไม่เจออะไรเลย`;
    // if (menu === false) {
    // } else {
    //   msg = `>>> **${menu.name}**\n >>> ${menu.img}`;
    // }

    // await interaction.reply(msg);

    let menu = randomMenu(getMenuList());
    let exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(menu.name)
      .setImage(menu.img);

    await interaction.reply({ embeds: [exampleEmbed] });
  },
};

randomMenu = (obj) => {
  let max = ObjSize(obj);
  if (max === 0) {
    return false;
  } else {
    return obj[Math.floor(Math.random() * max)];
  }
};
