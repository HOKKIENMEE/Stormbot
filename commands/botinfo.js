const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("One of the awsome Vainglory Bots made for the Community")
        .setColor("#00C3FF")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username);

        return message.channel.send(botembed)
 
    }
        

module.exports.help = {
    name: "botinfo"

}
