const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let kUser =  message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
        if(!kUser) return message.channel.send("can't find user");
        let kReason = args.join(" ").slice(22);

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No problems");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This user cannot be banned!");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("~kick~")
        .setColor("#ff0c0c")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason);

        let kickChannel = message.guild.channels.find(`name`, "bot-spam")
        if(!kickChannel) return message.channel.send("Can't find Public Chat");


        message.guild.member(kUser).kick(kReason)
        kickChannel.send(kickEmbed);
        


}

module.exports.help = {
    name: "kick"

}
