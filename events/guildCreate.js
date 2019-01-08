const Discord = require('discord.js');
const client = new Discord.Client();
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

const girismesaj = [
 
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
