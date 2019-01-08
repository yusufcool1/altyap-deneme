const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`Müzik`, '/oynat: İstediğin şarkıyı çalar.\n/durdur: Müziği durdurur.\n/devam: Müziği devam ettirir.\n/kuyruk: Kuyruğu söyler\n/geç: Geçerli çalınan müziği geçer\n/ses: Belirlediğiniz değerde sesi açar.\n/ayrıl: Müziği kapatır.')
  .setFooter(`MeeTR - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Oralet Bildirme: /müzik komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(müzik);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'müzik',
    description: 'müzik',
    usage: 'müzik'
  };