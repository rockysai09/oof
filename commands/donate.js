const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let emb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setDescription("Donation to keep bot online with out any downtime") 
    .setTitle("Donate to Ichika")
    .addField("PayPal", "[PayPal](https://www.paypal.me/balasaikumar89)", true)
    .setFooter("NogameNolife Bot", "https://cdn.discordapp.com/avatars/442410451121209365/4272634f3ab276ff263ff16ca3aa560a.png?size=2048")
    .setTimestamp()
    message.channel.send(emb)


}
   exports.help = {
  name: "donate",
  category: "General",
  description: "donation for bot development",
  usage: "donate"
};
