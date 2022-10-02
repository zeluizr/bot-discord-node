const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setTitle("🛡 Commands")
    .addFields([
      {
        name: "For more info: ``mz help``",
        value:
          "**Add ``mz`` before any command**\n\n🏅 **Statistics commands** 🏅\n``cooldowns``, ``profile``\n\n:dagger: **Fighting commands** :dagger:\n``hunt``\n\n🛠 **Working commands** 🛠\n``farm``",
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
