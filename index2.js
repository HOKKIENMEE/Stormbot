const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");


fs.readdir("./commands/",(err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.")
        return;
    }

 jsfile.forEach((f,i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`)
    bot.commands.set(props.help.name, props);

 });
    
});


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("the best public Vainglory bot", {type: "PLAYING"});



});



bot.on("guildMemberAdd", async member =>{
    let channel2 = member.guild.channels.find("name","public-chat")

    let inviteembed = new Discord.RichEmbed()
    .addField("Welcome to the  Server!!!", "Please read the rules, thank you!!!")
    .setColor("#00C3FF")




    channel2.send(inviteembed)

    let aRole = member.guild.roles.find("name", "Vainglory Community")
    member.addRole(aRole);
         
});


const TOKEN = " ";
const PREFIX = "/"



bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);


});

bot.login(TOKEN);


