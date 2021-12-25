const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const { Team } = require("../models/mongodb");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("จองห้องซ้อม | register to scrim"),
  async execute(interaction) {
    const discordID = interaction.user.id;

    Team.find(
      { $or: [{ owner1: discordID }, { owner2: discordID }] },
      async function (err, arr) {
        if (Array.isArray(arr) && arr.length) {
          const teamInfo = arr[0];

          let playerDes = "";

          Object.entries(teamInfo.players).forEach(([key, value]) => {
            if (value != "" || value != undefined || value != null) {
              playerDes += value + "\n";
            }
          });

          const btn = new MessageActionRow()
            .addComponents(
              new MessageButton()
                .setCustomId("confirm")
                .setLabel("ยืนยัน (CF)")
                .setStyle("SUCCESS")
            )
            .addComponents(
              new MessageButton()
                .setCustomId("cancel")
                .setLabel("ยกเลิก (CC)")
                .setStyle("DANGER")
            );

          teamInfo.players.player1;
          const embed = new MessageEmbed()
            .setColor("#ffffff")
            .setTitle(`${teamInfo.team} | ${teamInfo.tag}`)
            .setDescription(`<@${interaction.user.id}>\n${playerDes}`);
          // .setThumbnail(
          //   `https://media.discordapp.net/attachments/916984957245722635/921901029413503076/${teamInfo.logo}`
          // );
          // .addField(".", `<@${interaction.user.id}>`, false);

          await interaction.reply({
            content: " ",
            ephemeral: false,
            embeds: [embed],
            components: [btn],
          });
        } else {
          await interaction.reply({
            content: "ไม่พบทีมของคุณ พบปัญหาติดต่อแอดมิน",
            ephemeral: true,
          });
        }
      }
    );
  },
};
