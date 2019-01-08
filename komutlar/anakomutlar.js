const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`MeeTR`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissions=2080767167) | [DBL'de Oyver!](https://www.discordbots-tr.xyz/) | [WebSite](https://meetr.glitch.me)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`MeeTR - Ana Komutlar`, `:white_small_square: | **/otorol-ayarla @rol #kanal**: Otorol Rol'ü Belirler!\n:white_small_square: | **/hoşgeldin-ayarla** = Resimli Hoşgeldin Kanalı Ayarlar!\n| **/sayaç-ayarla <sayı> #kanal**: Sunucuya Sayaç Kanalı Belirler!\n:white_small_square: | **/log-ayarla #kanal**: Kullanıcılar için komutlar.\n:white_small_square: | **/küfür aç/kapat**: Küfür Açar Veya Kapatır.\n:white_small_square: | **/link-engel aç/kapat**: Link  Engel Açar Veya Kapatır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['anakomut', 'anakomutlar', 'anacommand',],
    permLevel: 0
  };
  
  exports.help = {
    name: 'anakomutlar',
    description: 'anakomutlar',
    usage: 'anakomutlar'
  };