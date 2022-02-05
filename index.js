const express = require ("express")
const app = express()

app.listen(3000, () => {
  console.log("Prox.lol is online")
})

app.get("/", (req, res) => {
  res.send("why r u here, skid lol");
})

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Prefix = prox" }, status: "dnd" })

})

client.on("message", message => {
  if(message.content === "prox url") {
    message.channel.send("https://sites.google.com/view/mathworking/home")
  }
  if(message.content === "prox blooket autoanswer") {
    let embed = new Discord.MessageEmbed()
    .setTitle("blooket auto answer cheat")
    .setDescription("https://pastebin.com/t5FNM6gc")
    .setFooter("heres the link!")
 
    message.channel.send({ embeds: [ embed ] })
  }
    if(message.content === "prox blooket tokens") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Blooket token adder")
    .setDescription("https://pastebin.com/Q6sbXz2Y")
    .setFooter("heres the link!")

    message.channel.send( { embeds : [ embed ] })
  }  
    if(message.content === "prox blooket spambox") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Blooket Spam boxes")
    .setDescription("https://pastebin.com/T4edRUmN")
    .setFooter("heres the link!")

    message.channel.send( { embeds : [ embed ] }) 
  }
    if(message.content === "prox blooket selldupeblooks") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Blooket sell dupe blooks")
    .setDescription("https://pastebin.com/arKaFDq2")
    .setFooter("heres the link!")

    message.channel.send( { embeds : [ embed ] }) 
  }
    if(message.content === "prox blooket getallblooks") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Blooket local get all blooks thingy ")
    .setDescription("https://pastebin.com/cX4p0GUm")
    .setFooter("heres the link! **only can be used in game waiting screen**")

    message.channel.send( { embeds : [ embed ] }) 
  }
     if(message.content === "FAQ") {
    let embed = new Discord.MessageEmbed()
    .setTitle("FAQ")
    .setDescription("Prefix = prox. | the script commands are not here for all of the hacks but heres what i have so far prox blooket autoanswer is blooket auto answer, prox blooket tokens is the token adder, prox blooket spambox is a box spam opener, prox blooket selldupeblooks is a auto dupe blook seller")
    .setFooter("***have any questions? @ or dm Test.dll#0001***")
    message.channel.send({embeds:[embed]}) 
  }
})

client.login(process.env.token);
