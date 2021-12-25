const fs = require("fs");
const { token } = require("./config.json");
const { btnExecute } = require("./buttons");
const wait = require("util").promisify(setTimeout);
const { Client, Collection, Intents } = require("discord.js");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log(
    `Ready! ${new Date()
      .toLocaleDateString("th-TH")
      .replace(new RegExp("/", "g"), "-")}`
  );
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }

  if (interaction.isButton()) {
    btnExecute(interaction);
    // if (interaction.customId === "cancel") {
    //   await interaction.component.setLabel("ยกเลิกแล้ว");
    //   await interaction.update({
    //     components: [
    //       new MessageActionRow().addComponents(interaction.component),
    //     ],
    //   });
    // }
  }
});

client.login(token);
