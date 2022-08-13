const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setTitle("🛡 Commands")
    .addFields([
      {
        name: "For more info: ``ffk help``",
        value:
          "**Add ``ffk`` before any command**\n\n🏅 **Statistics commands** 🏅\n``cooldowns``, ``profile``\n\n🗡 **Fighting commands** 🗡\n``hunt``\n\n🛠 **Working commands** 🛠\n``farm``",
        inline: true,
      },
    ]);

  msg.channel.send({ embed });
};

module.exports = {
  name: "help",
  help: "Exibe a ajuda de todos os comandos",
  execute,
};
