const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("newscrim")
    .setDescription(
      `สร้างห้องซ้อมวันที่ ${new Date().toLocaleDateString("th-th")}`
    ),

  async execute(interaction) {
    // Role Check
    if (!interaction.member.roles.cache.find((r) => r.name === "Admin")) {
      await interaction.reply({
        content: "ไม่สามารถใช้คำสั่งนี้ได้!",
        ephemeral: true,
      });
      return;
    }

    const btn = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("newscrim_cf")
          .setLabel("ยืนยันการสร้าง")
          .setStyle("SUCCESS")
      )
      .addComponents(
        new MessageButton()
          .setCustomId("newscrim_cc")
          .setLabel("ยกเลิก")
          .setStyle("DANGER")
      );

    await interaction.reply({
      content: `สร้างห้องซ้อมวันที่ ${new Date().toLocaleDateString("th-th")}`,
      components: [btn],
    });
  },
};
