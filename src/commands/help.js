const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
    .setColor("#ff9900")
    .setTitle("š” Commands")
    .addFields([
      {
        name: "For more info: ``mz help``",
        value:
          "**Add ``mz`` before any command**\n\nš **Statistics commands** š\n``cooldowns``, ``profile``\n\n:dagger: **Fighting commands** :dagger:\n``hunt``\n\nš  **Working commands** š \n``farm``",
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
