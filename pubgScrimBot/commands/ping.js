const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");
const wait = require("util").promisify(setTimeout);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply(`Pong! <@${interaction.user.id}>`);
    //const message = await interaction.fetchReply();
    // console.log(message);
    await wait(1000);
    await interaction.deleteReply();
  },
};
