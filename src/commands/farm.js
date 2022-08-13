const execute = (bot, msg, args) => {
  msg.channel.send(`**${msg.author.username}** got 1 🍎 apple`);
};

module.exports = {
  name: "farm",
  help: "Farm",
  execute,
};
