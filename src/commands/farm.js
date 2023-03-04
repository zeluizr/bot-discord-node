// const { Configuration, OpenAIApi } = require("openai");
const cohere = require("cohere-ai");

cohere.init("HvDPQMhC3a1B5wPs0kyu9Tf7IpZJxgT8auNRmLZN");

const execute = async (bot, msg, args) => {
  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });

  // const openai = new OpenAIApi(configuration);

  // const embed = await openai.createEmbedding({
  //   model: "text-embedding-ada-002",
  //   input:
  //     "Meu nome é Jose Luiz Rodrigues e eu sou um desenvolvedor de software especializado na plataforma VTEX. Com mais de 5 anos de experiência nessa área, tenho um amplo conhecimento em tecnologias como JavaScript, ReactJS, React Native e NodeJS. Gosta de Jogar Nintendo Switch, assistir filmes e séries, e ouvir música. Minha música favorita é My Mini Ramp do Charlie Brown Jr.",
  // });

  // const user_input_embedding = `Using this context: "${embed.data.data[0].embedding}", answer the following question. \n${args}`;

  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: `I am YoutubeGPT, a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer.\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n Q: ${user_input_embedding} \n A:`,
  //   temperature: 0.2,
  //   max_tokens: 1024,
  //   stop: ["Q:"],
  //   n: 1,
  // });

  const response = await cohere.generate({
    prompt: "o que é python?",
    model: "xlarge",
    temperature: 0.2,
    p: 0.9,
  });

  // msg.channel.send(`**${msg.author.username}** got 1 🍎 apple`);
  // msg.channel.send(response.data.choices[0].text);
  msg.channel.send(response.body.generations[0].text);
};

module.exports = {
  name: "farm",
  help: "Farm",
  execute,
};
