const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

  let result = (Math.floor(Math.random() * 100));

  let gayembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  
  .setColor("#136cff")
  .addField("How gay are you?", message.author.username)
  .addField("Congratulations", "you are " + result + "% gay!");

  return message.channel.send(gayembed);


}
module.exports.help = {
  name: "gay"
}