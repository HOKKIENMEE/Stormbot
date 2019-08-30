const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


        let bUser =  message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
        if(!bUser) return message.channel.send("can't find user");
        let bReason = args.join(" ").slice(22);

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No problems");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This user cannot be banned!");

        let banEmbed = new Discord.RichEmbed()
        .setDescription("~ban~")
        .setColor("#ff0c0c")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);

        let banChannel = message.guild.channels.find(`name`, "public-chat")
        if(!banChannel) return message.channel.send("Can't find Public Chat");

        message.guild.member(bUser).ban(bReason);
        banChannel.send(banEmbed);

    }

        

module.exports.help = {
    name: "ban"

}
