const Discord = require("discord.js");
let superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#db9d00")
  .setTitle("Random doggo generator")
  .setImage(body.url);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "dog"
}