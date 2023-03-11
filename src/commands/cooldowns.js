const MessageEmbed = require("discord.js").MessageEmbed;
const { getWaitTime } = require("../utils/getWaitTime");

const execute = async (bot, msg, args) => {
  const { wait, waitString } = getWaitTime("2023-08-21T03:08:25.334Z");

  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setAuthor(
      `${msg.author.username} - cooldowns`,
      `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`,
      "https://reisdev.github.io"
    )
    .addFields([
      {
        name: "⚾︎ **Catch Pokemon**",
        value: `
        ${wait ? `⏰ ${waitString} --- \`catch\`` : "✅ --- `catch`"}
        `,
        inline: false,
      },
    ]);

  msg.channel.send({ embed });
};

module.exports = {
  name: "cd",
  help: "Mostra o cooldowns do player",
  execute,
};
