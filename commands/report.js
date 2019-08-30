const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user."); 
    let reason = args.join(" ").slice(22);
     
    let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#00C3FF")
        .addField("Reported User", `{rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", reason);

        let reportchannel = message.guild.channels.find('name', "reports")
        if(!reportchannel) return message.channel.send("Couldn't find reports channel.");

        message.delete().catch(O_o=>{});
        reportchannel.send(reportEmbed);

        


}

module.exports.help = {
    name: "report"

}
