const { SlashCommandBuilder } = require("@discordjs/builders");
const { Message } = require("discord.js");
const wait = require("util").promisify(setTimeout);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Setup server for Scrim"),
  async execute(interaction) {
    // const message = await interaction.fetchReply();
    // await console.log(message.content);

    await interaction.reply({
      content: `Pong! <@${interaction.user.id}>`,
      ephemeral: false,
    });

    // await wait(5000);
    // await interaction.deleteReply();
    // await console.log(interaction);
    //await interaction.guild.channels.create("Category", { type: "category" });
  },
};
